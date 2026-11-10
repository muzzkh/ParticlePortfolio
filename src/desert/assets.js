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

// A link from the content, made safe to put in an href: web, mail and phone links pass
// through, site files are resolved, and anything else (javascript:, data:, …) goes nowhere.
export function safeHref(href) {
  const h = String(href || '').trim();
  if (/^(https?:|mailto:|tel:)/i.test(h)) return h;
  if (h.startsWith('#')) return h;
  if (/^[a-z][a-z0-9+.-]*:/i.test(h)) return '#';
  return assetUrl(h);
}

// Stand-ins handed over by /management must be this page's own object URLs.
export function ownBlobUrl(url) {
  return typeof url === 'string' && url.startsWith(`blob:${window.location.origin}/`);
}

export function assetUrl(path) {
  if (!path) return '';
  const p = String(path);
  if (overrides.has(p)) return overrides.get(p);
  if (/^(https?:|data:|blob:)/i.test(p)) return p;
  return new URL(p.replace(/^\/+/, ''), root).href;
}
