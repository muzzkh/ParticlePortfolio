// Files added in the editor: images are resized and re-encoded so pages stay quick;
// models and PDFs are taken as they are.
import DOMPurify from 'dompurify';

export const MAX_IMAGE = 1920;
export const MODEL_WARN = 10 * 1024 * 1024;
export const MODEL_MAX = 50 * 1024 * 1024;

export function fileSlug(name) {
  const base = String(name || 'file').replace(/\.[a-z0-9]+$/i, '');
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'file'
  );
}

export const shortId = () => Math.random().toString(36).slice(2, 6);

export function humanSize(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

function toBlob(canvas, type, q) {
  return new Promise((r) => canvas.toBlob(r, type, q));
}

// → { blob, ext }
export async function prepareImage(file) {
  const type = file.type;
  if (type === 'image/gif') return { blob: file, ext: 'gif' };
  if (type === 'image/svg+xml') {
    // served from the site itself, so strip anything that could run
    const clean = DOMPurify.sanitize(await file.text(), { USE_PROFILES: { svg: true, svgFilters: true } });
    if (!clean.trim()) throw new Error('That SVG couldn’t be read.');
    return { blob: new Blob([clean], { type: 'image/svg+xml' }), ext: 'svg' };
  }
  let bmp;
  try {
    bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
  } catch {
    throw new Error('That file isn’t an image this browser can read.');
  }
  const k = Math.min(1, MAX_IMAGE / Math.max(bmp.width, bmp.height));
  const w = Math.max(1, Math.round(bmp.width * k));
  const h = Math.max(1, Math.round(bmp.height * k));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  canvas.getContext('2d').drawImage(bmp, 0, 0, w, h);
  let blob = await toBlob(canvas, 'image/webp', 0.86);
  let ext = 'webp';
  if (!blob || blob.type !== 'image/webp') {
    const png = type === 'image/png';
    blob = await toBlob(canvas, png ? 'image/png' : 'image/jpeg', 0.88);
    ext = png ? 'png' : 'jpg';
  }
  // already small enough: keep the original rather than a bigger re-encode
  const original = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }[type];
  if (k === 1 && original && file.size <= blob.size) return { blob: file, ext: original };
  return { blob, ext };
}

export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(',')[1] || '');
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });
}
