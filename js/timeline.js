/* Product progress tree.
   The drawing is a projection of _data/timeline: one bough per reporting day,
   one leaf per event. Product spotlight only changes opacity. */
(function (factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (typeof document !== 'undefined' && document.getElementById('timeline-root')) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', api.mount);
    else api.mount();
  }
})(function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';
  var KIND_ORDER = ['launch', 'capability', 'integration', 'pricing', 'access', 'reliability'];
  var LEAF_PATHS = [
    'M 0 0 C 7 -2 16 -16 30 -18 C 42 -19 52 -12 58 -2 C 60 0 60 1 57 4 C 48 15 36 18 24 16 C 12 13 6 4 0 0 Z',
    'M 0 0 C 4 -1 12 -15 24 -17 C 38 -19 50 -13 55 -3 C 57 0 57 2 54 5 C 44 17 30 19 18 15 C 8 11 4 3 0 0 Z',
    'M 0 0 C 8 -1 18 -13 32 -14 C 44 -15 52 -9 57 -1 C 58 1 58 2 56 4 C 47 13 34 15 22 13 C 11 10 5 2 0 0 Z'
  ];
  var VEIN_PATH = 'M 3 0 C 18 -0.6 38 -0.4 54 0 M 20 -1 C 26 -8 31 -11 36 -13 M 22 1 C 29 7 34 10 40 12';

  var UI = {
    replay: { zh: '再生长一次', en: 'Grow again' },
    latest: { zh: '看最新', en: 'Latest' },
    full: { zh: '整棵树', en: 'Whole tree' },
    light: { zh: '照亮', en: 'Light' },
    kind: { zh: '类型', en: 'Type' },
    search: { zh: '搜索叶子', en: 'Search leaves' },
    hint: {
      zh: '点一片叶子看发生了什么、为何重要、证据和日报。上下键沿树移动，点日期展开那一天。',
      en: 'Choose a leaf for what happened, why it matters, the evidence, and the digest. Arrow keys move along the tree. A date expands that day.'
    },
    frame: {
      zh: '产品进展树。旧的在下，新的在上。方向键在叶子之间移动。',
      en: 'Product progress tree. Older growth is below, newer growth is above. Arrow keys move between leaves.'
    },
    happened: { zh: '发生了什么', en: 'What happened' },
    why: { zh: '为何重要', en: 'Why it matters' },
    evidence: { zh: '证据', en: 'Evidence' },
    digest: { zh: '日报', en: 'Digest' },
    updates: { zh: '同日更新', en: 'Updates the same day' },
    reported: { zh: '报道日', en: 'Reported' },
    occurred: { zh: '发生日', en: 'Happened' },
    occurredEmpty: {
      zh: '尚未独立确认，位置按报道日',
      en: 'Not confirmed separately; placed on the reporting day'
    },
    primary: { zh: '主产品', en: 'Primary product' },
    related: { zh: '相关产品', en: 'Related' },
    none: { zh: '无', en: 'None' },
    kindLabel: { zh: '类型', en: 'Type' },
    life: { zh: '阶段', en: 'Stage' },
    size: { zh: '叶子大小', en: 'Leaf size' },
    sizeNote: {
      zh: '编辑重要度，不是点赞或转发',
      en: 'Editorial importance, not likes or reposts'
    },
    digestZh: { zh: '中文日报', en: 'Chinese digest' },
    digestEn: { zh: '英文日报', en: 'English digest' },
    leaves: { zh: '片叶子', en: 'leaves' },
    lit: { zh: '照亮 {n} 片叶子', en: '{n} leaves lit' },
    noneLit: { zh: '没有相符的叶子', en: 'No matching leaves' },
    selected: { zh: '已选择：', en: 'Selected: ' },
    dayLabel: { zh: '展开或收起这一天', en: 'Expand or collapse this day' },
    missing: {
      zh: '时间线数据读不出来。',
      en: 'The timeline data could not be read.'
    }
  };

  var KIND_LABEL = {
    launch: { zh: '发布', en: 'Launch' },
    capability: { zh: '能力', en: 'Capability' },
    integration: { zh: '集成', en: 'Integration' },
    pricing: { zh: '定价', en: 'Pricing' },
    access: { zh: '获取', en: 'Access' },
    reliability: { zh: '可靠性', en: 'Reliability' }
  };
  var LIFE_LABEL = {
    announced: { zh: '已宣布', en: 'Announced' },
    beta: { zh: '公测', en: 'Beta' },
    ga: { zh: '正式发布', en: 'General availability' }
  };
  var IMPORTANCE_LABEL = {
    high: { zh: '高', en: 'High' },
    medium: { zh: '中', en: 'Medium' },
    standard: { zh: '普通', en: 'Standard' }
  };
  var WEEKDAYS = {
    zh: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
  function clamp01(n) { return clamp(n, 0, 1); }
  function ease(t) { var x = clamp01(t); return 1 - (1 - x) * (1 - x) * (1 - x); }
  function span(clock, a, b) { return ease((clock - a) / Math.max(0.0001, b - a)); }
  function add(a, b) { return { x: a.x + b.x, y: a.y + b.y }; }
  function mul(a, s) { return { x: a.x * s, y: a.y * s }; }
  function unit(a) {
    var l = Math.hypot(a.x, a.y) || 1;
    return { x: a.x / l, y: a.y / l };
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function hash32(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function hash01(str, salt) { return (hash32(str + '|' + salt) % 100000) / 100000; }
  function leafScale(importance) {
    if (importance === 'high') return 1.16;
    if (importance === 'medium') return 0.94;
    return 0.76;
  }
  function gradId(importance) {
    if (importance === 'high') return 'tl-grad-high';
    if (importance === 'medium') return 'tl-grad-mid';
    return 'tl-grad-std';
  }

  function cubicAt(c, t) {
    var u = 1 - t;
    return {
      x: u * u * u * c.p0.x + 3 * u * u * t * c.p1.x + 3 * u * t * t * c.p2.x + t * t * t * c.p3.x,
      y: u * u * u * c.p0.y + 3 * u * u * t * c.p1.y + 3 * u * t * t * c.p2.y + t * t * t * c.p3.y
    };
  }
  function cubicDeriv(c, t) {
    var u = 1 - t;
    return {
      x: 3 * u * u * (c.p1.x - c.p0.x) + 6 * u * t * (c.p2.x - c.p1.x) + 3 * t * t * (c.p3.x - c.p2.x),
      y: 3 * u * u * (c.p1.y - c.p0.y) + 6 * u * t * (c.p2.y - c.p1.y) + 3 * t * t * (c.p3.y - c.p2.y)
    };
  }
  function fmt(p) { return p.x.toFixed(2) + ' ' + p.y.toFixed(2); }
  function cubicPath(c) {
    return 'M ' + fmt(c.p0) + ' C ' + fmt(c.p1) + ', ' + fmt(c.p2) + ', ' + fmt(c.p3);
  }
  function taperPath(c, w0, w1, t0, t1) {
    t0 = t0 || 0;
    t1 = t1 == null ? 1 : t1;
    var left = [];
    var right = [];
    var samples = 26;
    for (var i = 0; i <= samples; i++) {
      var t = t0 + (t1 - t0) * (i / samples);
      var p = cubicAt(c, t);
      var d = cubicDeriv(c, t);
      var n = unit({ x: -d.y, y: d.x });
      var w = w0 + (w1 - w0) * t;
      left.push({ x: p.x + n.x * w, y: p.y + n.y * w });
      right.push({ x: p.x - n.x * w, y: p.y - n.y * w });
    }
    var pts = left.concat(right.reverse());
    return pts.map(function (p, i) { return (i ? 'L ' : 'M ') + fmt(p); }).join(' ') + ' Z';
  }
  function makeBranch(attach, side, reach, lift, mode) {
    if (mode === 'narrow') {
      return {
        p0: { x: attach.x, y: attach.y },
        p1: { x: attach.x + side * reach * 0.38, y: attach.y - lift * 0.22 },
        p2: { x: attach.x + side * reach * 0.72, y: attach.y - lift * 0.68 },
        p3: { x: attach.x + side * reach * 0.96, y: attach.y - lift }
      };
    }
    return {
      p0: { x: attach.x, y: attach.y },
      p1: { x: attach.x + side * reach * 0.30, y: attach.y - lift * 0.05 },
      p2: { x: attach.x + side * reach * 0.72, y: attach.y - lift * 1.08 },
      p3: { x: attach.x + side * reach, y: attach.y - lift * 0.58 }
    };
  }

  function groupEvents(events) {
    var map = {};
    events.forEach(function (event) {
      if (!map[event.reported_on]) map[event.reported_on] = [];
      map[event.reported_on].push(event);
    });
    return Object.keys(map).sort().map(function (date) {
      var list = map[date].slice().sort(function (a, b) {
        if (a.order !== b.order) return a.order - b.order;
        return a.id < b.id ? -1 : 1;
      });
      return { date: date, events: list };
    });
  }

  function canvasFor(mode, dayCount) {
    if (mode === 'wide') return { vw: 1200, vh: 780 };
    return { vw: 680, vh: 620 + dayCount * 390 };
  }

  function trunkOf(vw, vh, mode) {
    var cx = mode === 'narrow' ? vw * 0.32 : vw * 0.5;
    return {
      p0: { x: cx, y: vh - 52 },
      p1: { x: cx - vw * (mode === 'narrow' ? 0.03 : 0.075), y: vh * 0.68 },
      p2: { x: cx + vw * (mode === 'narrow' ? 0.035 : 0.075), y: vh * 0.34 },
      p3: { x: cx - vw * 0.012, y: 58 }
    };
  }

  function attachT(i, n) {
    if (n <= 1) return 0.52;
    return 0.26 + (0.42 * i) / (n - 1);
  }

  function metricsFor(days, mode, vw, vh, expandedDate, viewportWidth) {
    var trunk = trunkOf(vw, vh, mode);
    var unitPx = Math.max(280, viewportWidth || vw) / vw;
    var minDist = Math.max(mode === 'narrow' ? 96 : 68, 54 / unitPx);
    return {
      vw: vw,
      vh: vh,
      trunk: trunk,
      minDist: minDist,
      days: days.map(function (day, i) {
        var side = mode === 'narrow' ? 1 : (i % 2 === 0 ? 1 : -1);
        var attach = cubicAt(trunk, attachT(i, days.length));
        var expanded = expandedDate === day.date;
        var count = day.events.length;
        var gutter = mode === 'narrow' ? vw * 0.34 : 48;
        var maxReach = side > 0 ? vw - gutter - attach.x : attach.x - gutter;
        var reach = mode === 'narrow' ? maxReach : 240 + count * 34;
        var lift = mode === 'narrow' ? Math.max(130, Math.max(1, count - 1) * minDist * 0.9) : 58 + count * 12;
        if (expanded) {
          reach = Math.min(maxReach, reach * (mode === 'narrow' ? 1.04 : 1.14));
          lift *= mode === 'narrow' ? 1.18 : 1.16;
        }
        reach = Math.min(reach, Math.max(88, maxReach));
        var params = day.events.map(function (event, k) {
          var u = count === 1 ? 0.62 : 0.2 + (0.66 * k) / (count - 1);
          if (expanded) u = count === 1 ? 0.64 : 0.12 + (0.78 * k) / (count - 1);
          var scale = leafScale(event.importance);
          var pet = (30 + scale * 16) * (expanded ? 1.28 : 1);
          pet += (hash01(event.id, 'pet') - 0.5) * 7;
          return {
            id: event.id,
            event: event,
            u: u,
            pet: pet,
            side: k % 2 === 0 ? 1 : -1,
            scale: scale,
            jitter: (hash01(event.id, 'ang') - 0.5) * 12,
            variant: hash32(event.id) % LEAF_PATHS.length
          };
        });
        relaxParams(params, attach, side, reach, lift, minDist, mode);
        return {
          date: day.date,
          side: side,
          attach: attach,
          reach: reach,
          lift: lift,
          leaves: params
        };
      })
    };
  }

  function placeOnBranch(branch, param) {
    var stem = cubicAt(branch, param.u);
    var tan = unit(cubicDeriv(branch, param.u));
    var normal = { x: -tan.y, y: tan.x };
    var tip = add(stem, mul(normal, param.side * param.pet));
    var aim = unit({ x: tip.x - stem.x, y: tip.y - stem.y - param.pet * 0.18 });
    var angle = Math.atan2(aim.y, aim.x) * 180 / Math.PI + param.jitter;
    var rad = angle * Math.PI / 180;
    var dir = { x: Math.cos(rad), y: Math.sin(rad) };
    var bladeLen = 58 * param.scale;
    return {
      stem: stem,
      tip: tip,
      angle: angle,
      dir: dir,
      bladeMid: add(tip, mul(dir, bladeLen * 0.46)),
      bladeTip: add(tip, mul(dir, bladeLen))
    };
  }

  function relaxParams(params, attach, side, reach, lift, minDist, mode) {
    var branch = makeBranch(attach, side, reach, lift, mode);
    for (var iter = 0; iter < 16; iter++) {
      var pts = params.map(function (param) { return placeOnBranch(branch, param).bladeMid; });
      var hit = false;
      for (var a = 0; a < params.length; a++) {
        for (var b = a + 1; b < params.length; b++) {
          var dx = pts[b].x - pts[a].x;
          var dy = pts[b].y - pts[a].y;
          var dist = Math.hypot(dx, dy) || 0.01;
          if (dist >= minDist) continue;
          hit = true;
          var push = (minDist - dist) / minDist;
          params[b].u = clamp(params[b].u + 0.02 * push, 0.1, 0.95);
          params[a].u = clamp(params[a].u - 0.012 * push, 0.08, 0.93);
          params[a].pet = Math.min(120, params[a].pet + 6 * push);
          params[b].pet = Math.min(128, params[b].pet + 7 * push);
        }
      }
      if (!hit) break;
    }
  }

  function realize(rest, expanded, blend, expandedDate, mode) {
    var vw = rest.vw;
    var vh = rest.vh;
    var days = rest.days.map(function (day, i) {
      var other = expanded.days[i];
      var t = expandedDate === day.date ? blend : 0;
      var reach = lerp(day.reach, other.reach, t);
      var lift = lerp(day.lift, other.lift, t);
      var branch = makeBranch(day.attach, day.side, reach, lift, mode);
      var leaves = day.leaves.map(function (leaf, k) {
        var alt = other.leaves[k];
        var param = {
          id: leaf.id,
          event: leaf.event,
          u: lerp(leaf.u, alt.u, t),
          pet: lerp(leaf.pet, alt.pet, t),
          side: leaf.side,
          scale: leaf.scale,
          jitter: leaf.jitter,
          variant: leaf.variant
        };
        var placed = placeOnBranch(branch, param);
        return {
          id: leaf.id,
          event: leaf.event,
          scale: leaf.scale,
          variant: leaf.variant,
          stem: placed.stem,
          tip: placed.tip,
          angle: placed.angle,
          dir: placed.dir,
          bladeMid: placed.bladeMid,
          bladeTip: placed.bladeTip,
          label: labelFor(placed, day.side, mode, vw)
        };
      });
      return {
        date: day.date,
        side: day.side,
        attach: day.attach,
        branch: branch,
        leaves: leaves,
        dayLabel: dayLabelFor(day.attach, day.side, mode, vw)
      };
    });
    relaxLabels(days, mode, vh);
    return { vw: vw, vh: vh, trunk: rest.trunk, days: days, mode: mode };
  }

  function labelFor(placed, daySide, mode, vw) {
    var dir = placed.dir || { x: 1, y: 0 };
    if (mode === 'narrow') {
      if (dir.x < 0.2) {
        return {
          x: Math.max(placed.bladeMid.x, placed.tip.x) + 18,
          y: placed.bladeMid.y,
          anchor: 'start'
        };
      }
      return {
        x: placed.bladeTip.x + dir.x * 28,
        y: placed.bladeTip.y + dir.y * 18,
        anchor: 'start'
      };
    }
    return {
      x: placed.bladeTip.x + dir.x * 34,
      y: placed.bladeTip.y + dir.y * 34,
      anchor: dir.x >= 0.2 ? 'start' : dir.x <= -0.2 ? 'end' : 'middle'
    };
  }

  function dayLabelFor(attach, side, mode, vw) {
    if (mode === 'narrow') {
      return {
        x: Math.max(24, attach.x - 16),
        y: attach.y - 26,
        anchor: 'end'
      };
    }
    return {
      x: attach.x - side * 18,
      y: attach.y - 34,
      anchor: side > 0 ? 'end' : 'start'
    };
  }

  function relaxLabels(days, mode, vh) {
    var items = [];
    days.forEach(function (day) {
      items.push({ node: day.dayLabel, x: day.dayLabel.x, y: day.dayLabel.y });
      day.leaves.forEach(function (leaf) {
        items.push({ node: leaf.label, x: leaf.label.x, y: leaf.label.y });
      });
    });
    var w = mode === 'narrow' ? 176 : 146;
    var h = mode === 'narrow' ? 58 : 36;
    function box(item) {
      var anchor = item.node.anchor;
      var x0 = anchor === 'end' ? item.x - w : anchor === 'middle' ? item.x - w / 2 : item.x;
      return { x0: x0, x1: x0 + w, y0: item.y - h / 2, y1: item.y + h / 2 };
    }
    for (var iter = 0; iter < 24; iter++) {
      var hit = false;
      for (var a = 0; a < items.length; a++) {
        for (var b = a + 1; b < items.length; b++) {
          var A = box(items[a]);
          var B = box(items[b]);
          var overlapX = Math.min(A.x1, B.x1) - Math.max(A.x0, B.x0);
          var overlapY = Math.min(A.y1, B.y1) - Math.max(A.y0, B.y0);
          if (overlapX <= 6 || overlapY <= 2) continue;
          hit = true;
          var push = overlapY / 2 + 1.5;
          if (items[a].y <= items[b].y) {
            items[a].y -= push;
            items[b].y += push;
          } else {
            items[b].y -= push;
            items[a].y += push;
          }
        }
      }
      if (!hit) break;
    }
    items.forEach(function (item) {
      item.node.y = clamp(item.y, 22, vh - 22);
    });
  }

  function buildSchedule(days) {
    var cursor = 0.24;
    var branchDur = 0.13;
    var leafDur = 0.1;
    var stagger = 0.034;
    var branches = [];
    var leaves = [];
    days.forEach(function (day) {
      var b0 = cursor;
      var b1 = cursor + branchDur;
      branches.push([b0, b1]);
      var l0 = b0 + branchDur * 0.55;
      var row = day.events.map(function (_, k) {
        var start = l0 + k * stagger;
        return [start, start + leafDur];
      });
      leaves.push(row);
      var last = row.length ? row[row.length - 1][1] : b1;
      cursor = Math.max(b1, last) + 0.03;
    });
    var scale = cursor > 0.9 ? 0.9 / cursor : 1;
    function sc(pair) { return [pair[0] * scale, pair[1] * scale]; }
    return {
      trunk: [0, 0.26 * scale + 0.02],
      branches: branches.map(sc),
      leaves: leaves.map(function (row) { return row.map(sc); }),
      bud: [Math.min(0.9, cursor * scale), 1]
    };
  }

  function layoutTree(events, opts) {
    var mode = opts.mode === 'narrow' ? 'narrow' : 'wide';
    var days = groupEvents(events);
    var size = canvasFor(mode, days.length);
    var rest = metricsFor(days, mode, size.vw, size.vh, null, opts.viewportWidth);
    var expanded = metricsFor(days, mode, size.vw, size.vh, opts.expandedDate || null, opts.viewportWidth);
    return {
      geometry: realize(rest, expanded, opts.blend || 0, opts.expandedDate || null, mode),
      schedule: buildSchedule(days)
    };
  }

  function getLang() {
    var lang = document.documentElement.getAttribute('data-lang');
    if (lang === 'en' || lang === 'zh') return lang;
    try { return localStorage.getItem('site-lang') === 'en' ? 'en' : 'zh'; }
    catch (err) { return 'zh'; }
  }
  function t(key) {
    var row = UI[key];
    var lang = getLang();
    return (row && (row[lang] || row.zh)) || '';
  }
  function tx(value) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    var lang = getLang();
    return value[lang] || value.zh || '';
  }
  function weekday(date) {
    var d = new Date(date + 'T12:00:00+08:00');
    return WEEKDAYS[getLang()][d.getUTCDay()];
  }
  function formatDay(date) {
    var parts = date.split('-');
    if (getLang() === 'en') return String(Number(parts[2])) + ' ' + MONTHS[Number(parts[1]) - 1];
    return Number(parts[1]) + '月' + Number(parts[2]) + '日';
  }

  function decodeEmbed(text) {
    if (text.indexOf('&') === -1) return text;
    var area = document.createElement('textarea');
    area.innerHTML = text;
    return area.value;
  }

  function normalize(data) {
    var products = Array.isArray(data.products) ? data.products : [];
    var events = [];
    var groups = data.events || {};
    Object.keys(groups).forEach(function (month) {
      var bucket = groups[month] || {};
      Object.keys(bucket).forEach(function (id) { events.push(bucket[id]); });
    });
    events.sort(function (a, b) {
      if (a.reported_on !== b.reported_on) return a.reported_on < b.reported_on ? -1 : 1;
      return (a.order || 0) - (b.order || 0);
    });
    var byId = {};
    products.forEach(function (product) { byId[product.id] = product; });
    return {
      products: products,
      productById: byId,
      coverage: data.coverage || {},
      events: events
    };
  }

  function loadModel() {
    var node = document.getElementById('timeline-data');
    if (!node) throw new Error('missing data');
    return normalize(JSON.parse(decodeEmbed(node.textContent.trim())));
  }

  function belongs(event, productId) {
    return event.primary_product === productId || (event.related_products || []).indexOf(productId) !== -1;
  }

  function svgEl(name, attrs) {
    var node = document.createElementNS(SVGNS, name);
    if (attrs) Object.keys(attrs).forEach(function (key) { node.setAttribute(key, attrs[key]); });
    return node;
  }

  function mount() {
    var root = document.getElementById('timeline-root');
    if (!root || root.getAttribute('data-ready') === '1') return;
    var model;
    try {
      model = loadModel();
      if (!model.events.length) throw new Error('empty');
    } catch (err) {
      root.textContent = t('missing');
      return;
    }
    root.setAttribute('data-ready', '1');
    var base = root.getAttribute('data-baseurl') || '';

    var state = {
      reduce: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      clock: 0,
      blend: 0,
      expandedDate: null,
      product: null,
      kind: null,
      query: '',
      selectedId: null,
      hoverId: null,
      mode: 'wide',
      viewportWidth: 1100,
      layout: null,
      schedule: null,
      dragMoved: false
    };
    var growRaf = 0;
    var blendRaf = 0;
    var nodes = {};

    root.innerHTML = '';
    var controls = el('div', 'tl-controls');
    var filters = el('div', 'tl-filters');
    var status = el('p', 'tl-status');
    status.setAttribute('aria-live', 'polite');
    var frame = el('div', 'tl-frame');
    frame.tabIndex = 0;
    frame.setAttribute('role', 'group');
    var canvas = el('div', 'tl-canvas');
    var svg = svgEl('svg', { role: 'img', 'aria-hidden': 'true', preserveAspectRatio: 'xMidYMin meet' });
    var overlay = el('div', 'tl-overlay');
    var hint = el('p', 'tl-hint');
    var coverage = el('p', 'tl-coverage');
    var live = el('div', 'tl-live sr-only');
    live.setAttribute('aria-live', 'polite');
    var detail = el('div', 'tl-detail');
    detail.hidden = true;
    canvas.appendChild(svg);
    canvas.appendChild(overlay);
    frame.appendChild(canvas);
    var stack = el('div', 'tl-stack');
    controls.classList.add('tl-controls');
    filters.classList.add('tl-filters');
    stack.appendChild(controls);
    stack.appendChild(filters);
    stack.appendChild(status);
    stack.appendChild(frame);
    root.appendChild(stack);
    root.appendChild(hint);
    root.appendChild(coverage);
    root.appendChild(live);
    root.appendChild(detail);

    function el(tag, className) {
      var node = document.createElement(tag);
      if (className) node.className = className;
      return node;
    }

    var replayBtn = button('replay', play);
    var latestBtn = button('latest', showLatest);
    var fullBtn = button('full', showFull);
    controls.appendChild(replayBtn);
    controls.appendChild(latestBtn);
    controls.appendChild(fullBtn);

    var lightLabel = el('span', 'tl-filter-label');
    var kindLabel = el('span', 'tl-filter-label');
    filters.appendChild(lightLabel);
    model.products.forEach(function (product) {
      var chip = button(null, function () { toggleProduct(product.id); });
      chip.textContent = product.name;
      chip.setAttribute('data-product', product.id);
      filters.appendChild(chip);
    });
    filters.appendChild(kindLabel);
    var kindsPresent = {};
    model.events.forEach(function (event) { kindsPresent[event.kind] = true; });
    KIND_ORDER.forEach(function (kind) {
      if (!kindsPresent[kind]) return;
      var chip = button(null, function () { toggleKind(kind); });
      chip.setAttribute('data-kind', kind);
      filters.appendChild(chip);
    });
    var searchLabel = el('label', 'tl-search-label');
    searchLabel.setAttribute('for', 'tl-search');
    var searchName = el('span', 'sr-only');
    var search = document.createElement('input');
    search.id = 'tl-search';
    search.className = 'tl-search';
    search.type = 'search';
    search.autocomplete = 'off';
    search.addEventListener('input', function () {
      state.query = search.value.trim();
      renderFrame();
      renderStatus();
    });
    search.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        search.value = '';
        state.query = '';
        renderFrame();
        renderStatus();
        event.stopPropagation();
      }
    });
    searchLabel.appendChild(searchName);
    searchLabel.appendChild(search);
    filters.appendChild(searchLabel);

    buildSvg();
    buildOverlay();
    measure();
    renderGeometry();
    renderTexts();
    play();

    var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMq.addEventListener('change', function () {
      state.reduce = reduceMq.matches;
      if (state.reduce) {
        cancelAnimationFrame(growRaf);
        state.clock = 1;
        state.blend = state.expandedDate ? 1 : 0;
        renderGeometry();
        renderFrame();
      }
    });
    if (typeof ResizeObserver === 'function') {
      var observer = new ResizeObserver(function () { measure(); renderGeometry(); renderFrame(); });
      observer.observe(frame);
    } else {
      window.addEventListener('resize', function () { measure(); renderGeometry(); renderFrame(); });
    }
    var langObserver = new MutationObserver(function () { renderTexts(); renderDetail(); });
    langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });

    var drag = null;
    frame.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'touch') return;
      if (event.button !== 0) return;
      if (event.target.closest && event.target.closest('button, .tl-label')) return;
      frame.setPointerCapture(event.pointerId);
      var scroller = frame.scrollHeight > frame.clientHeight + 4 ? frame : document.scrollingElement;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        left: scroller.scrollLeft,
        top: scroller.scrollTop,
        scroller: scroller,
        moved: false
      };
      frame.classList.add('is-dragging');
    });
    frame.addEventListener('pointermove', function (event) {
      if (!drag || drag.id !== event.pointerId) return;
      var dx = event.clientX - drag.x;
      var dy = event.clientY - drag.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) drag.moved = true;
      drag.scroller.scrollLeft = drag.left - dx;
      drag.scroller.scrollTop = drag.top - dy;
    });
    function endDrag(event) {
      if (!drag || drag.id !== event.pointerId) return;
      state.dragMoved = drag.moved;
      drag = null;
      frame.classList.remove('is-dragging');
      if (frame.hasPointerCapture && frame.hasPointerCapture(event.pointerId)) {
        frame.releasePointerCapture(event.pointerId);
      }
    }
    frame.addEventListener('pointerup', endDrag);
    frame.addEventListener('pointercancel', endDrag);
    frame.addEventListener('click', function (event) {
      if (!state.dragMoved) return;
      event.preventDefault();
      event.stopPropagation();
      state.dragMoved = false;
    }, true);
    frame.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowUp') { event.preventDefault(); moveSelection(1); }
      else if (event.key === 'ArrowDown') { event.preventDefault(); moveSelection(-1); }
      else if (event.key === 'Home') { event.preventDefault(); moveEdge(false); }
      else if (event.key === 'End') { event.preventDefault(); moveEdge(true); }
      else if (event.key === 'Escape') { event.preventDefault(); showFull(); }
    });

    function button(key, onClick) {
      var node = document.createElement('button');
      node.type = 'button';
      node.className = 'tl-textbtn';
      if (key) node.setAttribute('data-ui', key);
      node.addEventListener('click', onClick);
      return node;
    }

    function measure() {
      var width = frame.clientWidth || root.clientWidth || 0;
      if (width < 40) return;
      state.viewportWidth = width;
      state.mode = width < 760 ? 'narrow' : 'wide';
    }

    function currentLayout() {
      return layoutTree(model.events, {
        mode: state.mode,
        blend: state.blend,
        expandedDate: state.expandedDate,
        viewportWidth: state.viewportWidth
      });
    }

    function renderGeometry() {
      var laid = currentLayout();
      state.layout = laid.geometry;
      state.schedule = laid.schedule;
      var geo = laid.geometry;
      svg.setAttribute('viewBox', '0 0 ' + geo.vw + ' ' + geo.vh);
      nodes.paper.setAttribute('width', geo.vw);
      nodes.paper.setAttribute('height', geo.vh);
      nodes.sky.setAttribute('width', geo.vw);
      nodes.sky.setAttribute('height', geo.vh);
      nodes.grain.setAttribute('width', geo.vw);
      nodes.grain.setAttribute('height', geo.vh);
      var y = geo.vh - 34;
      nodes.ground.setAttribute('d', 'M ' + (geo.vw * 0.3) + ' ' + y + ' Q ' + (geo.vw * 0.5) + ' ' + (y + 12) + ' ' + (geo.vw * 0.72) + ' ' + y);
      nodes.soil.setAttribute('cx', geo.trunk.p0.x);
      nodes.soil.setAttribute('cy', geo.trunk.p0.y + 6);
      nodes.trunkMaskPath.setAttribute('d', cubicPath(geo.trunk));
      nodes.bark.setAttribute('d', taperPath(geo.trunk, 13, 2.6));
      nodes.barkHi.setAttribute('d', taperPath(geo.trunk, 4.2, 0.9));
      nodes.roots.forEach(function (rootNode, index) {
        var origin = geo.trunk.p0;
        var curve = index === 0
          ? { p0: origin, p1: { x: origin.x - 28, y: origin.y + 8 }, p2: { x: origin.x - 78, y: origin.y + 16 }, p3: { x: origin.x - 118, y: origin.y + 6 } }
          : { p0: origin, p1: { x: origin.x + 22, y: origin.y + 10 }, p2: { x: origin.x + 72, y: origin.y + 14 }, p3: { x: origin.x + 112, y: origin.y + 2 } };
        rootNode.mask.setAttribute('d', cubicPath(curve));
        rootNode.path.setAttribute('d', taperPath(curve, 6.5, 1.1));
      });
      nodes.bud.setAttribute('transform', 'translate(' + geo.trunk.p3.x.toFixed(2) + ' ' + geo.trunk.p3.y.toFixed(2) + ')');
      geo.days.forEach(function (day) {
        var dayNodes = nodes.days[day.date];
        dayNodes.mask.setAttribute('d', cubicPath(day.branch));
        dayNodes.bough.setAttribute('d', taperPath(day.branch, 6.4, 1.5));
        dayNodes.boughHi.setAttribute('d', taperPath(day.branch, 2.2, 0.55));
        dayNodes.fork.setAttribute('cx', day.attach.x);
        dayNodes.fork.setAttribute('cy', day.attach.y);
        var dayBtn = dayNodes.button;
        dayBtn.style.left = (day.dayLabel.x / geo.vw * 100) + '%';
        dayBtn.style.top = (day.dayLabel.y / geo.vh * 100) + '%';
        dayBtn.setAttribute('data-anchor', day.dayLabel.anchor);
        day.leaves.forEach(function (leaf) {
          var leafNodes = dayNodes.leaves[leaf.id];
          leafNodes.petiole.setAttribute('d', 'M ' + fmt(leaf.stem) + ' L ' + fmt(leaf.tip));
          leafNodes.spin.setAttribute('transform', 'translate(' + fmt(leaf.tip) + ') rotate(' + leaf.angle.toFixed(2) + ')');
          var label = leafNodes.label;
          label.style.left = (leaf.label.x / geo.vw * 100) + '%';
          label.style.top = (leaf.label.y / geo.vh * 100) + '%';
          label.setAttribute('data-anchor', leaf.label.anchor);
          var hit = leaf.event.importance === 'high' ? 52 : 44;
          leafNodes.button.style.left = (leaf.bladeMid.x / geo.vw * 100) + '%';
          leafNodes.button.style.top = (leaf.bladeMid.y / geo.vh * 100) + '%';
          leafNodes.button.style.width = hit + 'px';
          leafNodes.button.style.height = hit + 'px';
        });
      });
      renderFrame();
    }

    function lit(event) {
      if (state.product && !belongs(event, state.product)) return false;
      if (state.kind && event.kind !== state.kind) return false;
      if (state.query && !matches(event, state.query)) return false;
      return true;
    }
    function filterOn() { return !!(state.product || state.kind || state.query); }
    function matches(event, query) {
      var q = query.toLowerCase();
      var parts = [
        tx(event.title), tx(event.summary), tx(event.why), tx(event.short),
        productName(event.primary_product),
        KIND_LABEL[event.kind].zh, KIND_LABEL[event.kind].en
      ];
      [event.primary_product].concat(event.related_products || []).forEach(function (id) {
        var product = model.productById[id];
        if (!product) return;
        parts.push(product.name);
        (product.aliases || []).forEach(function (alias) { parts.push(alias); });
      });
      return parts.join('\n').toLowerCase().indexOf(q) !== -1;
    }

    function renderFrame() {
      if (!state.layout || !state.schedule) return;
      var clock = state.clock;
      var schedule = state.schedule;
      var filtering = filterOn();
      var trunkGrow = span(clock, schedule.trunk[0], schedule.trunk[1]);
      nodes.trunkMaskPath.setAttribute('stroke-dashoffset', String(1 - trunkGrow));
      var litDays = state.layout.days.filter(function (day) {
        return day.leaves.some(function (leaf) { return lit(leaf.event); });
      });
      nodes.bark.style.opacity = filtering ? 0.28 : 1;
      nodes.barkHi.style.opacity = filtering ? 0.16 : 0.55;
      if (filtering && litDays.length) {
        var t0 = 1;
        var t1 = 0;
        state.layout.days.forEach(function (day, index) {
          if (litDays.indexOf(day) === -1) return;
          var t = attachT(index, state.layout.days.length);
          t0 = Math.min(t0, t);
          t1 = Math.max(t1, t);
        });
        nodes.trunkHot.setAttribute('d', taperPath(state.layout.trunk, 13, 2.6, Math.max(0, t0 - 0.05), Math.min(1, t1 + 0.06)));
        nodes.trunkHot.style.opacity = trunkGrow;
      } else {
        nodes.trunkHot.style.opacity = 0;
      }
      nodes.roots.forEach(function (rootNode) {
        var grow = span(clock, 0, 0.14);
        rootNode.mask.setAttribute('stroke-dashoffset', String(1 - grow));
        rootNode.path.style.opacity = filtering ? 0.28 : 0.95;
      });
      var bud = span(clock, schedule.bud[0], schedule.bud[1]);
      nodes.bud.style.opacity = filtering ? bud * 0.35 : bud;
      state.layout.days.forEach(function (day, dayIndex) {
        var dayNodes = nodes.days[day.date];
        var branchSpan = schedule.branches[dayIndex];
        var branchGrow = span(clock, branchSpan[0], branchSpan[1]);
        var dayLit = day.leaves.some(function (leaf) { return lit(leaf.event); });
        dayNodes.mask.setAttribute('stroke-dashoffset', String(1 - branchGrow));
        var branchOpacity = branchGrow * (dayLit || !filtering ? 1 : 0.22);
        dayNodes.bough.style.opacity = branchOpacity;
        dayNodes.boughHi.style.opacity = branchOpacity * 0.5;
        dayNodes.fork.style.opacity = branchOpacity;
        dayNodes.button.style.opacity = span(clock, branchSpan[0] + 0.04, branchSpan[1] + 0.02);
        dayNodes.button.hidden = dayNodes.button.style.opacity < 0.35;
        day.leaves.forEach(function (leaf, leafIndex) {
          var leafNodes = dayNodes.leaves[leaf.id];
          var leafSpan = schedule.leaves[dayIndex][leafIndex];
          var appear = span(clock, leafSpan[0], leafSpan[1]);
          var on = lit(leaf.event);
          leafNodes.group.style.opacity = appear * (on || !filtering ? 1 : 0.2);
          leafNodes.petiole.setAttribute('stroke-dashoffset', String(1 - appear));
          var opened = 0.12 + 0.88 * appear;
          leafNodes.blade.setAttribute('transform', 'scale(' + (leaf.scale * opened).toFixed(3) + ')');
          leafNodes.button.hidden = appear < 0.62;
          leafNodes.button.setAttribute('aria-pressed', state.selectedId === leaf.id ? 'true' : 'false');
          leafNodes.group.classList.toggle('is-selected', state.selectedId === leaf.id);
          leafNodes.group.classList.toggle('is-hot', state.hoverId === leaf.id);
          leafNodes.label.style.opacity = appear < 0.7 ? 0 : (on || !filtering ? 1 : 0.32);
          leafNodes.label.classList.toggle('is-hot', state.hoverId === leaf.id || state.selectedId === leaf.id);
        });
      });
    }

    function renderStatus() {
      if (!filterOn()) {
        status.textContent = '';
        status.hidden = true;
        return;
      }
      status.hidden = false;
      var count = model.events.filter(lit).length;
      status.textContent = count ? t('lit').replace('{n}', String(count)) : t('noneLit');
    }

    function renderTexts() {
      root.querySelectorAll('[data-ui]').forEach(function (node) {
        node.textContent = t(node.getAttribute('data-ui'));
      });
      lightLabel.textContent = t('light');
      kindLabel.textContent = t('kind');
      searchName.textContent = t('search');
      search.setAttribute('aria-label', t('search'));
      search.placeholder = t('search');
      hint.textContent = t('hint');
      coverage.textContent = tx(model.coverage.note);
      frame.setAttribute('aria-label', t('frame'));
      root.querySelectorAll('[data-kind]').forEach(function (node) {
        var kind = node.getAttribute('data-kind');
        node.textContent = tx(KIND_LABEL[kind]);
        node.setAttribute('aria-pressed', state.kind === kind ? 'true' : 'false');
      });
      root.querySelectorAll('[data-product]').forEach(function (node) {
        node.setAttribute('aria-pressed', state.product === node.getAttribute('data-product') ? 'true' : 'false');
      });
      if (!state.layout) return;
      state.layout.days.forEach(function (day) {
        var dayNodes = nodes.days[day.date];
        dayNodes.button.innerHTML = '';
        dayNodes.button.appendChild(document.createTextNode(formatDay(day.date)));
        var small = document.createElement('small');
        var countWord = getLang() === 'en'
          ? day.leaves.length + ' ' + (day.leaves.length === 1 ? 'leaf' : 'leaves')
          : day.leaves.length + ' 片叶子';
        small.textContent = weekday(day.date) + ' · ' + countWord;
        dayNodes.button.appendChild(small);
        dayNodes.button.setAttribute('aria-expanded', state.expandedDate === day.date ? 'true' : 'false');
        dayNodes.button.setAttribute('aria-label', formatDay(day.date) + ' ' + weekday(day.date) + ', ' + countWord + '. ' + t('dayLabel'));
        day.leaves.forEach(function (leaf) {
          var leafNodes = dayNodes.leaves[leaf.id];
          leafNodes.labelText.textContent = tx(leaf.event.short);
          leafNodes.label.classList.toggle('is-major', leaf.event.importance === 'high');
          leafNodes.button.setAttribute('aria-label', tx(leaf.event.title) + '，' + formatDay(day.date) + '，' + tx(IMPORTANCE_LABEL[leaf.event.importance]));
        });
      });
      renderStatus();
      renderDetail();
    }

    function renderDetail() {
      var event = model.events.filter(function (item) { return item.id === state.selectedId; })[0];
      detail.innerHTML = '';
      if (!event) {
        detail.hidden = true;
        return;
      }
      detail.hidden = false;
      var title = document.createElement('h2');
      title.textContent = tx(event.title);
      var en = el('p', 'tl-entitle');
      en.textContent = event.title.en && getLang() === 'zh' ? event.title.en : (getLang() === 'en' ? event.title.zh : '');
      if (!en.textContent) en.hidden = true;
      detail.appendChild(title);
      detail.appendChild(en);
      var meta = el('dl', 'tl-meta');
      meta.appendChild(metaRow(t('reported'), formatDay(event.reported_on) + ' · ' + event.timezone));
      meta.appendChild(metaRow(t('occurred'), event.happened_at || t('occurredEmpty')));
      meta.appendChild(metaRow(t('primary'), productName(event.primary_product)));
      var related = (event.related_products || []).map(productName).filter(Boolean);
      meta.appendChild(metaRow(t('related'), related.length ? related.join(getLang() === 'en' ? ', ' : '、') : t('none')));
      meta.appendChild(metaRow(t('kindLabel'), tx(KIND_LABEL[event.kind])));
      if (event.lifecycle) meta.appendChild(metaRow(t('life'), tx(LIFE_LABEL[event.lifecycle])));
      meta.appendChild(metaRow(t('size'), tx(IMPORTANCE_LABEL[event.importance]) + ' · ' + t('sizeNote')));
      detail.appendChild(meta);
      var spot = el('div', 'tl-controls');
      [event.primary_product].concat(event.related_products || []).forEach(function (id) {
        var chip = button(null, function () { toggleProduct(id); });
        chip.textContent = productName(id);
        chip.setAttribute('aria-pressed', state.product === id ? 'true' : 'false');
        spot.appendChild(chip);
      });
      detail.appendChild(spot);
      detail.appendChild(kicker(t('happened')));
      var summary = document.createElement('p');
      summary.textContent = tx(event.summary);
      detail.appendChild(summary);
      detail.appendChild(kicker(t('why')));
      var why = document.createElement('p');
      why.textContent = tx(event.why);
      detail.appendChild(why);
      if (event.notes) {
        var note = el('p', 'tl-note');
        note.textContent = tx(event.notes);
        detail.appendChild(note);
      }
      if (event.updates && event.updates.length) {
        detail.appendChild(kicker(t('updates')));
        var updateList = el('ul', 'tl-links');
        event.updates.forEach(function (update) {
          var item = document.createElement('li');
          item.textContent = tx(update.label) + ' — ' + tx(update.note);
          updateList.appendChild(item);
        });
        detail.appendChild(updateList);
      }
      detail.appendChild(kicker(t('evidence')));
      detail.appendChild(linkList(event.sources.map(function (source) {
        return { href: source.url, text: tx(source.label), external: true };
      })));
      detail.appendChild(kicker(t('digest')));
      detail.appendChild(linkList(event.digest_refs.map(function (ref) {
        return {
          href: hrefPath(ref.path),
          text: (ref.lang === 'en' ? t('digestEn') : t('digestZh')) + ' · ' + ref.date,
          external: false
        };
      })));
      live.textContent = t('selected') + tx(event.title);
    }

    function metaRow(label, value) {
      var wrap = document.createElement('div');
      var dt = document.createElement('dt');
      var dd = document.createElement('dd');
      dt.textContent = label;
      dd.textContent = value;
      wrap.appendChild(dt);
      wrap.appendChild(dd);
      return wrap;
    }
    function kicker(text) {
      var node = el('div', 'tl-kicker');
      node.textContent = text;
      return node;
    }
    function linkList(items) {
      var list = el('ul', 'tl-links');
      items.forEach(function (item) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        if (item.external) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }
        li.appendChild(a);
        list.appendChild(li);
      });
      return list;
    }
    function hrefPath(urlPath) {
      if (!urlPath) return '#';
      if (base && urlPath.charAt(0) === '/') return base + urlPath;
      return urlPath;
    }
    function productName(id) {
      var product = model.productById[id];
      return product ? product.name : id;
    }

    function buildSvg() {
      var defs = svgEl('defs');
      [['high', 'tl-grad-high'], ['mid', 'tl-grad-mid'], ['std', 'tl-grad-std']].forEach(function (pair) {
        var grad = svgEl('linearGradient', { id: pair[1], x1: '0', y1: '0', x2: '1', y2: '0.15' });
        grad.appendChild(svgEl('stop', { offset: '0', 'class': 'tl-stop-' + pair[0] + '-0' }));
        grad.appendChild(svgEl('stop', { offset: '1', 'class': 'tl-stop-' + pair[0] + '-1' }));
        defs.appendChild(grad);
      });
      var filter = svgEl('filter', { id: 'tl-grain', x: '0', y: '0', width: '100%', height: '100%' });
      filter.appendChild(svgEl('feTurbulence', {
        type: 'fractalNoise', baseFrequency: '0.85', numOctaves: '2', seed: '7', stitchTiles: 'stitch'
      }));
      filter.appendChild(svgEl('feColorMatrix', { type: 'saturate', values: '0' }));
      defs.appendChild(filter);
      var trunkMask = svgEl('mask', { id: 'tl-mask-trunk' });
      var trunkMaskPath = svgEl('path', {
        fill: 'none', stroke: 'white', 'stroke-width': '36', 'stroke-linecap': 'round',
        pathLength: '1', 'stroke-dasharray': '1'
      });
      trunkMask.appendChild(trunkMaskPath);
      defs.appendChild(trunkMask);
      svg.appendChild(defs);
      nodes.paper = svgEl('rect', { 'class': 'tl-paper', x: '0', y: '0' });
      nodes.sky = svgEl('rect', { 'class': 'tl-sky', x: '0', y: '0' });
      nodes.grain = svgEl('rect', { 'class': 'tl-grain', x: '0', y: '0', filter: 'url(#tl-grain)' });
      nodes.soil = svgEl('ellipse', { 'class': 'tl-soil', rx: '78', ry: '9' });
      nodes.ground = svgEl('path', { 'class': 'tl-ground' });
      svg.appendChild(nodes.paper);
      svg.appendChild(nodes.sky);
      svg.appendChild(nodes.grain);
      svg.appendChild(nodes.soil);
      svg.appendChild(nodes.ground);
      nodes.roots = [0, 1].map(function (index) {
        var mask = svgEl('mask', { id: 'tl-mask-root-' + index });
        var maskPath = svgEl('path', {
          fill: 'none', stroke: 'white', 'stroke-width': '20', 'stroke-linecap': 'round',
          pathLength: '1', 'stroke-dasharray': '1'
        });
        mask.appendChild(maskPath);
        defs.appendChild(mask);
        var path = svgEl('path', { 'class': 'tl-bark', mask: 'url(#tl-mask-root-' + index + ')' });
        svg.appendChild(path);
        return { path: path, mask: maskPath };
      });
      var trunk = svgEl('g', { mask: 'url(#tl-mask-trunk)' });
      nodes.bark = svgEl('path', { 'class': 'tl-bark' });
      nodes.barkHi = svgEl('path', { 'class': 'tl-bark-hi' });
      nodes.trunkHot = svgEl('path', { 'class': 'tl-bark' });
      trunk.appendChild(nodes.bark);
      trunk.appendChild(nodes.barkHi);
      trunk.appendChild(nodes.trunkHot);
      svg.appendChild(trunk);
      nodes.trunkMaskPath = trunkMaskPath;
      nodes.days = {};
      groupEvents(model.events).forEach(function (day) {
        var mask = svgEl('mask', { id: 'tl-mask-' + day.date });
        var maskPath = svgEl('path', {
          fill: 'none', stroke: 'white', 'stroke-width': '24', 'stroke-linecap': 'round',
          pathLength: '1', 'stroke-dasharray': '1'
        });
        mask.appendChild(maskPath);
        defs.appendChild(mask);
        var group = svgEl('g', { 'class': 'tl-day' });
        var bough = svgEl('path', { 'class': 'tl-bough', mask: 'url(#tl-mask-' + day.date + ')' });
        var boughHi = svgEl('path', { 'class': 'tl-bough-hi', mask: 'url(#tl-mask-' + day.date + ')' });
        var fork = svgEl('circle', { 'class': 'tl-fork', r: '4.5' });
        group.appendChild(bough);
        group.appendChild(boughHi);
        group.appendChild(fork);
        var leafNodes = {};
        day.events.forEach(function (event) {
          var leaf = svgEl('g', { 'class': 'tl-leaf', 'data-id': event.id });
          var petiole = svgEl('path', {
            'class': 'tl-petiole', fill: 'none', 'stroke-width': '1.4',
            pathLength: '1', 'stroke-dasharray': '1', 'stroke-linecap': 'round'
          });
          var spin = svgEl('g', { 'class': 'tl-spin' });
          var lift = svgEl('g', { 'class': 'tl-lift' });
          var blade = svgEl('g');
          var shape = svgEl('path', { 'class': 'tl-shape', d: LEAF_PATHS[hash32(event.id) % LEAF_PATHS.length], fill: 'url(#' + gradId(event.importance) + ')' });
          var vein = svgEl('path', { 'class': 'tl-vein', d: VEIN_PATH, 'stroke-width': '0.8' });
          blade.appendChild(shape);
          blade.appendChild(vein);
          lift.appendChild(blade);
          spin.appendChild(lift);
          leaf.appendChild(petiole);
          leaf.appendChild(spin);
          group.appendChild(leaf);
          leafNodes[event.id] = { group: leaf, petiole: petiole, spin: spin, blade: blade };
        });
        svg.appendChild(group);
        nodes.days[day.date] = {
          mask: maskPath, bough: bough, boughHi: boughHi, fork: fork, leaves: leafNodes, button: null
        };
      });
      var bud = svgEl('g', { 'class': 'tl-bud-group' });
      [-108, -72].forEach(function (angle) {
        var g = svgEl('g', { transform: 'rotate(' + angle + ') scale(0.42)' });
        g.appendChild(svgEl('path', { 'class': 'tl-bud', d: LEAF_PATHS[0] }));
        bud.appendChild(g);
      });
      svg.appendChild(bud);
      nodes.bud = bud;
    }

    function buildOverlay() {
      groupEvents(model.events).forEach(function (day) {
        var dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        dayBtn.className = 'tl-day-btn';
        dayBtn.addEventListener('click', function () {
          if (state.dragMoved) return;
          toggleDay(day.date);
        });
        overlay.appendChild(dayBtn);
        nodes.days[day.date].button = dayBtn;
        day.events.forEach(function (event) {
          var label = el('div', 'tl-label');
          var labelText = el('span', 'tl-label-lift');
          label.appendChild(labelText);
          label.addEventListener('click', function () {
            if (state.dragMoved) return;
            selectLeaf(event.id);
          });
          var leafBtn = document.createElement('button');
          leafBtn.type = 'button';
          leafBtn.className = 'tl-leaf-btn';
          leafBtn.addEventListener('click', function () {
            if (state.dragMoved) return;
            selectLeaf(event.id);
          });
          leafBtn.addEventListener('mouseenter', function () { setHover(event.id); });
          leafBtn.addEventListener('mouseleave', function () { if (state.hoverId === event.id) setHover(null); });
          leafBtn.addEventListener('focus', function () { setHover(event.id); });
          leafBtn.addEventListener('blur', function () { if (state.hoverId === event.id) setHover(null); });
          overlay.appendChild(label);
          overlay.appendChild(leafBtn);
          nodes.days[day.date].leaves[event.id].label = label;
          nodes.days[day.date].leaves[event.id].labelText = labelText;
          nodes.days[day.date].leaves[event.id].button = leafBtn;
        });
      });
    }

    function setHover(id) {
      state.hoverId = id;
      renderFrame();
    }
    function selectLeaf(id) {
      var event = model.events.filter(function (item) { return item.id === id; })[0];
      if (!event) return;
      state.selectedId = id;
      var next = event.reported_on;
      var changed = state.expandedDate !== next;
      state.expandedDate = next;
      if (changed) animateBlend();
      else renderFrame();
      renderTexts();
      var btn = nodes.days[event.reported_on].leaves[id].button;
      scrollIntoFrame(btn);
    }
    function toggleDay(date) {
      state.expandedDate = state.expandedDate === date ? null : date;
      animateBlend();
      renderTexts();
    }
    function toggleProduct(id) {
      state.product = state.product === id ? null : id;
      renderFrame();
      renderTexts();
    }
    function toggleKind(kind) {
      state.kind = state.kind === kind ? null : kind;
      renderFrame();
      renderTexts();
    }
    function showLatest() {
      state.expandedDate = null;
      animateBlend();
      var latestDate = model.events[model.events.length - 1].reported_on;
      var pick = null;
      model.events.forEach(function (event) {
        if (event.reported_on !== latestDate) return;
        if (!pick && event.importance === 'high') pick = event;
      });
      if (!pick) {
        model.events.forEach(function (event) {
          if (event.reported_on === latestDate && !pick) pick = event;
        });
      }
      state.selectedId = pick ? pick.id : null;
      frame.scrollTo({ top: 0, left: 0, behavior: state.reduce ? 'auto' : 'smooth' });
      renderTexts();
      renderFrame();
      if (pick) scrollIntoFrame(nodes.days[pick.reported_on].leaves[pick.id].button);
    }
    function showFull() {
      state.expandedDate = null;
      state.product = null;
      state.kind = null;
      state.query = '';
      state.selectedId = null;
      search.value = '';
      animateBlend();
      frame.scrollTo({ top: 0, left: 0, behavior: state.reduce ? 'auto' : 'smooth' });
      renderTexts();
      renderFrame();
    }
    function play() {
      cancelAnimationFrame(growRaf);
      if (state.reduce) {
        state.clock = 1;
        renderFrame();
        return;
      }
      state.clock = 0;
      renderFrame();
      var start = performance.now();
      var dur = 3400;
      function tick(now) {
        state.clock = Math.min(1, (now - start) / dur);
        renderFrame();
        if (state.clock < 1) growRaf = requestAnimationFrame(tick);
      }
      growRaf = requestAnimationFrame(tick);
    }
    function animateBlend() {
      cancelAnimationFrame(blendRaf);
      var target = state.expandedDate ? 1 : 0;
      if (state.reduce) {
        state.blend = target;
        renderGeometry();
        return;
      }
      var from = state.blend;
      var start = performance.now();
      function tick(now) {
        var t = Math.min(1, (now - start) / 460);
        state.blend = from + (target - from) * ease(t);
        renderGeometry();
        if (t < 1) blendRaf = requestAnimationFrame(tick);
      }
      blendRaf = requestAnimationFrame(tick);
    }
    function visibleLeaves() {
      if (!state.layout) return [];
      var list = [];
      state.layout.days.forEach(function (day, dayIndex) {
        day.leaves.forEach(function (leaf, leafIndex) {
          var pair = state.schedule.leaves[dayIndex][leafIndex];
          if (span(state.clock, pair[0], pair[1]) >= 0.62) list.push(leaf);
        });
      });
      return list;
    }
    function moveSelection(step) {
      var list = visibleLeaves();
      if (!list.length) return;
      var index = -1;
      list.forEach(function (leaf, i) { if (leaf.id === state.selectedId) index = i; });
      if (index < 0) index = step > 0 ? -1 : 0;
      var next = list[clamp(index + step, 0, list.length - 1)];
      selectLeaf(next.id);
      nodes.days[next.event.reported_on].leaves[next.id].button.focus();
    }
    function moveEdge(newest) {
      var list = visibleLeaves();
      if (!list.length) return;
      var next = newest ? list[list.length - 1] : list[0];
      selectLeaf(next.id);
      nodes.days[next.event.reported_on].leaves[next.id].button.focus();
    }
    function scrollIntoFrame(node) {
      if (!node) return;
      var frameBox = frame.getBoundingClientRect();
      var box = node.getBoundingClientRect();
      if (box.top < frameBox.top + 12) frame.scrollTop -= frameBox.top + 12 - box.top;
      else if (box.bottom > frameBox.bottom - 12) frame.scrollTop += box.bottom - (frameBox.bottom - 12);
    }
  }

  return {
    layoutTree: layoutTree,
    buildSchedule: buildSchedule,
    normalize: normalize,
    belongs: belongs,
    mount: mount
  };
});
