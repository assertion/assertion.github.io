(function () {
  'use strict';

  var API = '/api/views';
  var KEY_RE = /^[a-z0-9][a-z0-9-]{2,99}$/;
  var DAY_MS = 86400000;

  if (navigator.webdriver) return;

  function setCount(el, n) {
    el.setAttribute('data-i18n-zh', '\u9605\u8bfb ' + n);
    el.setAttribute('data-i18n-en', n + ' views');
    var lang = (localStorage.getItem('site-lang') || 'zh');
    el.textContent = lang === 'en' ? (n + ' views') : ('\u9605\u8bfb ' + n);
    el.style.visibility = 'visible';
  }

  function shouldIncrement(key) {
    var lsKey = 'views:' + key;
    var last = parseInt(localStorage.getItem(lsKey) || '0', 10);
    if (Date.now() - last < DAY_MS) return false;
    localStorage.setItem(lsKey, String(Date.now()));
    return true;
  }

  function postView(key, el) {
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: key }),
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (d) { setCount(el, d.count); })
      .catch(function () { });
  }

  function getViews(keys, elements) {
    if (!keys.length) return;
    fetch(API + '?keys=' + keys.join(','))
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (counts) {
        for (var k in counts) {
          if (elements[k]) {
            for (var i = 0; i < elements[k].length; i++) {
              setCount(elements[k][i], counts[k]);
            }
          }
        }
      })
      .catch(function () { });
  }

  function init() {
    var postEl = document.querySelector('[data-views-key][data-views-post]');
    if (postEl) {
      var key = postEl.getAttribute('data-views-key');
      if (!KEY_RE.test(key)) return;
      if (shouldIncrement(key)) {
        postView(key, postEl);
      } else {
        fetch(API + '?keys=' + key)
          .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
          .then(function (d) { setCount(postEl, d[key] || 0); })
          .catch(function () { });
      }
      return;
    }

    var cards = document.querySelectorAll('[data-views-key]');
    if (!cards.length) return;
    var keySet = {};
    var elements = {};
    for (var i = 0; i < cards.length; i++) {
      var k = cards[i].getAttribute('data-views-key');
      if (!KEY_RE.test(k)) continue;
      keySet[k] = true;
      if (!elements[k]) elements[k] = [];
      elements[k].push(cards[i]);
    }
    var allKeys = Object.keys(keySet);
    for (var start = 0; start < allKeys.length; start += 50) {
      getViews(allKeys.slice(start, start + 50), elements);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
