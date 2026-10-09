var KEY_RE = /^[a-z0-9][a-z0-9-]{2,99}$/;
var BOT_RE = /bot|crawl|spider|slurp|preview|headless|lighthouse|curl|wget|python/i;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

function getDB(env) {
  return env.VIEWS_DB || null;
}

export async function onRequestGet(context) {
  var db = getDB(context.env);
  if (!db) return json({ error: 'service unavailable' }, 503);

  var url = new URL(context.request.url);
  var raw = url.searchParams.get('keys') || '';
  var keys = raw.split(',').filter(function (k) { return KEY_RE.test(k); });
  if (!keys.length) return json({ error: 'no valid keys' }, 400);
  if (keys.length > 50) keys = keys.slice(0, 50);

  var placeholders = keys.map(function () { return '?'; }).join(',');
  var stmt = db.prepare(
    'SELECT key, count FROM views WHERE key IN (' + placeholders + ')'
  );
  var result = await stmt.bind.apply(stmt, keys).all();

  var counts = {};
  keys.forEach(function (k) { counts[k] = 0; });
  if (result && result.results) {
    result.results.forEach(function (row) { counts[row.key] = row.count; });
  }

  return new Response(JSON.stringify(counts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
    },
  });
}

export async function onRequestPost(context) {
  var db = getDB(context.env);
  if (!db) return json({ error: 'service unavailable' }, 503);

  var origin = context.request.headers.get('Origin') || '';
  var referer = context.request.headers.get('Referer') || '';
  var host = context.request.headers.get('Host') || '';
  var sourceHost = '';
  try {
    sourceHost = origin ? new URL(origin).host : (referer ? new URL(referer).host : '');
  } catch (e) { /* ignore */ }
  if (sourceHost && host && sourceHost !== host) {
    return json({ error: 'forbidden' }, 403);
  }

  var body;
  try { body = await context.request.json(); } catch (e) {
    return json({ error: 'invalid json' }, 400);
  }

  var key = body && body.key;
  if (!key || !KEY_RE.test(key)) {
    return json({ error: 'invalid key' }, 400);
  }

  var ua = context.request.headers.get('User-Agent') || '';
  if (BOT_RE.test(ua)) {
    var existing = await db.prepare('SELECT count FROM views WHERE key = ?').bind(key).first();
    return json({ key: key, count: existing ? existing.count : 0 });
  }

  await db.prepare(
    "INSERT INTO views (key, count, updated_at) VALUES (?, 1, datetime('now')) " +
    "ON CONFLICT(key) DO UPDATE SET count = count + 1, updated_at = datetime('now')"
  ).bind(key).run();

  var row = await db.prepare('SELECT count FROM views WHERE key = ?').bind(key).first();
  return json({ key: key, count: row ? row.count : 1 });
}
