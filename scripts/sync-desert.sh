#!/usr/bin/env bash
# Pull the interactive desert (github.com/muzzkh/arrakis) into this site.
#
#   scripts/sync-desert.sh [path-to-arrakis-checkout]   (default: ../arrakis)
#
# Copies arrakis/src into src/desert, arrakis/index.html to ./index.html and the
# desert's favicon into public/. (The resume PDF in public/ is managed here.)
# src/desert/resume/content.js is kept: here it re-exports src/data/resume.ts,
# so the desert and the classic page read the same resume.
set -euo pipefail

SRC="${1:-../arrakis}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/src/desert"

if [ ! -f "$SRC/src/main.js" ] || [ ! -f "$SRC/index.html" ]; then
  echo "No arrakis checkout at '$SRC'" >&2
  exit 1
fi

keep="$(mktemp)"
trap 'rm -f "$keep"' EXIT
cp "$DEST/resume/content.js" "$keep"

rm -rf "$DEST"
mkdir -p "$DEST"
cp -R "$SRC/src/." "$DEST/"
cp "$keep" "$DEST/resume/content.js"

sed -e 's#\./src/#./src/desert/#g' "$SRC/index.html" > "$ROOT/index.html"
cp "$SRC/public/waystone.svg" "$ROOT/public/waystone.svg"

echo "Synced the desert from $SRC ($(git -C "$SRC" rev-parse --short HEAD 2>/dev/null || echo 'unknown rev'))"
