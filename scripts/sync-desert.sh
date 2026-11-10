#!/usr/bin/env bash
# Pull the interactive desert (github.com/muzzkh/arrakis) into this site.
#
#   scripts/sync-desert.sh [path-to-arrakis-checkout]   (default: ../arrakis)
#
# Copies arrakis/src into src/desert, arrakis/index.html to ./index.html,
# arrakis/management/index.html to ./management/index.html and the desert's favicon
# and start-up script into public/. (The résumé PDF and everything added at /management live in public/
# here.) src/desert/resume/content.js is kept: here it points the desert at
# src/data/site.json and tells /management to publish to this repository.
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
# arrakis's own copy of the content; this site's is src/data/site.json
rm -f "$DEST/resume/site.json"

sed -e 's#\./src/#./src/desert/#g' "$SRC/index.html" > "$ROOT/index.html"
mkdir -p "$ROOT/management"
sed -e 's#\.\./src/#../src/desert/#g' "$SRC/management/index.html" > "$ROOT/management/index.html"
cp "$SRC/public/waystone.svg" "$ROOT/public/waystone.svg"
cp "$SRC/public/boot.js" "$ROOT/public/boot.js"

echo "Synced the desert from $SRC ($(git -C "$SRC" rev-parse --short HEAD 2>/dev/null || echo 'unknown rev'))"
