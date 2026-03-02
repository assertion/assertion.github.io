# AGENTS.md

## Cursor Cloud specific instructions

This is a Jekyll 3.x static blog (GitHub Pages site) for "Aaren Xia".

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
