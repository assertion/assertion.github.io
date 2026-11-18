/* The ring and the note follow one selected event.
   A product, kind, or search spotlight that no longer includes that event
   drops the selection instead of leaving the ring on a dimmed leaf. */
var assert = require('assert');
var api = require('../js/timeline.js');

var qoder = { id: 'qoder-linux-arm64-2026-11-18', primary_product: 'qoder', related_products: [], kind: 'access' };
var gpt = { id: 'gpt-6-2-astra-sol-2026-11-18', primary_product: 'gpt-6-2', related_products: ['chatgpt-work', 'codex'], kind: 'launch' };
var qwen = { id: 'qwen4-max-ga-2026-11-17', primary_product: 'qwen4-max', related_products: ['qoder', 'opencode'], kind: 'launch' };
var events = [qoder, gpt, qwen];

function litProduct(productId) {
  return function (event) { return api.belongs(event, productId); };
}

assert.strictEqual(api.retainedSelection(qoder.id, events, litProduct('gpt-6-2')), null);
assert.strictEqual(api.retainedSelection(gpt.id, events, litProduct('gpt-6-2')), gpt.id);
assert.strictEqual(api.retainedSelection(qwen.id, events, litProduct('opencode')), qwen.id);
assert.strictEqual(api.retainedSelection(qoder.id, events, litProduct('opencode')), null);
assert.strictEqual(api.retainedSelection(qoder.id, events, function () { return true; }), qoder.id);
assert.strictEqual(api.retainedSelection(null, events, litProduct('gpt-6-2')), null);
assert.strictEqual(api.retainedSelection('missing', events, function () { return true; }), null);

console.log('selection policy ok');
