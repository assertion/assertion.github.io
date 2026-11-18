#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');

var ROOT = path.resolve(__dirname, '..');
var DATA = path.join(ROOT, '_data', 'timeline');
var ERRORS = [];

var KINDS = ['launch', 'capability', 'integration', 'pricing', 'access', 'reliability'];
var IMPORTANCE = ['high', 'medium', 'standard'];
var LIFECYCLE = [null, 'announced', 'beta', 'ga'];
var CATEGORIES = ['model', 'ide', 'agent', 'platform'];
var SOURCE_KINDS = ['tweet', 'official'];

function fail(msg) {
  ERRORS.push(msg);
}

function readJson(file) {
  var text = fs.readFileSync(file, 'utf8');
  try {
    return JSON.parse(text);
  } catch (err) {
    fail(path.relative(ROOT, file) + ' is not valid JSON: ' + err.message);
    return null;
  }
}

function isObject(v) {
  return v && typeof v === 'object' && !Array.isArray(v);
}

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  var parts = value.split('-').map(Number);
  var d = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  return d.getUTCFullYear() === parts[0] && d.getUTCMonth() === parts[1] - 1 && d.getUTCDate() === parts[2];
}

function bilingual(value, label) {
  if (!isObject(value) || typeof value.zh !== 'string' || typeof value.en !== 'string') {
    fail(label + ' needs zh and en strings');
    return;
  }
  if (!value.zh.trim() || !value.en.trim()) fail(label + ' has an empty language');
  scanText(value.zh, label + '.zh');
  scanText(value.en, label + '.en');
}

function siteHost() {
  var cfg = fs.readFileSync(path.join(ROOT, '_config.yml'), 'utf8');
  var match = cfg.match(/^url:\s*(\S+)\s*$/m);
  if (!match) return '';
  return match[1].replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase();
}

var HOST = siteHost();

function scanText(text, label) {
  if (typeof text !== 'string') return;
  if (text.indexOf('<') !== -1 || text.indexOf('>') !== -1) {
    fail(label + ' contains < or >, which would break the HTML embed');
  }
  if (HOST && text.toLowerCase().indexOf(HOST) !== -1) {
    fail(label + ' contains the configured site host');
  }
  if (/javascript:/i.test(text)) fail(label + ' contains a javascript URL');
}

function walkStrings(value, label) {
  if (typeof value === 'string') scanText(value, label);
  else if (Array.isArray(value)) value.forEach(function (item, i) { walkStrings(item, label + '[' + i + ']'); });
  else if (isObject(value)) Object.keys(value).forEach(function (key) { walkStrings(value[key], label + '.' + key); });
}

function postForPath(urlPath) {
  var match = /^\/(\d{4})\/(\d{2})\/(\d{2})\/([a-z0-9-]+)\/?$/.exec(urlPath);
  if (!match) return null;
  return {
    file: path.join(ROOT, '_posts', match[1] + '-' + match[2] + '-' + match[3] + '-' + match[4] + '.md'),
    canonical: '/' + match[1] + '/' + match[2] + '/' + match[3] + '/' + match[4]
  };
}

function permalinkOf(file) {
  var text = fs.readFileSync(file, 'utf8');
  var front = text.split('---')[1] || '';
  var match = front.match(/^permalink:\s*(\S+)\s*$/m);
  if (!match) return null;
  return match[1].replace(/\/$/, '');
}

function langOf(file) {
  var text = fs.readFileSync(file, 'utf8');
  var front = text.split('---')[1] || '';
  var match = front.match(/^lang:\s*(\S+)\s*$/m);
  return match ? match[1] : 'zh';
}

var productsFile = path.join(DATA, 'products.json');
var coverageFile = path.join(DATA, 'coverage.json');
var products = readJson(productsFile) || [];
var coverage = readJson(coverageFile) || {};
var productById = {};

if (!Array.isArray(products)) fail('products.json must be an array');
products.forEach(function (product) {
  if (!isObject(product) || typeof product.id !== 'string') {
    fail('product is missing id');
    return;
  }
  if (productById[product.id]) fail('duplicate product id ' + product.id);
  productById[product.id] = product;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.id)) fail('bad product id ' + product.id);
  if (typeof product.name !== 'string' || !product.name.trim()) fail(product.id + ' missing name');
  if (!Array.isArray(product.aliases)) fail(product.id + ' aliases must be an array');
  if (CATEGORIES.indexOf(product.category) === -1) fail(product.id + ' bad category');
  walkStrings(product, product.id);
});

if (coverage.timezone !== 'Asia/Shanghai') fail('coverage.timezone must be Asia/Shanghai');
if (!Array.isArray(coverage.reported_dates) || !coverage.reported_dates.length) {
  fail('coverage.reported_dates must list the entered days');
}
bilingual(coverage.note, 'coverage.note');
walkStrings(coverage, 'coverage');

var eventsDir = path.join(DATA, 'events');
var events = [];
var seenIds = {};

function walkEvents(dir) {
  fs.readdirSync(dir).forEach(function (name) {
    var full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walkEvents(full);
      return;
    }
    if (!name.endsWith('.json')) {
      fail('unexpected file ' + path.relative(ROOT, full));
      return;
    }
    var event = readJson(full);
    if (!event) return;
    var rel = path.relative(ROOT, full);
    var folder = path.basename(path.dirname(full));
    if (event.id !== name.slice(0, -5)) fail(rel + ' filename must match id');
    if (seenIds[event.id]) fail('duplicate event id ' + event.id);
    seenIds[event.id] = true;
    events.push({ event: event, file: rel, folder: folder });
  });
}

if (!fs.existsSync(eventsDir)) fail('missing events directory');
else walkEvents(eventsDir);

