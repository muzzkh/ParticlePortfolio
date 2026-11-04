// The resume, as HUD: an index of waystones (the codex), a dossier card for the stone
// you are reading, and labels that float over the stones in the world.

import { KINDS } from './resume/normalize.js';
import { assetUrl } from './assets.js';
import { renderMarkdown } from './richtext.js';

const $ = (id) => document.getElementById(id);

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

const SVG_NS = 'http://www.w3.org/2000/svg';
function svg(viewBox, cls, markup) {
  const s = document.createElementNS(SVG_NS, 'svg');
  s.setAttribute('viewBox', viewBox);
  s.setAttribute('aria-hidden', 'true');
  s.setAttribute('class', cls);
  s.innerHTML = markup; // static, authored shapes only
  return s;
}

const MARKS = {
  experience: '<path d="M6 1 L11 6 L6 11 L1 6Z"/>',
  education: '<circle cx="6" cy="6" r="4.6"/>',
  skills: '<path d="M6 1.4 L10.9 10.2 L1.1 10.2Z"/>',
  project: '<rect x="1.8" y="1.8" width="8.4" height="8.4"/>',
};
export function mark(kind) {
  return svg('0 0 12 12', 'mark', MARKS[kind] || MARKS.experience);
}

const ICONS = {
  mail: '<path d="M4 6.5h16v11H4z"/><path d="M4.5 7l7.5 6 7.5-6"/>',
  linkedin:
    '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 10.5v5.5M8.5 7.9v.1M12 16v-5.5M12 13.2c0-1.7 1-2.8 2.3-2.8s2.2 1 2.2 2.8V16"/>',
  github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.6 5.5 2.9 5.5 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
  pdf: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 16.5h6"/>',
  plain: '<path d="M5 6h14M5 10h14M5 14h10M5 18h7"/>',
};
function icon(name) {
  return svg('0 0 24 24', 'icon', ICONS[name] || ICONS.external);
}

function linkItem(href, label, iconName, title) {
  const a = el('a', 'codex-link');
  a.href = href;
  if (/^https?:/.test(href)) {
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
  }
  a.title = title || label;
  a.append(icon(iconName), el('span', null, label));
  return a;
}

// Short label for a contact link: "Email", "LinkedIn", ...
function shortLabel(link) {
  if (link.icon === 'mail') return 'Email';
  if (link.icon === 'linkedin') return 'LinkedIn';
  if (link.icon === 'github') return 'GitHub';
  return link.label;
}

export function contactLinks({ profile, site }) {
  const out = [];
  for (const l of profile.links || []) out.push(linkItem(l.href, shortLabel(l), l.icon, l.label));
  if (site.pdf) out.push(linkItem(assetUrl(site.pdf), 'PDF', 'pdf', 'Download the résumé as a PDF'));
  if (site.plain) out.push(linkItem(site.plain, 'Plain', 'plain', 'A plain, text-first version of this résumé'));
  return out;
}

export class Codex {
  constructor({ profile, site, entries, handlers }) {
    this.entries = entries;
    this.handlers = handlers;
    this.items = new Map();
    this.labels = new Map();
    this.currentId = null;
    this.source = null;
    this.found = new Set();

    // ---------------- index ----------------
    this.root = $('codex');
    this.head = $('codexHead');
    this.body = $('codexBody');
    this.foundEl = $('codexFound');
    this.bar = $('codexBar');
    this.head.addEventListener('click', () => this.toggleCollapsed());
    if (window.innerWidth <= 760) this.toggleCollapsed(true);

    // ---------------- dossier ----------------
    this.dossier = $('dossier');
    this.ds = {
      mark: $('dsMark'),
      kind: $('dsKind'),
      years: $('dsYears'),
      title: $('dsTitle'),
      org: $('dsOrg'),
      period: $('dsPeriod'),
      body: $('dsBody'),
      pos: $('dsPos'),
    };
    $('dsClose').addEventListener('click', () => handlers.close());
    $('dsPrev').addEventListener('click', () => handlers.step(-1));
    $('dsNext').addEventListener('click', () => handlers.step(1));
    for (const id of ['dsClose', 'dsPrev', 'dsNext']) $(id).addEventListener('mouseup', (e) => e.currentTarget.blur());

    this.labelLayer = $('labels');
    this.setContent({ profile, site, entries });
  }

