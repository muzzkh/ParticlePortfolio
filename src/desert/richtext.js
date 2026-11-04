// Formatted text for dossier cards: Markdown, sanitised so it can only ever produce
// ordinary formatting, with image and link URLs resolved against the site.

import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { assetUrl } from './assets.js';

marked.setOptions({ gfm: true, breaks: true });

export function renderMarkdown(md) {
  const html = marked.parse(String(md || ''), { async: false });
  const clean = DOMPurify.sanitize(html, {
    FORBID_TAGS: ['style', 'form', 'input', 'button', 'textarea', 'select', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['style'],
  });
  const tpl = document.createElement('template');
  tpl.innerHTML = clean;
  for (const img of tpl.content.querySelectorAll('img')) {
    img.src = assetUrl(img.getAttribute('src'));
    img.loading = 'lazy';
    img.decoding = 'async';
  }
  for (const a of tpl.content.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    if (/^https?:/i.test(href)) {
      a.target = '_blank';
      a.rel = 'noreferrer noopener';
    } else if (!/^(mailto:|tel:|#)/i.test(href)) {
      a.href = assetUrl(href);
    }
  }
  return tpl.content;
}
