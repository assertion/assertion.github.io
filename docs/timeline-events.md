# Timeline events

The product vine at `/timeline/` is a drawing of the JSON under `_data/timeline/`. It is not a second database. Reporting days sit as clusters along one pea shoot. One milestone becomes one compound leaf. The page does not invent coordinates, and it does not read Markdown posts at render time.

Do not add a production hostname to these files. Digest links are root-relative paths such as `/2026/11/18/ai-twitter-hots`.

## What belongs on the tree

Add a leaf only after the day's digest is published and the milestone has been checked against that digest and its linked sources.

- A new milestone gets a new event file.
- A later development of the same milestone edits that file. Put the extra step in `updates`. Operation GLM is the pattern: the 100, 200, and 500 announcements stay on one event.
- Do not open a second event for a channel that is only distributing a launch already recorded. Put that product in `related_products`.
- Do not backfill days that were not verified. Empty dates are not drawn. Entered reporting days are 2026-11-17 (4 leaves), 2026-11-18 (5 leaves), 2026-11-19 (4 leaves), 2026-11-20 (7 leaves), 2026-11-21 (4 leaves), and 2026-11-23 (2 leaves). 2026-11-22 had no published Chinese digest, so it is not entered and is not drawn. 2026-11-16 was not backfilled.
- Do not extract candidates automatically, and do not add a leaf from a rumor the digest did not treat as a product change.

## Files

- `_data/timeline/products.json` — product registry. `id`, `name`, `aliases`, `category` (`model`, `ide`, `agent`, `platform`).
- `_data/timeline/coverage.json` — the reporting dates that are actually entered, with counts. Update it in the same change as the events.
- `_data/timeline/events/YYYY-MM/<id>.json` — one file per event.

`reported_on` is the Shanghai calendar day of the digest. The tree sorts on that field. `happened_at` stays `null` until the calendar day of the event itself is confirmed separately. Do not copy the digest date into `happened_at`, and do not move the leaf onto an anniversary or a changelog date that the digest did not use.

## Event fields

- `id` — stable, lowercase, ends with the reporting date: `qwen4-max-ga-2026-11-17`. The filename is `<id>.json`. Do not rename an id once the page has shipped; edit the record instead.
- `order` — integer, unique within the day. Lower numbers sit lower in that day's cluster.
- `title`, `short`, `summary`, `why`, `brief` — objects with `zh` and `en`. `short` is the label beside the leaf. `brief` is the short factual line in the side pane. Keep caveats in `summary`, `why`, or `notes`; the pane does not print those.
- `reported_on`, `happened_at`, `timezone` — `timezone` is `Asia/Shanghai`.
- `primary_product` — one id from the registry.
- `related_products` — other registry ids. Omit the primary id here.
- `kind` — `launch`, `capability`, `integration`, `pricing`, `access`, or `reliability`.
- `importance` — `high`, `medium`, or `standard`. This is editorial weight. It sets leaf size. It is not a like or repost count.
- `lifecycle` — `announced`, `beta`, `ga`, or `null`.
- `sources` — at least one `{kind, url, label}`. `kind` is `tweet` or `official`. `url` is the source that was checked. `label` has `zh` and `en`.
- `digest_refs` — `{date, lang, path}` for the Chinese post and the English post. `path` starts with `/` and must match a file in `_posts/`. `date` is the reporting day.
- `updates` — optional. Use it when the same event moves forward. Each item has `label` and `note`, both bilingual.
- `notes` — optional bilingual caveat that should stay attached to the leaf.

Keep `<` and `>` out of strings. The page embeds this JSON in HTML.

## Check

From the repository root:

```bash
node _scripts/validate-timeline.js
```

The script checks ids, filenames, Shanghai dates, coverage counts, product ids, source URLs, and digest paths. It fails if a digest path is absolute, if event text contains the site host configured in `_config.yml`, or if a reporting day has no events (that would draw an empty bough).

## Build

No extra build step. Jekyll reads `_data/timeline` during the existing site build and embeds it on `/timeline/`. Add the files, run the validator, then build the site the way it is already built.
