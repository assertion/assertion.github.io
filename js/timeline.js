/* Product progress vine.
   The drawing is a projection of _data/timeline: one continuous pea shoot,
   one compound leaf per event, older growth below. Product spotlight only
   changes opacity. Days add length; they do not insert an empty trunk. */
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
  var PEA_LEAFLET = 'M 0 0.3 C 1.5 -5.1 8.2 -9.2 14.2 -8.5 C 19.6 -7.6 21.6 -2.4 20.1 1.5 C 16.8 6.6 8.6 7.5 2.8 3.9 C 0.7 2.3 0 1.1 0 0.3 Z';
  var PEA_VEIN = 'M 1.4 0.7 C 6.8 -0.6 12.2 -1.8 18 -1.5';
  var BUD_LEAF = 'M 0 3.4 C 1.6 -0.2 4.6 -7.4 2.6 -12.8 C 1.3 -16.4 -2 -16.6 -2.4 -12.8 C -3 -8.2 -0.8 -4.8 0.3 -0.8 C 0.7 1 0.3 2.4 0 3.4 Z';

  var UI = {
    replay: { zh: '再生长一次', en: 'Grow again' },
    latest: { zh: '看最新', en: 'Latest' },
    full: { zh: '整株苗', en: 'Whole vine' },
    light: { zh: '照亮', en: 'Light' },
    kind: { zh: '类型', en: 'Type' },
    search: { zh: '搜索叶子', en: 'Search leaves' },
    idle: {
      zh: '点一片叶子，看这一天这个产品的进展。',
      en: 'Choose a leaf to read that product on this day.'
    },
    close: { zh: '关闭', en: 'Close' },
    frame: {
      zh: '产品进展苗。旧的在下，新的在上。方向键在叶子之间移动。',
      en: 'Product progress vine. Older growth is below, newer growth is above. Arrow keys move between leaves.'
    },
    reported: { zh: '报道日', en: 'Reporting day' },
    importance: { zh: '重要度：', en: 'Importance: ' },
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
  function linearSpan(clock, a, b) { return clamp01((clock - a) / Math.max(0.0001, b - a)); }
  function smoothstep(t) {
    var x = clamp01(t);
    return x * x * (3 - 2 * x);
  }
  function stemProgress(clock) {
    var x = linearSpan(clock, 0.05, 0.92);
    return x * 0.78 + smoothstep(x) * 0.22;
  }
  function settle(t) {
    var x = clamp01(t);
    var c = 1.35;
    var y = 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2);
    return clamp(y, 0, 1.08);
  }
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
    if (importance === 'high') return 1.08;
    if (importance === 'medium') return 0.98;
    return 0.9;
  }
  function leafletPairs(importance) { return importance === 'high' ? 3 : 2; }
  function localRachis(importance) { return 15 + leafletPairs(importance) * 12; }
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

  function smoothStem(points) {
    var cubics = [];
    var d = 'M ' + fmt(points[0]);
    for (var i = 0; i < points.length - 1; i++) {
      var p0 = points[Math.max(0, i - 1)];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = points[Math.min(points.length - 1, i + 2)];
      var c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
      var c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
      cubics.push({ p0: p1, p1: c1, p2: c2, p3: p2 });
      d += ' C ' + fmt(c1) + ', ' + fmt(c2) + ', ' + fmt(p2);
    }
    var samples = [];
    cubics.forEach(function (c, idx) {
      var steps = 10;
      for (var s = 0; s < steps; s++) samples.push(cubicAt(c, s / steps));
      if (idx === cubics.length - 1) samples.push(c.p3);
    });
    return { d: d, samples: samples };
  }

  function ribbonPath(samples, w0, w1) {
    var left = [];
    var right = [];
    for (var i = 0; i < samples.length; i++) {
      var prev = samples[Math.max(0, i - 1)];
      var next = samples[Math.min(samples.length - 1, i + 1)];
      var n = unit({ x: -(next.y - prev.y), y: next.x - prev.x });
      var t = samples.length === 1 ? 0 : i / (samples.length - 1);
      var w = w0 + (w1 - w0) * t;
      left.push({ x: samples[i].x + n.x * w, y: samples[i].y + n.y * w });
      right.push({ x: samples[i].x - n.x * w, y: samples[i].y - n.y * w });
    }
    var pts = left.concat(right.reverse());
    return pts.map(function (p, i) { return (i ? 'L ' : 'M ') + fmt(p); }).join(' ') + ' Z';
  }

  function sampleAt(samples, t) {
    if (!samples || !samples.length) return { x: 0, y: 0 };
    var x = clamp01(t) * (samples.length - 1);
    var i = Math.floor(x);
    var f = x - i;
    var a = samples[i];
    var b = samples[Math.min(samples.length - 1, i + 1)];
    return { x: lerp(a.x, b.x, f), y: lerp(a.y, b.y, f) };
  }

  function sampleTangent(samples, t) {
    var a = sampleAt(samples, Math.max(0, t - 0.012));
    var b = sampleAt(samples, Math.min(1, t + 0.012));
    return unit({ x: b.x - a.x, y: b.y - a.y });
  }

  function stemMeasure(samples) {
    var acc = [0];
    for (var i = 1; i < samples.length; i++) {
      acc.push(acc[i - 1] + Math.hypot(samples[i].x - samples[i - 1].x, samples[i].y - samples[i - 1].y));
    }
    return { acc: acc, total: acc[acc.length - 1] || 1 };
  }

  function alongU(samples, point) {
    var measure = stemMeasure(samples);
    var best = 0;
    var bestD = Infinity;
    for (var i = 0; i < samples.length; i++) {
      var d = Math.hypot(samples[i].x - point.x, samples[i].y - point.y);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    return measure.acc[best] / measure.total;
  }

  function sampleTForArc(samples, arcFrac) {
    var measure = stemMeasure(samples);
    var target = clamp01(arcFrac) * measure.total;
    var i = 0;
    var last = measure.acc.length - 1;
    while (i < last && measure.acc[i + 1] < target) i++;
    var span = (measure.acc[Math.min(last, i + 1)] - measure.acc[i]) || 1;
    var f = i >= last ? 0 : clamp01((target - measure.acc[i]) / span);
    return (Math.min(last, i) + f) / last;
  }

  function labelForLeaf(bladeTip, dir, side, mode) {
    var gap = mode === 'narrow' ? 14 : 16;
    return {
      x: bladeTip.x + side * gap,
      y: bladeTip.y + dir.y * 8,
      anchor: side > 0 ? 'start' : 'end'
    };
  }

  function metricsFor(days, mode, expandedDate) {
    var narrow = mode === 'narrow';
    var vw = narrow ? 680 : 1120;
    var pitch = narrow ? 104 : 96;
    var breath = narrow ? 58 : 52;
    var marginTop = narrow ? 88 : 80;
    var marginBottom = narrow ? 50 : 46;
    var cx = vw * (narrow ? 0.46 : 0.48);
    var amp = narrow ? 18 : 42;
    var stations = [];
    days.forEach(function (day) {
      day.events.forEach(function (event, k) {
        stations.push({ event: event, date: day.date, k: k });
      });
    });
    var cursor = marginBottom;
    stations.forEach(function (station, i) {
      if (i > 0) {
        var same = station.date === stations[i - 1].date;
        cursor += same ? pitch : pitch * 0.72 + breath;
      }
      station.along = cursor;
      var sway = Math.sin(i * 0.86 + 0.45) * amp;
      sway += (hash01(station.event.id, 'sway') - 0.5) * amp * 0.22;
      station.x = cx + sway;
      station.side = i % 2 === 0 ? 1 : -1;
    });
    var vh = (stations.length ? cursor : marginBottom) + marginTop;
    stations.forEach(function (station) { station.y = vh - station.along; });
    var last = stations[stations.length - 1] || { x: cx, y: marginTop };
    var base = { x: cx + amp * 0.08, y: vh - 18 };
    var tip = { x: last.x * 0.72 + cx * 0.28, y: 30 };
    var points = [base].concat(stations.map(function (station) {
      return { x: station.x, y: station.y };
    })).concat([tip]);
    var stem = points.length > 1 ? smoothStem(points) : { d: '', samples: [base, tip] };
    var stemLength = stemMeasure(stem.samples).total;
    var stemW0 = narrow ? 2.35 : 2.55;
    var daysOut = days.map(function (day) {
      var mine = stations.filter(function (station) { return station.date === day.date; });
      var expanded = expandedDate === day.date;
      var leaves = mine.map(function (station) {
        var scale = leafScale(station.event.importance) * (expanded ? 1.08 : 1);
        var reach = localRachis(station.event.importance) * scale;
        var jitter = (hash01(station.event.id, 'ang') - 0.5) * 12;
        var angle = (station.side > 0 ? -32 : 148) + jitter;
        var rad = angle * Math.PI / 180;
        var dir = { x: Math.cos(rad), y: Math.sin(rad) };
        var origin = { x: station.x, y: station.y };
        var bladeTip = add(origin, mul(dir, reach));
        return {
          id: station.event.id,
          event: station.event,
          scale: scale,
          side: station.side,
          u: alongU(stem.samples, origin),
          stem: origin,
          tip: origin,
          angle: angle,
          dir: dir,
          reach: reach,
          bladeMid: add(origin, mul(dir, reach * 0.5)),
          bladeTip: bladeTip,
          label: labelForLeaf(bladeTip, dir, station.side, mode)
        };
      });
      var mid = mine[Math.floor((mine.length - 1) / 2)] || { x: cx, y: vh / 2, side: 1 };
      var daySide = -mid.side;
      var y0 = mine[0] ? mine[0].y : mid.y;
      var y1 = mine[mine.length - 1] ? mine[mine.length - 1].y : mid.y;
      return {
        date: day.date,
        side: daySide,
        attach: { x: mid.x, y: (y0 + y1) / 2 },
        leaves: leaves,
        dayLabel: {
          x: mid.x + daySide * (narrow ? 20 : 24),
          y: (y0 + y1) / 2,
          anchor: daySide > 0 ? 'start' : 'end'
        }
      };
    });
    return {
      vw: vw,
      vh: vh,
      mode: mode,
      base: base,
      tip: tip,
      stemD: stem.d,
      stemLength: stemLength,
      samples: stem.samples,
      ribbon: ribbonPath(stem.samples, stemW0, 1.05),
      ribbonHi: ribbonPath(stem.samples, stemW0 * 0.38, 0.42),
      days: daysOut
    };
  }

  function realize(rest, expanded, blend, expandedDate, mode) {
    var days = rest.days.map(function (day, i) {
      var other = expanded.days[i];
      var t = expandedDate === day.date ? blend : 0;
      var leaves = day.leaves.map(function (leaf, k) {
        var alt = other.leaves[k];
        var scale = lerp(leaf.scale, alt.scale, t);
        var angle = lerp(leaf.angle, alt.angle, t);
        var reach = localRachis(leaf.event.importance) * scale;
        var rad = angle * Math.PI / 180;
        var dir = { x: Math.cos(rad), y: Math.sin(rad) };
        var bladeTip = add(leaf.stem, mul(dir, reach));
        return {
          id: leaf.id,
          event: leaf.event,
          scale: scale,
          side: leaf.side,
          u: leaf.u,
          stem: leaf.stem,
          tip: leaf.tip,
          angle: angle,
          dir: dir,
          reach: reach,
          bladeMid: add(leaf.stem, mul(dir, reach * 0.5)),
          bladeTip: bladeTip,
          label: labelForLeaf(bladeTip, dir, leaf.side, mode)
        };
      });
      return {
        date: day.date,
        side: day.side,
        attach: day.attach,
        leaves: leaves,
        dayLabel: {
          x: lerp(day.dayLabel.x, other.dayLabel.x, t),
          y: lerp(day.dayLabel.y, other.dayLabel.y, t),
          anchor: day.dayLabel.anchor
        }
      };
    });
    relaxLabels(days, mode, rest.vh, rest.vw);
    return {
      vw: rest.vw,
      vh: rest.vh,
      mode: mode,
      base: rest.base,
      tip: rest.tip,
      stemD: rest.stemD,
      stemLength: rest.stemLength,
      samples: rest.samples,
      ribbon: rest.ribbon,
      ribbonHi: rest.ribbonHi,
      days: days
    };
  }

  function relaxLabels(days, mode, vh, vw) {
    var items = [];
    days.forEach(function (day) {
      items.push({ node: day.dayLabel, x: day.dayLabel.x, y: day.dayLabel.y, kind: 'day' });
      day.leaves.forEach(function (leaf) {
        items.push({ node: leaf.label, x: leaf.label.x, y: leaf.label.y, kind: 'leaf' });
      });
    });
    var w = mode === 'narrow' ? 168 : 156;
    var hLeaf = mode === 'narrow' ? 40 : 34;
    var hDay = mode === 'narrow' ? 52 : 46;
    function box(item) {
      var height = item.kind === 'day' ? hDay : hLeaf;
      var anchor = item.node.anchor;
      var x0 = anchor === 'end' ? item.x - w : anchor === 'middle' ? item.x - w / 2 : item.x;
      return { x0: x0, x1: x0 + w, y0: item.y - height / 2, y1: item.y + height / 2 };
    }
    for (var iter = 0; iter < 28; iter++) {
      var hit = false;
      for (var a = 0; a < items.length; a++) {
        for (var b = a + 1; b < items.length; b++) {
          var A = box(items[a]);
          var B = box(items[b]);
          var overlapX = Math.min(A.x1, B.x1) - Math.max(A.x0, B.x0);
          var overlapY = Math.min(A.y1, B.y1) - Math.max(A.y0, B.y0);
          if (overlapX <= 8 || overlapY <= 2) continue;
          hit = true;
          var push = overlapY / 2 + 1.2;
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
      item.node.y = clamp(item.y, 26, vh - 26);
      var anchor = item.node.anchor;
      if (anchor === 'end') item.node.x = clamp(item.x, w + 10, vw - 14);
      else if (anchor === 'middle') item.node.x = clamp(item.x, w / 2 + 8, vw - w / 2 - 8);
      else item.node.x = clamp(item.x, 12, vw - w - 10);
    });
  }

  function buildSchedule(days) {
    var flat = [];
    days.forEach(function (day, dayIndex) {
      day.events.forEach(function (_, k) { flat.push([dayIndex, k]); });
    });
    var count = Math.max(1, flat.length);
    var leaves = days.map(function (day) { return new Array(day.events.length); });
    flat.forEach(function (pair, i) {
      var start = 0.16 + (0.66 * i) / count;
      leaves[pair[0]][pair[1]] = [start, Math.min(0.97, start + 0.15)];
    });
    var branches = days.map(function (_, dayIndex) {
      var start = leaves[dayIndex][0] ? leaves[dayIndex][0][0] : 0.2;
      return [Math.max(0.04, start - 0.05), start + 0.1];
    });
    return {
      trunk: [0.05, 0.78],
      branches: branches,
      leaves: leaves,
      bud: [0.84, 1]
    };
  }

  function layoutTree(events, opts) {
    var mode = opts.mode === 'narrow' ? 'narrow' : 'wide';
    var days = groupEvents(events);
    var rest = metricsFor(days, mode, null);
    var expanded = metricsFor(days, mode, opts.expandedDate || null);
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

  function retainedSelection(selectedId, events, predicate) {
    if (!selectedId) return null;
    var event = null;
    events.forEach(function (item) { if (item.id === selectedId) event = item; });
    if (!event || !predicate(event)) return null;
    return selectedId;
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
      dragMoved: false,
      sheet: false
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
    var live = el('div', 'tl-live sr-only');
    live.setAttribute('aria-live', 'polite');
    var detail = el('aside', 'tl-detail');
    detail.setAttribute('aria-label', t('idle'));
    var idle = el('p', 'tl-idle');
    var sheet = el('div', 'tl-sheet');
    sheet.hidden = true;
    detail.appendChild(idle);
    detail.appendChild(sheet);
    canvas.appendChild(svg);
    canvas.appendChild(overlay);
    frame.appendChild(canvas);
    var stage = el('div', 'tl-stage');
    stage.appendChild(frame);
    stage.appendChild(detail);
    var stack = el('div', 'tl-stack');
    controls.classList.add('tl-controls');
    filters.classList.add('tl-filters');
    stack.appendChild(controls);
    stack.appendChild(filters);
    stack.appendChild(status);
    stack.appendChild(stage);
    root.appendChild(stack);
    root.appendChild(live);

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
      dropIncompatibleSelection();
      renderFrame();
      renderStatus();
      renderDetail();
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
      state.dragMoved = false;
      var canPan = frame.scrollHeight > frame.clientHeight + 4;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        left: canPan ? frame.scrollLeft : 0,
        top: canPan ? frame.scrollTop : 0,
        scroller: canPan ? frame : null,
        moved: false
      };
    });
    frame.addEventListener('pointermove', function (event) {
      if (!drag || drag.id !== event.pointerId) return;
      var dx = event.clientX - drag.x;
      var dy = event.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      if (!drag.moved) {
        drag.moved = true;
        if (frame.setPointerCapture) frame.setPointerCapture(event.pointerId);
        frame.classList.add('is-dragging');
      }
      if (event.cancelable) event.preventDefault();
      if (!drag.scroller) return;
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
      else if (event.key === 'Escape') {
        event.preventDefault();
        if (state.selectedId) closeDetail();
        else showFull();
      }
    });
    detail.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape' || !state.selectedId) return;
      event.preventDefault();
      closeDetail();
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
      var viewport = window.innerWidth || width;
      state.mode = viewport < 800 ? 'narrow' : 'wide';
      state.sheet = viewport < 800;
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
      var base = geo.base;
      nodes.ground.setAttribute('d', 'M ' + (base.x - 54) + ' ' + (base.y + 7) + ' Q ' + base.x + ' ' + (base.y + 16) + ' ' + (base.x + 58) + ' ' + (base.y + 6));
      nodes.soil.setAttribute('cx', base.x);
      nodes.soil.setAttribute('cy', base.y + 9);
      nodes.soil.setAttribute('rx', '34');
      nodes.soil.setAttribute('ry', '4.5');
      nodes.cotyledons[0].setAttribute('transform', 'translate(' + (base.x - 9).toFixed(2) + ' ' + (base.y - 1).toFixed(2) + ') rotate(-36)');
      nodes.cotyledons[1].setAttribute('transform', 'translate(' + (base.x + 8).toFixed(2) + ' ' + (base.y - 1).toFixed(2) + ') rotate(32)');
      nodes.stemMask.setAttribute('d', geo.stemD);
      nodes.stemMask.setAttribute('pathLength', String(geo.stemLength));
      nodes.stemMask.setAttribute('stroke-dasharray', String(geo.stemLength));
      nodes.stem.setAttribute('d', geo.ribbon);
      nodes.stemHi.setAttribute('d', geo.ribbonHi);
      nodes.bud.setAttribute('transform', 'translate(' + fmt(geo.tip) + ')');
      geo.days.forEach(function (day) {
        var dayNodes = nodes.days[day.date];
        var dayBtn = dayNodes.button;
        dayBtn.style.left = (day.dayLabel.x / geo.vw * 100) + '%';
        dayBtn.style.top = (day.dayLabel.y / geo.vh * 100) + '%';
        dayBtn.setAttribute('data-anchor', day.dayLabel.anchor);
        day.leaves.forEach(function (leaf) {
          var leafNodes = dayNodes.leaves[leaf.id];
          leafNodes.spin.setAttribute('transform', 'translate(' + fmt(leaf.stem) + ') rotate(' + leaf.angle.toFixed(2) + ')');
          var label = leafNodes.label;
          label.style.left = (leaf.label.x / geo.vw * 100) + '%';
          label.style.top = (leaf.label.y / geo.vh * 100) + '%';
          label.setAttribute('data-anchor', leaf.label.anchor);
          var hit = leaf.event.importance === 'high' ? 52 : 46;
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
      var trunkGrow = stemProgress(clock);
      var stemLength = state.layout.stemLength || 1;
      nodes.stemMask.setAttribute('stroke-dashoffset', String(stemLength * (1 - trunkGrow)));
      nodes.stem.style.opacity = filtering ? 0.32 : 1;
      nodes.stemHi.style.opacity = filtering ? 0.16 : 0.82;
      var seed = smoothstep(linearSpan(clock, 0, 0.08));
      nodes.cotyledons.forEach(function (cotyledon) {
        cotyledon.style.opacity = filtering ? seed * 0.45 : seed;
      });
      nodes.soil.style.opacity = (filtering ? 0.22 : 0.45) * seed;
      var tipT = sampleTForArc(state.layout.samples, trunkGrow);
      var budPoint = sampleAt(state.layout.samples, tipT);
      var budTan = sampleTangent(state.layout.samples, tipT);
      var wobble = Math.sin(Math.min(1, trunkGrow / 0.08) * Math.PI) * (1 - Math.min(1, trunkGrow / 0.2)) * 8;
      var budAngle = Math.atan2(budTan.y, budTan.x) * 180 / Math.PI + 90 + wobble;
      var budScale = 0.86 + 0.14 * smoothstep(Math.min(1, trunkGrow / 0.12));
      nodes.bud.setAttribute('transform', 'translate(' + fmt(budPoint) + ') rotate(' + budAngle.toFixed(2) + ') scale(' + budScale.toFixed(3) + ')');
      nodes.bud.style.opacity = filtering ? 0.4 : Math.max(seed, 0.35);
      state.layout.days.forEach(function (day) {
        var dayNodes = nodes.days[day.date];
        var dayFade = 0;
        day.leaves.forEach(function (leaf) {
          var leafNodes = dayNodes.leaves[leaf.id];
          var u = typeof leaf.u === 'number' ? leaf.u : 0.5;
          var raw = linearSpan(trunkGrow, u, Math.min(1, u + 0.09));
          var fade = smoothstep(raw);
          if (fade > dayFade) dayFade = fade;
          var on = lit(leaf.event);
          var chosen = state.selectedId === leaf.id && on;
          var interactive = fade >= 0.62 && (!filtering || on);
          var dim = on || !filtering ? 1 : 0.2;
          leafNodes.group.style.opacity = fade * dim;
          var curl = smoothstep(linearSpan(trunkGrow, Math.min(0.98, u + 0.02), Math.min(1, u + 0.13)));
          leafNodes.tendril.setAttribute('stroke-dashoffset', String(1 - curl));
          var opened = Math.max(0.02, settle(raw));
          leafNodes.blade.setAttribute('transform', 'scale(' + (leaf.scale * opened).toFixed(3) + ')');
          leafNodes.button.hidden = fade < 0.05;
          leafNodes.button.tabIndex = interactive ? 0 : -1;
          leafNodes.button.style.pointerEvents = interactive ? 'auto' : 'none';
          leafNodes.label.style.pointerEvents = interactive ? 'auto' : 'none';
          leafNodes.button.setAttribute('aria-pressed', chosen ? 'true' : 'false');
          leafNodes.group.classList.toggle('is-selected', chosen);
          leafNodes.group.classList.toggle('is-hot', state.hoverId === leaf.id && on);
          var labelFade = smoothstep(linearSpan(fade, 0.4, 0.9));
          leafNodes.label.style.opacity = String((on || !filtering ? 1 : 0.32) * labelFade);
          leafNodes.label.classList.toggle('is-hot', (state.hoverId === leaf.id || chosen) && on);
        });
        var dayShown = smoothstep(linearSpan(dayFade, 0.4, 0.9));
        dayNodes.button.style.opacity = String(dayShown);
        dayNodes.button.hidden = dayShown < 0.05;
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
      idle.textContent = t('idle');
      detail.setAttribute('aria-label', t('idle'));
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
      sheet.innerHTML = '';
      var open = !!event;
      detail.classList.toggle('is-open', open);
      root.classList.toggle('is-sheet-open', !!(open && state.sheet));
      sheet.hidden = !open;
      idle.hidden = open;
      if (!event) {
        live.textContent = '';
        return;
      }
      var group = model.events.filter(function (item) {
        return item.reported_on === event.reported_on && item.primary_product === event.primary_product;
      }).sort(function (a, b) { return a.order - b.order; });
      var closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'tl-textbtn tl-close';
      closeBtn.textContent = t('close');
      closeBtn.addEventListener('click', closeDetail);
      sheet.appendChild(closeBtn);
      var line = el('p', 'tl-productline');
      line.textContent = productName(event.primary_product) + ' · ' + formatDay(event.reported_on) + ' · ' + t('reported');
      sheet.appendChild(line);
      group.forEach(function (item) {
        var block = el('article', 'tl-card');
        var title = document.createElement(group.length > 1 ? 'h3' : 'h2');
        title.textContent = tx(item.title);
        var brief = document.createElement('p');
        brief.className = 'tl-brief';
        brief.textContent = tx(item.brief || item.summary);
        var rank = el('p', 'tl-importance');
        rank.textContent = t('importance') + tx(IMPORTANCE_LABEL[item.importance]);
        block.appendChild(title);
        block.appendChild(brief);
        block.appendChild(rank);
        block.appendChild(linkList(item.sources.map(function (source) {
          return { href: source.url, text: tx(source.label), external: true };
        }).concat(item.digest_refs.map(function (ref) {
          return {
            href: hrefPath(ref.path),
            text: ref.lang === 'en' ? t('digestEn') : t('digestZh'),
            external: false
          };
        }))));
        sheet.appendChild(block);
      });
      live.textContent = t('selected') + productName(event.primary_product) + ' · ' + tx(event.title);
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
      var glow = svgEl('filter', { id: 'tl-glow', x: '-60%', y: '-60%', width: '220%', height: '220%' });
      glow.appendChild(svgEl('feDropShadow', {
        dx: '0', dy: '0', stdDeviation: '1.6', 'flood-color': '#6eae3e', 'flood-opacity': '0.9'
      }));
      defs.appendChild(glow);
      var stemMask = svgEl('mask', { id: 'tl-mask-stem' });
      var stemMaskPath = svgEl('path', {
        fill: 'none', stroke: 'white', 'stroke-width': '16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
      });
      stemMask.appendChild(stemMaskPath);
      defs.appendChild(stemMask);
      svg.appendChild(defs);
      nodes.paper = svgEl('rect', { 'class': 'tl-paper', x: '0', y: '0' });
      nodes.sky = svgEl('rect', { 'class': 'tl-sky', x: '0', y: '0' });
      nodes.grain = svgEl('rect', { 'class': 'tl-grain', x: '0', y: '0', filter: 'url(#tl-grain)' });
      nodes.soil = svgEl('ellipse', { 'class': 'tl-soil', rx: '34', ry: '4.5' });
      nodes.ground = svgEl('path', { 'class': 'tl-ground' });
      svg.appendChild(nodes.paper);
      svg.appendChild(nodes.sky);
      svg.appendChild(nodes.grain);
      svg.appendChild(nodes.ground);
      svg.appendChild(nodes.soil);
      nodes.cotyledons = [0, 1].map(function () {
        var cotyledon = svgEl('ellipse', { 'class': 'tl-cotyledon', cx: '0', cy: '0', rx: '14', ry: '8' });
        svg.appendChild(cotyledon);
        return cotyledon;
      });
      var stemGroup = svgEl('g', { mask: 'url(#tl-mask-stem)' });
      nodes.stem = svgEl('path', { 'class': 'tl-stem' });
      nodes.stemHi = svgEl('path', { 'class': 'tl-stem-hi' });
      stemGroup.appendChild(nodes.stem);
      stemGroup.appendChild(nodes.stemHi);
      svg.appendChild(stemGroup);
      nodes.stemMask = stemMaskPath;
      nodes.days = {};
      function spiralD(turns, radius, dir) {
        var parts = [];
        var steps = 40;
        for (var i = 0; i <= steps; i++) {
          var u = i / steps;
          var ang = dir * u * turns * Math.PI * 2;
          var r = 0.6 + u * radius;
          parts.push((i ? 'L ' : 'M ') + (Math.cos(ang) * r).toFixed(2) + ' ' + (Math.sin(ang) * r).toFixed(2));
        }
        return parts.join(' ');
      }
      function addLeaflet(parent, transform, importance) {
        var g = svgEl('g', { transform: transform });
        g.appendChild(svgEl('path', {
          'class': 'tl-shape',
          d: PEA_LEAFLET,
          fill: 'url(#' + gradId(importance) + ')'
        }));
        g.appendChild(svgEl('path', { 'class': 'tl-vein', d: PEA_VEIN, 'stroke-width': '0.65' }));
        parent.appendChild(g);
      }
      groupEvents(model.events).forEach(function (day) {
        var group = svgEl('g', { 'class': 'tl-day' });
        var leafNodes = {};
        day.events.forEach(function (event) {
          var pairs = leafletPairs(event.importance);
          var len = localRachis(event.importance);
          var leaf = svgEl('g', { 'class': 'tl-leaf', 'data-id': event.id });
          var spin = svgEl('g', { 'class': 'tl-spin' });
          var lift = svgEl('g', { 'class': 'tl-lift' });
          var blade = svgEl('g', { 'class': 'tl-blade' });
          blade.appendChild(svgEl('path', {
            'class': 'tl-rachis',
            d: 'M 0 0 C ' + (len * 0.45).toFixed(1) + ' -1.1, ' + (len * 0.78).toFixed(1) + ' 0.7, ' + len + ' 0',
            fill: 'none',
            'stroke-width': '1.15',
            'stroke-linecap': 'round'
          }));
          addLeaflet(blade, 'translate(-1 0) rotate(-112) scale(0.46)', event.importance);
          addLeaflet(blade, 'translate(1 0) rotate(104) scale(0.4)', event.importance);
          for (var p = 0; p < pairs; p++) {
            var x = 8 + p * 12;
            var wobble = (hash01(event.id, 'pair' + p) - 0.5) * 8;
            addLeaflet(blade, 'translate(' + x + ' 0) rotate(' + (-60 + wobble).toFixed(1) + ') scale(' + (p === pairs - 1 ? 0.98 : 0.9) + ')', event.importance);
            addLeaflet(blade, 'translate(' + (x + 3.2).toFixed(1) + ' 0) rotate(' + (56 - wobble * 0.4).toFixed(1) + ') scale(0.82)', event.importance);
          }
          var curlDir = hash01(event.id, 'cdir') > 0.5 ? 1 : -1;
          var tendril = svgEl('path', {
            'class': 'tl-tendril',
            d: spiralD(1.08 + hash01(event.id, 'curl') * 0.4, 11.5, curlDir),
            transform: 'translate(' + len + ' 0) rotate(' + (curlDir > 0 ? -18 : 16) + ')',
            fill: 'none',
            'stroke-width': '1.05',
            'stroke-linecap': 'round',
            pathLength: '1',
            'stroke-dasharray': '1'
          });
          blade.appendChild(tendril);
          lift.appendChild(blade);
          spin.appendChild(lift);
          leaf.appendChild(spin);
          group.appendChild(leaf);
          leafNodes[event.id] = { group: leaf, spin: spin, blade: blade, tendril: tendril };
        });
        svg.appendChild(group);
        nodes.days[day.date] = { leaves: leafNodes, button: null };
      });
      var bud = svgEl('g', { 'class': 'tl-bud-group' });
      [-26, 22].forEach(function (angle, index) {
        var g = svgEl('g', { transform: 'rotate(' + angle + ') scale(' + (index ? 0.78 : 1) + ')' });
        g.appendChild(svgEl('path', { 'class': 'tl-bud', d: BUD_LEAF }));
        bud.appendChild(g);
      });
      bud.appendChild(svgEl('path', {
        'class': 'tl-tendril',
        d: spiralD(1.25, 7.5, 1),
        transform: 'translate(0.5 -8)',
        fill: 'none',
        'stroke-width': '0.9',
        'stroke-linecap': 'round'
      }));
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
            if (!lit(event)) return;
            selectLeaf(event.id);
          });
          var leafBtn = document.createElement('button');
          leafBtn.type = 'button';
          leafBtn.className = 'tl-leaf-btn';
          leafBtn.addEventListener('click', function (clickEvent) {
            if (state.dragMoved) return;
            var id = nearestLeaf(clickEvent.clientX, clickEvent.clientY) || event.id;
            var picked = model.events.filter(function (item) { return item.id === id; })[0];
            if (!picked || !lit(picked)) return;
            selectLeaf(id);
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
    function selectLeaf(id, fromKey) {
      var event = model.events.filter(function (item) { return item.id === id; })[0];
      if (!event) return;
      var pageY = window.scrollY || document.documentElement.scrollTop || 0;
      var pan = frame.scrollTop;
      state.selectedId = id;
      renderFrame();
      renderDetail();
      window.scrollTo(0, pageY);
      frame.scrollTop = pan;
      var btn = nodes.days[event.reported_on].leaves[id].button;
      scrollIntoFrame(btn);
      if (!fromKey && state.sheet) {
        var closeBtn = sheet.querySelector('.tl-close');
        if (closeBtn) closeBtn.focus({ preventScroll: true });
      }
    }
    function closeDetail() {
      var id = state.selectedId;
      var event = model.events.filter(function (item) { return item.id === id; })[0];
      var pageY = window.scrollY || document.documentElement.scrollTop || 0;
      var pan = frame.scrollTop;
      state.selectedId = null;
      renderFrame();
      renderDetail();
      window.scrollTo(0, pageY);
      frame.scrollTop = pan;
      if (!event) return;
      var btn = nodes.days[event.reported_on].leaves[event.id].button;
      if (btn) btn.focus({ preventScroll: true });
    }
    function toggleDay(date) {
      state.expandedDate = state.expandedDate === date ? null : date;
      animateBlend();
      renderTexts();
    }
    function dropIncompatibleSelection() {
      var next = retainedSelection(state.selectedId, model.events, lit);
      if (next === state.selectedId) return;
      var pageY = window.scrollY || document.documentElement.scrollTop || 0;
      var pan = frame.scrollTop;
      state.selectedId = null;
      if (state.hoverId) {
        var hovered = model.events.filter(function (item) { return item.id === state.hoverId; })[0];
        if (!hovered || !lit(hovered)) state.hoverId = null;
      }
      renderFrame();
      renderDetail();
      window.scrollTo(0, pageY);
      frame.scrollTop = pan;
    }
    function nearestLeaf(x, y) {
      var best = null;
      var bestDist = Infinity;
      Object.keys(nodes.days).forEach(function (date) {
        var dayNodes = nodes.days[date];
        Object.keys(dayNodes.leaves).forEach(function (id) {
          var button = dayNodes.leaves[id].button;
          if (!button || button.hidden || button.style.pointerEvents === 'none') return;
          var box = button.getBoundingClientRect();
          var cx = box.left + box.width / 2;
          var cy = box.top + box.height / 2;
          var dist = Math.hypot(x - cx, y - cy);
          if (dist > Math.min(box.width, box.height) / 2) return;
          if (dist < bestDist) {
            bestDist = dist;
            best = id;
          }
        });
      });
      return best;
    }
    function toggleProduct(id) {
      state.product = state.product === id ? null : id;
      dropIncompatibleSelection();
      renderFrame();
      renderTexts();
    }
    function toggleKind(kind) {
      state.kind = state.kind === kind ? null : kind;
      dropIncompatibleSelection();
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
      var dur = 5600;
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
      var grown = stemProgress(state.clock);
      var list = [];
      state.layout.days.forEach(function (day) {
        day.leaves.forEach(function (leaf) {
          var u = typeof leaf.u === 'number' ? leaf.u : 0.5;
          var fade = smoothstep(linearSpan(grown, u, Math.min(1, u + 0.09)));
          if (fade < 0.62) return;
          if (filterOn() && !lit(leaf.event)) return;
          list.push(leaf);
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
      selectLeaf(next.id, true);
      nodes.days[next.event.reported_on].leaves[next.id].button.focus({ preventScroll: true });
    }
    function moveEdge(newest) {
      var list = visibleLeaves();
      if (!list.length) return;
      var next = newest ? list[list.length - 1] : list[0];
      selectLeaf(next.id, true);
      nodes.days[next.event.reported_on].leaves[next.id].button.focus({ preventScroll: true });
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
    stemProgress: stemProgress,
    retainedSelection: retainedSelection,
    mount: mount
  };
});
