(function () {
  'use strict';

  var _twinHref = null;
  var _twinLang = null;

  function getLang() {
    return localStorage.getItem('site-lang') || 'zh';
  }

  function setLang(lang) {
    localStorage.setItem('site-lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n-' + lang + ']').forEach(function (el) {
      el.textContent = el.getAttribute('data-i18n-' + lang);
    });

    var switcher = document.getElementById('lang-switch');
    if (switcher) {
      switcher.textContent = switcher.getAttribute('data-lang-' + lang);
      switcher.title = switcher.getAttribute('data-title-' + lang);
    }

    applyTranslationLink(lang);
    applyHomepageFilter(lang);
    applyBilingualContent(lang);
  }

  function applyTranslationLink(lang) {
    var container = document.getElementById('translation-link');
    if (!container) return;

    var pageLang = document.documentElement.getAttribute('data-page-lang') || 'zh';
    var noTransEl = document.getElementById('no-translation-notice');

    if (_twinHref) {
      if (noTransEl) noTransEl.style.display = 'none';

      if (lang !== pageLang) {
        container.style.display = 'block';
        container.innerHTML = '<a href="' + _twinHref + '" style="font-size:0.85em;color:#888;">→ ' +
          (_twinLang === 'en' ? 'View in English' : '查看中文版') + '</a>';
      } else {
        container.style.display = 'none';
      }
    } else {
      if (lang !== pageLang) {
        if (!noTransEl) {
          noTransEl = document.createElement('div');
          noTransEl.id = 'no-translation-notice';
          noTransEl.style.cssText = 'font-size:0.85em;color:#999;margin-bottom:1em;';
          container.parentNode.insertBefore(noTransEl, container);
        }
        noTransEl.textContent = lang === 'en'
          ? '(No English version — showing original Chinese)'
          : '(无中文版——显示英文原文)';
        noTransEl.style.display = 'block';
        container.style.display = 'none';
      } else {
        if (noTransEl) noTransEl.style.display = 'none';
        container.style.display = 'none';
      }
    }
  }

  function applyHomepageFilter(lang) {
    var posts = document.querySelectorAll('[data-post-lang]');
    if (!posts.length) return;

    var keyMap = {};
    posts.forEach(function (el) {
      var key = el.getAttribute('data-translation-key');
      if (!key) return;
      if (!keyMap[key]) keyMap[key] = [];
      keyMap[key].push(el);
    });

    posts.forEach(function (el) {
      var postLang = el.getAttribute('data-post-lang');
      var key = el.getAttribute('data-translation-key');

      if (!key) {
        el.style.display = '';
        return;
      }

      var siblings = keyMap[key];
      if (!siblings || siblings.length <= 1) {
        el.style.display = '';
        return;
      }

      var hasPreferred = siblings.some(function (s) {
        return s.getAttribute('data-post-lang') === lang;
      });

      if (hasPreferred) {
        el.style.display = (postLang === lang) ? '' : 'none';
      } else {
        el.style.display = (postLang === 'zh') ? '' : 'none';
      }
    });
  }

  function applyBilingualContent(lang) {
    document.querySelectorAll('[data-bilingual-zh]').forEach(function (el) {
      el.textContent = el.getAttribute('data-bilingual-' + lang) ||
                        el.getAttribute('data-bilingual-zh');
    });
  }

  function init() {
    var container = document.getElementById('translation-link');
    if (container) {
      var link = container.querySelector('a[data-twin-lang]');
      if (link) {
        _twinHref = link.href;
        _twinLang = link.getAttribute('data-twin-lang');
      }
    }

    var lang = getLang();

    var switcher = document.getElementById('lang-switch');
    if (switcher) {
      switcher.addEventListener('click', function (e) {
        e.preventDefault();
        var current = getLang();
        var next = current === 'zh' ? 'en' : 'zh';
        setLang(next);

        if (_twinHref && next === _twinLang) {
          window.location.href = _twinHref;
          return;
        }

        applyLang(next);
      });
    }

    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