  // (Re)build the index, labels and links from content. Stones already found stay found,
  // and an open dossier is refreshed if its entry still exists.
  setContent({ profile, site, entries }) {
    this.entries = entries;
    const handlers = this.handlers;
    this.body.replaceChildren();
    for (const l of this.labels.values()) l.el.remove();
    this.items.clear();
    this.labels.clear();
    $('codexTotal').textContent = String(entries.length);
    const groups = new Map();
    for (const entry of entries) {
      if (!groups.has(entry.kind)) {
        const g = el('div', 'codex-group');
        g.append(el('div', 'codex-group-label', KINDS[entry.kind]?.group || entry.kind));
        groups.set(entry.kind, g);
        this.body.append(g);
      }
      const b = el('button', `ci kind-${entry.kind}`);
      b.type = 'button';
      b.dataset.id = entry.id;
      const main = el('span', 'ci-main');
      main.append(el('span', 'ci-title', entry.title), el('span', 'ci-org', [entry.org, entry.years].filter(Boolean).join(' · ')));
      const dir = el('span', 'ci-dir');
      dir.setAttribute('aria-hidden', 'true');
      const arrow = el('i', 'ci-arrow', '➤');
      const dist = el('span', 'ci-dist', '');
      dir.append(arrow, dist);
      b.append(mark(entry.kind), main, dir);
      b.addEventListener('click', () => handlers.select(entry.id));
      b.addEventListener('mouseup', () => b.blur());
      groups.get(entry.kind).append(b);
      this.items.set(entry.id, { button: b, arrow, dist, lastDist: -1, lastAngle: 99 });

      const lb = el('button', `wl kind-${entry.kind}`);
      lb.type = 'button';
      lb.tabIndex = -1;
      lb.dataset.id = entry.id;
      const top = el('span', 'wl-org');
      top.append(mark(entry.kind), el('span', null, [entry.org, entry.years].filter(Boolean).join(' · ')));
      lb.append(top, el('span', 'wl-title', entry.title));
      lb.addEventListener('click', () => handlers.select(entry.id));
      this.labelLayer.append(lb);
      this.labels.set(entry.id, { el: lb, x: 0, y: 0, a: -1 });
    }
    $('codexLinks').replaceChildren(...contactLinks({ profile, site }));
    const kept = [...this.found].filter((id) => this.items.has(id));
    this.found.clear();
    this.foundEl.textContent = '0';
    this.bar.style.width = '0%';
    for (const id of kept) this.setFound(id);
    const current = this.currentId;
    if (current) {
      const entry = entries.find((e) => e.id === current);
      if (entry) this.open(entry, this.source, true);
      else this.close();
    }
  }

  toggleCollapsed(force) {
    const collapsed = force ?? !this.root.classList.contains('collapsed');
    this.root.classList.toggle('collapsed', collapsed);
    this.head.setAttribute('aria-expanded', String(!collapsed));
  }

  get isOpen() {
    return this.currentId !== null;
  }

  open(entry, source, force = false) {
    const i = this.entries.indexOf(entry);
    this.source = source;
    if (this.currentId === entry.id && !force) return;
    this.currentId = entry.id;
    const d = this.ds;
    this.dossier.className = `dossier kind-${entry.kind}`;
    d.mark.replaceChildren(mark(entry.kind));
    d.kind.textContent = KINDS[entry.kind]?.label || entry.kind;
    d.years.textContent = entry.years || '';
    d.title.textContent = entry.title;
    d.org.textContent = entry.org === d.kind.textContent ? '' : entry.org;
    d.period.textContent = [entry.period, entry.location].filter(Boolean).join(' · ');
    d.pos.textContent = `${i + 1} / ${this.entries.length}`;

    const body = d.body;
    body.replaceChildren();
    if (entry.cover) {
      const fig = el('figure', 'ds-cover');
      const img = el('img');
      img.src = assetUrl(entry.cover);
      img.alt = entry.coverAlt || '';
      img.decoding = 'async';
      fig.append(img);
      body.append(fig);
    }
    if (entry.facts && entry.facts.length) {
      const dl = el('dl', 'ds-facts');
      for (const [k, v] of entry.facts) dl.append(el('dt', null, k), el('dd', null, v));
      body.append(dl);
    }
    if (entry.lede) body.append(el('p', 'ds-lede', entry.lede));
    if (entry.bullets.length) {
      const ul = el('ul', 'ds-bullets');
      for (const b of entry.bullets) ul.append(el('li', null, b));
      body.append(ul);
    }
    if (entry.body) {
      const rich = el('div', 'ds-rich');
      rich.append(renderMarkdown(entry.body));
      body.append(rich);
    }
    if (entry.groups) {
      for (const g of entry.groups) {
        body.append(el('div', 'ds-label', g.category));
        const ul = el('ul', 'ds-tags');
        for (const t of g.items) ul.append(el('li', null, t));
        body.append(ul);
      }
    }
    if (entry.tags.length) {
      body.append(el('div', 'ds-label', entry.tagsLabel || 'Tags'));
      const ul = el('ul', 'ds-tags');
      for (const t of entry.tags) ul.append(el('li', null, t));
      body.append(ul);
    }
    if (entry.links && entry.links.length) {
      const row = el('div', 'ds-links');
      for (const l of entry.links) row.append(linkItem(l.href, l.label, 'external'));
      body.append(row);
    }
    body.scrollTop = 0;
    document.body.classList.add('reading');
    this.dossier.setAttribute('aria-hidden', 'false');
    this.dossier.inert = false;
    // retrigger the entrance animation
    void this.dossier.offsetWidth;
    this.dossier.classList.add('open');
    for (const [id, it] of this.items) it.button.classList.toggle('current', id === entry.id);
    for (const [id, l] of this.labels) l.el.classList.toggle('current', id === entry.id);
  }

