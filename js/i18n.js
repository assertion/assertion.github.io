(function () {
  'use strict';

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
      var otherLang = lang === 'zh' ? 'en' : 'zh';
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

    var twinLink = container.querySelector('a[data-twin-lang]');
    if (twinLink) {
      var twinLang = twinLink.getAttribute('data-twin-lang');
      var pageLang = document.documentElement.getAttribute('data-page-lang') || 'zh';
      if (lang !== pageLang) {
        container.style.display = 'block';
        container.innerHTML = '<a href="' + twinLink.href + '" style="font-size:0.85em;color:#888;">→ ' +
          (lang === 'en' ? 'View in English' : '查看中文版') + '</a>';
      } else {
        container.style.display = 'none';
      }
    } else {
      var pageLang = document.documentElement.getAttribute('data-page-lang') || 'zh';
      if (lang !== pageLang) {
        var noTransEl = document.getElementById('no-translation-notice');
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
        var noTransEl = document.getElementById('no-translation-notice');
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
    var lang = getLang();

    var switcher = document.getElementById('lang-switch');
    if (switcher) {
      switcher.addEventListener('click', function (e) {
        e.preventDefault();
        var current = getLang();
        var next = current === 'zh' ? 'en' : 'zh';
        setLang(next);
        applyLang(next);

        var container = document.getElementById('translation-link');
        if (container) {
          var twinLink = container.querySelector('a[data-twin-lang]');
          if (twinLink) {
            var twinLang = twinLink.getAttribute('data-twin-lang');
            var pageLang = document.documentElement.getAttribute('data-page-lang') || 'zh';
            if (next === twinLang) {
              window.location.href = twinLink.href;
              return;
            }
          }
        }
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
