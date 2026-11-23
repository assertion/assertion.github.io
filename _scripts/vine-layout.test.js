/* The vine is one continuous shoot. Adjacent reporting days must not be split
   by a barren trunk, and every event keeps a leaf inside the canvas. */
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var api = require('../js/timeline.js');

function loadEvents(dir, out) {
  fs.readdirSync(dir).forEach(function (name) {
    var full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) loadEvents(full, out);
    else if (name.endsWith('.json')) out.push(JSON.parse(fs.readFileSync(full, 'utf8')));
  });
  return out;
}

var events = loadEvents(path.join(__dirname, '../_data/timeline/events'), []);
var reportedDates = Object.keys(events.reduce(function (map, event) {
  map[event.reported_on] = true;
  return map;
}, {})).sort();

function labelBox(leaf, mode) {
  var w = mode === 'narrow' ? 168 : 156;
  var h = mode === 'narrow' ? 40 : 34;
  var anchor = leaf.label.anchor;
  var x0 = anchor === 'end' ? leaf.label.x - w : anchor === 'middle' ? leaf.label.x - w / 2 : leaf.label.x;
  return { x0: x0, x1: x0 + w, y0: leaf.label.y - h / 2, y1: leaf.label.y + h / 2 };
}

function check(mode, cssWidth, frameHeight) {
  var laid = api.layoutTree(events, { mode: mode, blend: 0, viewportWidth: cssWidth });
  var geo = laid.geometry;
  assert.strictEqual(geo.days.length, reportedDates.length);
  var leaves = [];
  geo.days.forEach(function (day) { day.leaves.forEach(function (leaf) { leaves.push(leaf); }); });
  assert.strictEqual(leaves.length, events.length);
  var byDate = {};
  geo.days.forEach(function (day) {
    byDate[day.date] = day;
  });
  var scale = cssWidth / geo.vw;
  var gaps = [];
  for (var i = 0; i < reportedDates.length - 1; i++) {
    var older = reportedDates[i];
    var newer = reportedDates[i + 1];
    var olderTop = Math.min.apply(null, byDate[older].leaves.map(function (leaf) { return leaf.stem.y; }));
    var newerBottom = Math.max.apply(null, byDate[newer].leaves.map(function (leaf) { return leaf.stem.y; }));
    var gap = olderTop - newerBottom;
    var gapPx = gap * scale;
    assert.ok(gap > 24, mode + ' day clusters overlap ' + older + '/' + newer + ': ' + gap);
    assert.ok(gapPx < frameHeight * 0.45, mode + ' barren gap ' + older + '/' + newer + ' ' + gapPx.toFixed(0) + 'px');
    gaps.push(Math.round(gapPx));
  }
  leaves.forEach(function (leaf) {
    assert.ok(leaf.bladeMid.x > 8 && leaf.bladeMid.x < geo.vw - 8, leaf.id + ' x');
    assert.ok(leaf.bladeMid.y > 8 && leaf.bladeMid.y < geo.vh - 8, leaf.id + ' y');
    assert.ok(leaf.label.x > 8 && leaf.label.x < geo.vw - 8, leaf.id + ' label x');
    assert.ok(leaf.label.y > 8 && leaf.label.y < geo.vh - 8, leaf.id + ' label y');
  });
  geo.days.forEach(function (day) {
    var boxes = day.leaves.map(function (leaf) { return { id: leaf.id, box: labelBox(leaf, mode) }; });
    for (var a = 0; a < boxes.length; a++) {
      for (var b = a + 1; b < boxes.length; b++) {
        var A = boxes[a].box;
        var B = boxes[b].box;
        var overlapX = Math.min(A.x1, B.x1) - Math.max(A.x0, B.x0);
        var overlapY = Math.min(A.y1, B.y1) - Math.max(A.y0, B.y0);
        assert.ok(
          overlapX <= 20 || overlapY <= 12,
          mode + ' labels overlap ' + boxes[a].id + ' / ' + boxes[b].id +
            ' x ' + overlapX.toFixed(0) + ' y ' + overlapY.toFixed(0)
        );
      }
    }
  });
  var ys = geo.samples.map(function (p) { return p.y; });
  assert.ok(ys[0] > ys[ys.length - 1], mode + ' stem does not grow upward');
  var lowest = Math.max.apply(null, leaves.map(function (leaf) { return leaf.stem.y; }));
  var rootPx = (geo.base.y - lowest) * scale;
  assert.ok(rootPx > 6 && rootPx < 42, mode + ' root below the oldest leaf is ' + rootPx.toFixed(0) + 'px');
  leaves.forEach(function (leaf) {
    assert.ok(leaf.u > 0.02 && leaf.u < 0.98, leaf.id + ' u ' + leaf.u);
  });
  return { gaps: gaps, vh: Math.round(geo.vh), rootPx: Math.round(rootPx), leaves: leaves.length, days: geo.days.length };
}

var wide = check('wide', 860, 738);
var narrow = check('narrow', 390, 590);
assert.ok(api.stemProgress(0) < 0.02);
assert.ok(api.stemProgress(0.2) > 0.08 && api.stemProgress(0.2) < 0.28, 'stem jumped: ' + api.stemProgress(0.2));
assert.ok(Math.abs(api.stemProgress(0.5) - 0.5) < 0.12);
assert.ok(api.stemProgress(1) > 0.99);
var kept = api.retainedSelection('qoder-linux-arm64-2026-11-18', events, function (event) {
  return event.primary_product === 'gpt-6-2';
});
assert.strictEqual(kept, null);
console.log('vine layout ok', wide, narrow);
