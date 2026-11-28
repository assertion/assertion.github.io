#!/usr/bin/env python3
"""Regenerate the README "Recent issues / 近期期数" list.

Selects the seven newest Chinese digests, which are the
``_posts/YYYY-MM-DD-ai-twitter-hots.md`` files. English twins
(``-en``) and any other post are ignored. Dates with no Chinese
file are skipped because they have nothing to link.

Only the bullet list under that heading is rewritten. The link
target is the official host, matching Jekyll's
``/:year/:month/:day/:title`` permalink.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "_posts"
README_PATH = ROOT / "README.md"
HEADING = "## Recent issues / 近期期数"
HOST = "https://code-echo.pages.dev"
COUNT = 7

# Exact Chinese digest filename. The trailing `$` rejects `-en` twins.
POST_RE = re.compile(r"^(\d{4})-(\d{2})-(\d{2})-ai-twitter-hots\.md$")
ITEM_RE = re.compile(
    r"^- \[AI Twitter 热点 · \d{4}-\d{2}-\d{2}\]"
    r"\(https://code-echo\.pages\.dev/\d{4}/\d{2}/\d{2}/ai-twitter-hots\)$"
)


def select_dates(names: list[str], limit: int = COUNT) -> list[tuple[str, str, str]]:
    """Return up to ``limit`` ``(year, month, day)`` tuples, newest first."""
    found: list[tuple[str, str, str]] = []
    for name in names:
        match = POST_RE.match(name)
        if match:
            found.append((match.group(1), match.group(2), match.group(3)))
    found.sort(reverse=True)
    return found[:limit]


def render_items(dates: list[tuple[str, str, str]]) -> list[str]:
    lines = []
    for year, month, day in dates:
        date = f"{year}-{month}-{day}"
        url = f"{HOST}/{year}/{month}/{day}/ai-twitter-hots"
        lines.append(f"- [AI Twitter 热点 · {date}]({url})")
    return lines


def replace_recent_issues(text: str, items: list[str]) -> str:
    """Replace the recent-issues bullets and leave every other line as-is."""
    lines = text.splitlines(keepends=True)
    heading_at = None
    for index, line in enumerate(lines):
        if line.rstrip("\r\n") == HEADING:
            heading_at = index
            break
    if heading_at is None:
        raise SystemExit(f"README is missing the heading: {HEADING}")

    cursor = heading_at + 1
    while cursor < len(lines) and lines[cursor].strip() == "":
        cursor += 1
    start = cursor
    end = cursor
    while end < len(lines):
        body = lines[end].rstrip("\r\n")
        if body.strip() == "":
            look = end + 1
            while look < len(lines) and lines[look].strip() == "":
                look += 1
            if look < len(lines) and ITEM_RE.match(lines[look].rstrip("\r\n")):
                end = look
                continue
            break
        if ITEM_RE.match(body):
            end += 1
            continue
        if body.startswith("- "):
            raise SystemExit(
                "unexpected bullet under the recent-issues heading: " + body
            )
        break
    if start == end:
        raise SystemExit("no recent-issue links found under the heading")

    newline = "\n"
    if lines[start].endswith("\r\n"):
        newline = "\r\n"
    rendered = [item + newline for item in items]
    return "".join(lines[:start] + rendered + lines[end:])


def newest_items(posts_dir: Path, limit: int = COUNT) -> list[str]:
    if not posts_dir.is_dir():
        raise SystemExit(f"posts directory not found: {posts_dir}")
    names = [path.name for path in posts_dir.iterdir() if path.is_file()]
    dates = select_dates(names, limit)
    if len(dates) < limit:
        raise SystemExit(
            f"found {len(dates)} Chinese digests in {posts_dir}, need {limit}"
        )
    return render_items(dates)


def update_readme(readme: Path, posts_dir: Path, dry_run: bool) -> bool:
    original = readme.read_text(encoding="utf-8")
    items = newest_items(posts_dir)
    updated = replace_recent_issues(original, items)
    for line in items:
        print(line, flush=True)
    if updated == original:
        print("README recent issues already current.", file=sys.stderr)
        return False
    if dry_run:
        print("dry-run: README recent issues would be updated.", file=sys.stderr)
        return True
    readme.write_text(updated, encoding="utf-8")
    print("README recent issues updated.", file=sys.stderr)
    return True


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="print the seven links and whether README would change",
    )
    parser.add_argument(
        "--readme",
        type=Path,
        default=README_PATH,
        help="README path (default: repository README.md)",
    )
    parser.add_argument(
        "--posts",
        type=Path,
        default=POSTS_DIR,
        help="posts directory (default: repository _posts)",
    )
    args = parser.parse_args(argv)
    update_readme(args.readme, args.posts, args.dry_run)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