  close() {
    if (!this.isOpen) return;
    this.currentId = null;
    this.source = null;
    this.dossier.classList.remove('open');
    this.dossier.setAttribute('aria-hidden', 'true');
    this.dossier.inert = true;
    document.body.classList.remove('reading');
    for (const it of this.items.values()) it.button.classList.remove('current');
    for (const l of this.labels.values()) l.el.classList.remove('current');
  }

  setFound(id) {
    this.found.add(id);
    this.items.get(id)?.button.classList.add('found');
    this.labels.get(id)?.el.classList.add('found');
    const n = this.found.size;
    this.foundEl.textContent = String(n);
    this.bar.style.width = `${(n / this.entries.length) * 100}%`;
    this.root.classList.toggle('complete', n === this.entries.length);
  }

  resetFound() {
    this.found.clear();
    for (const it of this.items.values()) it.button.classList.remove('found');
    for (const l of this.labels.values()) l.el.classList.remove('found');
    this.foundEl.textContent = '0';
    this.bar.style.width = '0%';
    this.root.classList.remove('complete');
  }

  // per-frame: positions/opacity for world labels, bearing + distance in the index
  // views: Map(id -> { sx, sy, alpha, dist, angle, here })
  update(views) {
    const W = window.innerWidth;
    // nearest first (the stone being read before all), so when labels collide the nearer one wins
    const order = [...views].sort((a, b) => (a[0] === this.currentId ? -1 : b[0] === this.currentId ? 1 : a[1].dist - b[1].dist));
    const placed = [];
    for (const [id, v] of order) {
      const l = this.labels.get(id);
      if (l) {
        // keep the whole label on screen near the edges
        const half = (l.w || 160) / 2;
        const sx = Math.min(W - half - 4, Math.max(half + 4, v.sx));
        let target = v.alpha;
        if (target > 0.02) {
          const r = { x0: sx - half, x1: sx + half, y0: v.sy - 52, y1: v.sy - 10 };
          if (placed.some((p) => r.x0 < p.x1 && r.x1 > p.x0 && r.y0 < p.y1 && r.y1 > p.y0)) target = 0;
          else placed.push(r);
        }
        l.vis = l.vis === undefined ? target : l.vis + (target - l.vis) * 0.2;
        const a = Math.round(l.vis * 100) / 100;
        if (a !== l.a) {
          // measure as it appears (fonts may have arrived since last time)
          if (l.a <= 0.02 && a > 0.02) l.w = l.el.offsetWidth;
          l.a = a;
          l.el.style.opacity = String(a);
          l.el.style.visibility = a > 0.02 ? 'visible' : 'hidden';
        }
        if (Math.abs(sx - l.x) > 0.25 || Math.abs(v.sy - l.y) > 0.25) {
          l.x = sx;
          l.y = v.sy;
          l.el.style.transform = `translate3d(${sx.toFixed(1)}px, ${v.sy.toFixed(1)}px, 0) translate(-50%, -100%)`;
        }
      }
      const it = this.items.get(id);
      if (it) {
        const d = v.here ? 0 : Math.round(v.dist);
        if (d !== it.lastDist) {
          it.lastDist = d;
          it.dist.textContent = v.here ? 'here' : `${d} m`;
          it.button.classList.toggle('here', v.here);
        }
        if (Math.abs(v.angle - it.lastAngle) > 0.02) {
          it.lastAngle = v.angle;
          it.arrow.style.transform = `rotate(${v.angle.toFixed(3)}rad)`;
        }
      }
    }
  }
}
