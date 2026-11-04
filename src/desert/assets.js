// Where the site's own files live (images, models, the PDF), plus stand-ins for files the
// management editor has added but not published yet. Content refers to files by paths
// relative to the site root, like "media/ornithopter/frame.webp".

const overrides = new Map();
let root = new URL('./', window.location.href);

export function setAssetRoot(url) {
  root = new URL(url, window.location.href);
}

// path -> object URL, for previews of unpublished uploads
export function setAssetOverrides(map) {
  overrides.clear();
  if (map) for (const [k, v] of map) overrides.set(k, v);
}

export function assetUrl(path) {
  if (!path) return '';
  const p = String(path);
  if (overrides.has(p)) return overrides.get(p);
  if (/^(https?:|data:|blob:)/i.test(p)) return p;
  return new URL(p.replace(/^\/+/, ''), root).href;
}
