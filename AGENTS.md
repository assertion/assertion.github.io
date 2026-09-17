# AGENTS.md

## Cursor Cloud specific instructions

This is a Jekyll 3.x static blog (GitHub Pages site) for the personal static blog 「代码的回声」.

### Key gotchas

- **No Gemfile exists.** Gems are installed globally via `sudo gem install`. The required gems are: `jekyll` (~>3.9), `jekyll-sitemap`, `jekyll-gist`, `jekyll-paginate`, `redcarpet`, `pygments.rb`.
- **`_config.yml` uses deprecated keys** (`gems:` instead of `plugins:`, `pygments: true` instead of `highlighter: pygments`). These produce deprecation warnings but still work in Jekyll 3.x. Do not "fix" these unless the project owner requests it.
- **`jekyll-gist` is not listed in `_config.yml`** but is required by `pages/markdown.md`. On GitHub Pages it is auto-loaded; locally you must use the local config override: `jekyll serve --config _config.yml,_config_local.yml`.
- **`_config_local.yml`** overrides `baseurl`/`url` for localhost and adds the missing `jekyll-gist` and `jekyll-paginate` plugins. Always pass both configs for local dev.

### Running locally

```bash
jekyll serve --config _config.yml,_config_local.yml --host 0.0.0.0 --port 4000
```

Site available at `http://localhost:4000/`.

### Build

```bash
jekyll build --config _config.yml,_config_local.yml
```

Output goes to `_site/`.

### Lint / Tests

There are no automated tests or linting configured in this repository. Travis CI (`.travis.yml`) only echoes commit info.

### Bilingual (zh/en) support

The site uses a lightweight client-side i18n system. No heavy plugins required.

#### How it works

- UI strings live in `_data/i18n.yml` (keyed `zh:` / `en:`).
- Elements use `data-i18n-zh` / `data-i18n-en` attributes; `js/i18n.js` swaps text on load based on `localStorage('site-lang')`.
- A language switcher (ZH ↔ EN) sits in the nav bar (`_includes/lang-switcher.html`).

#### Authoring bilingual posts

1. **Existing ZH-only posts** need no changes; they work as-is and fall back correctly when the UI language is EN.
2. To add an English version of a post, create a sibling file with the same date and a `-en` suffix:
   - ZH: `_posts/YYYY-MM-DD-slug.md` — add front matter `lang: zh` and `translation_key: slug-YYYY-MM-DD`
   - EN: `_posts/YYYY-MM-DD-slug-en.md` — add front matter `lang: en`, same `translation_key`, and a unique `permalink`
3. Example front matter for EN twin:
   ```yaml
   ---
   layout: post
   title: AI Twitter Highlights · 2026-09-17
   lang: en
   translation_key: ai-twitter-hots-2026-09-17
   permalink: /2026/09/17/ai-twitter-hots-en
   ---
   ```
4. The `translation_key` must match exactly between ZH and EN files. When a user switches language on a post page, the JS navigates to the sibling if it exists; otherwise the ZH content stays visible with a notice.

#### Bilingual pages

Pages like `about.md` use `data-bilingual-zh` / `data-bilingual-en` attributes for inline content switching, and `title_en` front matter for the page heading.

#### Atom/RSS

`atom.xml` filters out `lang: en` posts to keep the feed ZH-primary. EN posts are accessible via direct URL and the language switcher.