var byDate = {};
events.forEach(function (row) {
  var event = row.event;
  var label = row.file;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(event.id || '')) fail(label + ' bad id');
  if (!validDate(event.reported_on)) fail(label + ' bad reported_on');
  if (event.id && event.reported_on && event.id.slice(-(event.reported_on.length)) !== event.reported_on) {
    fail(label + ' id must end with reported_on');
  }
  if (event.reported_on && row.folder !== event.reported_on.slice(0, 7)) {
    fail(label + ' must live in events/' + (event.reported_on || '').slice(0, 7));
  }
  if (event.happened_at !== null && !validDate(event.happened_at)) fail(label + ' happened_at must be null or a date');
  if (event.timezone !== 'Asia/Shanghai') fail(label + ' timezone must be Asia/Shanghai');
  if (!Number.isInteger(event.order) || event.order < 1) fail(label + ' order must be a positive integer');
  bilingual(event.title, label + ' title');
  bilingual(event.short, label + ' short');
  bilingual(event.summary, label + ' summary');
  bilingual(event.why, label + ' why');
  if (event.notes != null) bilingual(event.notes, label + ' notes');
  if (!productById[event.primary_product]) fail(label + ' primary_product is not in the registry');
  if (!Array.isArray(event.related_products)) fail(label + ' related_products must be an array');
  else {
    var related = {};
    event.related_products.forEach(function (id) {
      if (!productById[id]) fail(label + ' related product ' + id + ' is not in the registry');
      if (id === event.primary_product) fail(label + ' repeats the primary product in related_products');
      if (related[id]) fail(label + ' duplicate related product ' + id);
      related[id] = true;
    });
  }
  if (KINDS.indexOf(event.kind) === -1) fail(label + ' bad kind');
  if (IMPORTANCE.indexOf(event.importance) === -1) fail(label + ' bad importance');
  if (LIFECYCLE.indexOf(event.lifecycle) === -1) fail(label + ' bad lifecycle');
  if (!Array.isArray(event.sources) || !event.sources.length) fail(label + ' needs sources');
  else event.sources.forEach(function (source, i) {
    var where = label + ' source ' + i;
    if (SOURCE_KINDS.indexOf(source.kind) === -1) fail(where + ' bad kind');
    if (typeof source.url !== 'string' || !/^https:\/\/[^\s]+$/.test(source.url)) fail(where + ' needs an https URL');
    bilingual(source.label, where + ' label');
    if (HOST && source.url.toLowerCase().indexOf(HOST) !== -1) fail(where + ' points at the site host');
  });
  if (!Array.isArray(event.digest_refs) || !event.digest_refs.length) fail(label + ' needs digest_refs');
  else {
    var langs = {};
    event.digest_refs.forEach(function (ref, i) {
      var where = label + ' digest ' + i;
      if (!validDate(ref.date)) fail(where + ' bad date');
      if (ref.date !== event.reported_on) fail(where + ' date must match reported_on');
      if (ref.lang !== 'zh' && ref.lang !== 'en') fail(where + ' lang must be zh or en');
      if (langs[ref.lang]) fail(where + ' duplicate lang');
      langs[ref.lang] = true;
      if (typeof ref.path !== 'string' || ref.path.charAt(0) !== '/' || ref.path.indexOf('://') !== -1) {
        fail(where + ' path must be a root-relative path');
      } else {
        var post = postForPath(ref.path);
        if (!post) fail(where + ' path is not a post path');
        else if (!fs.existsSync(post.file)) fail(where + ' post file is missing');
        else {
          var declared = permalinkOf(post.file);
          if (declared && declared !== post.canonical) fail(where + ' does not match the post permalink');
          if (langOf(post.file) !== ref.lang) fail(where + ' lang does not match the post');
        }
      }
    });
    if (!langs.zh || !langs.en) fail(label + ' needs both zh and en digest refs');
  }
  var updates = event.updates || [];
  if (!Array.isArray(updates)) fail(label + ' updates must be an array');
  else updates.forEach(function (update, i) {
    bilingual(update.label, label + ' update ' + i + ' label');
    bilingual(update.note, label + ' update ' + i + ' note');
  });
  walkStrings(event, label);
  if (!byDate[event.reported_on]) byDate[event.reported_on] = [];
  byDate[event.reported_on].push(event);
});

Object.keys(byDate).forEach(function (date) {
  var orders = {};
  byDate[date].forEach(function (event) {
    if (orders[event.order]) fail(date + ' has duplicate order ' + event.order);
    orders[event.order] = true;
  });
});

var covered = (coverage.reported_dates || []).slice();
var actual = Object.keys(byDate).sort();
var coveredSorted = covered.slice().sort();
if (actual.join(',') !== coveredSorted.join(',')) {
  fail('coverage.reported_dates must match event days exactly (' + actual.join(', ') + ')');
}
covered.forEach(function (date) {
  var count = (byDate[date] || []).length;
  if (!coverage.counts || coverage.counts[date] !== count) {
    fail('coverage count for ' + date + ' should be ' + count);
  }
  if (count < 1) fail(date + ' would draw an empty bough');
});

if (byDate['2026-11-16']) fail('2026-11-16 was not a verified seed day');

Object.keys(productById).forEach(function (id) {
  var used = events.some(function (row) {
    return row.event.primary_product === id || (row.event.related_products || []).indexOf(id) !== -1;
  });
  if (!used) fail('product ' + id + ' is never referenced');
});

if (ERRORS.length) {
  ERRORS.forEach(function (msg) { console.error(msg); });
  console.error(ERRORS.length + ' timeline error' + (ERRORS.length === 1 ? '' : 's'));
  process.exit(1);
}

console.log('timeline ok: ' + events.length + ' events, ' + products.length + ' products, ' + actual.join(', '));
