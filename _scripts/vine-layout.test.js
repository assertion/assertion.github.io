/* The vine is one continuous shoot. Two reporting days must not be split
   by a barren trunk, and every event keeps a leaf inside the canvas. */
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var api = require('../js/timeline.js');

var dir = path.join(__dirname, '../_data/timeline/events/2026-11');
var events = fs.readdirSync(dir).filter(function (name) { return name.endsWith('.json'); }).map(function (name) {
  return JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8'));
});

function check(mode, cssWidth, frameHeight) {
  var laid = api.layoutTree(events, { mode: mode, blend: 0, viewportWidth: cssWidth });
  var geo = laid.geometry;
  assert.strictEqual(geo.days.length, 2);
  var leaves = [];
  geo.days.forEach(function (day) { day.leaves.forEach(function (leaf) { leaves.push(leaf); }); });
  assert.strictEqual(leaves.length, 9);
  var byDate = {};
  geo.days.forEach(function (day) {
    byDate[day.date] = day.leaves.map(function (leaf) { return leaf.stem.y; });
  });
  var olderTop = Math.min.apply(null, byDate['2026-11-17']);
  var newerBottom = Math.max.apply(null, byDate['2026-11-18']);
  var gap = olderTop - newerBottom;
  var scale = cssWidth / geo.vw;
  var gapPx = gap * scale;
  assert.ok(gap > 24, mode + ' day clusters overlap: ' + gap);
  assert.ok(gapPx < frameHeight * 0.45, mode + ' barren gap ' + gapPx.toFixed(0) + 'px');
  var heightPx = geo.vh * scale;
  assert.ok(heightPx < frameHeight * 1.45, mode + ' vine is padded to ' + heightPx.toFixed(0) + 'px');
  leaves.forEach(function (leaf) {
    assert.ok(leaf.bladeMid.x > 8 && leaf.bladeMid.x < geo.vw - 8, leaf.id + ' x');
    assert.ok(leaf.bladeMid.y > 8 && leaf.bladeMid.y < geo.vh - 8, leaf.id + ' y');
    assert.ok(leaf.label.x > 8 && leaf.label.x < geo.vw - 8, leaf.id + ' label');
  });
  var ys = geo.samples.map(function (p) { return p.y; });
  assert.ok(ys[0] > ys[ys.length - 1], mode + ' stem does not grow upward');
  return { gapPx: Math.round(gapPx), heightPx: Math.round(heightPx), vh: Math.round(geo.vh) };
}

var wide = check('wide', 860, 738);
var narrow = check('narrow', 390, 590);
var kept = api.retainedSelection('qoder-linux-arm64-2026-11-18', events, function (event) {
  return event.primary_product === 'gpt-6-2';
});
assert.strictEqual(kept, null);
console.log('vine layout ok', wide, narrow);
