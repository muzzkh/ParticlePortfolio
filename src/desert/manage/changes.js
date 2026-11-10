// What /management knows about a site.json without touching the page: what's changed
// since the last publish, tidying before publishing, and what's wrong or worth a look.
// Pure functions, so they can be tested on their own (test/changes.test.js).

import { clone } from './store.js';
import { GAMES, tidyGames } from './games.js';

export const SAFE_HREF = /^(https?:\/\/|mailto:|tel:|\/|\.\.?\/|#)|^[\w.-]+\.(pdf|html?)$/i;
export const titleOf = (e) => (e && e.title) || 'Untitled';
export const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

export function checkShape(site) {
  if (!site || typeof site !== 'object' || !site.profile || !Array.isArray(site.entries)) {
    throw new Error('That isn’t a site.json this editor understands (it needs a profile and a list of entries).');
  }
  return site;
}

// A path for a file added in the editor, safe to commit under public/: plain names in
// plain folders, never up and out of the folder, never a dotfile.
export function safePublicPath(p) {
  const s = String(p || '');
  if (!/^[A-Za-z0-9][A-Za-z0-9._ -]*(\/[A-Za-z0-9][A-Za-z0-9._ -]*)*$/.test(s)) return false;
  return !s.split('/').some((part) => part === '..' || part.endsWith('.')) && s.length <= 200;
}

// images and models the content pulls from other sites (each visitor's browser contacts them)
export function externalAssets(e) {
  const out = [];
  if (/^https?:/i.test(e.cover || '')) out.push(e.cover);
  if (e.model && /^https?:/i.test(e.model.src || '')) out.push(e.model.src);
  for (const m of String(e.body || '').matchAll(/!\[[^\]]*\]\((https?:[^)\s]+)/gi)) out.push(m[1]);
  return out;
}

// ---------------------------------------------------------------------------
// what changed since the last publish
// ---------------------------------------------------------------------------
const FIELD_NAMES = {
  kind: 'kind',
  category: 'category',
  title: 'title',
  org: 'organization',
  status: 'status',
  period: 'dates',
  years: 'years label',
  location: 'location',
  summary: 'lead-in',
  bullets: 'highlights',
  body: 'details',
  cover: 'cover image',
  coverAlt: 'alt text',
  tags: 'tags',
  tagsLabel: 'tags heading',
  facts: 'facts',
  links: 'links',
  groups: 'skill groups',
  model: '3D model',
  place: 'placement',
  scale: 'size',
  hidden: 'visibility',
};
export const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

export function diffSites(a, b) {
  const out = [];
  a = a || { profile: {}, site: {}, world: {}, entries: [] };
  if (!same(a.profile, b.profile)) out.push({ area: 'profile', text: 'Profile and intro', short: 'edit profile', revert: (s) => (s.profile = clone(a.profile || {})) });
  if (!same(a.site, b.site)) out.push({ area: 'site', text: 'Site settings (résumé PDF)', short: 'update site settings', revert: (s) => (s.site = clone(a.site || {})) });
  if (!same(a.world, b.world)) out.push({ area: 'world', text: 'World (seed, time of day and life)', short: 'update world', revert: (s) => (s.world = clone(a.world || {})) });
  const ga = tidyGames({ games: clone(a.games || {}) }).games;
  const gb = tidyGames({ games: clone(b.games || {}) }).games;
  for (const g of GAMES) {
    if (same(ga && ga[g.id], gb && gb[g.id])) continue;
    out.push({
      area: 'game',
      id: `game:${g.id}`,
      text: `${g.title} (placement or visibility)`,
      short: `update the ${g.title}`,
      revert: (s) => {
        s.games ||= {};
        if (ga && ga[g.id]) s.games[g.id] = clone(ga[g.id]);
        else delete s.games[g.id];
        tidyGames(s);
      },
    });
  }
  const am = new Map(a.entries.map((e, i) => [e.id, { e, i }]));
  const bm = new Map(b.entries.map((e) => [e.id, e]));
  for (const e of b.entries) {
    const o = am.get(e.id);
    if (!o) {
      out.push({ area: 'entry', op: 'added', id: e.id, text: `Added “${titleOf(e)}”`, short: `add “${titleOf(e)}”`, revert: (s) => (s.entries = s.entries.filter((x) => x.id !== e.id)) });
    } else if (!same(o.e, e)) {
      const keys = [...new Set([...Object.keys(o.e), ...Object.keys(e)])].filter((k) => k !== 'id' && !same(o.e[k], e[k]));
      const what = keys.map((k) => FIELD_NAMES[k] || k);
      out.push({
        area: 'entry',
        op: 'edited',
        id: e.id,
        text: `Edited “${titleOf(e)}”`,
        detail: what.join(', '),
        short: keys.length === 1 && keys[0] === 'place' ? `move “${titleOf(e)}”` : `edit “${titleOf(e)}”`,
        revert: (s) => {
          const i = s.entries.findIndex((x) => x.id === e.id);
          if (i >= 0) s.entries[i] = clone(o.e);
        },
      });
    }
  }
  for (const [id, o] of am) {
    if (!bm.has(id)) {
      out.push({
        area: 'entry',
        op: 'removed',
        id,
        text: `Removed “${titleOf(o.e)}”`,
        short: `remove “${titleOf(o.e)}”`,
        revert: (s) => {
          if (s.entries.some((x) => x.id === id)) return;
          s.entries.splice(Math.min(o.i, s.entries.length), 0, clone(o.e));
        },
      });
    }
  }
  const order = (s) =>
    s.entries
      .filter((e) => am.has(e.id) && bm.has(e.id))
      .map((e) => e.id)
      .join('\n');
  if (order(a) !== order(b)) out.push({ area: 'order', text: 'Order of entries', short: 'reorder entries' });
  return out;
}


export function commitMessage(changes, files) {
  // entries first (what was added, removed, edited), then the settings around them
  const rank = (c) => (c.area === 'entry' ? { added: 0, removed: 1, edited: 2 }[c.op] ?? 2 : 3);
  const parts = changes
    .slice()
    .sort((x, y) => rank(x) - rank(y))
    .map((c) => c.short);
  if (!parts.length && files.length) parts.push(`update ${plural(files.length, 'file')}`);
  let msg = '';
  for (let i = 0; i < parts.length; i++) {
    const next = `${msg ? `${msg}, ` : ''}${parts[i]}`;
    if (next.length > 64 && msg) {
      msg += ` and ${parts.length - i} more`;
      break;
    }
    msg = next;
  }
  msg = msg.charAt(0).toUpperCase() + msg.slice(1);
  return `Site: ${msg}`;
}

// ---------------------------------------------------------------------------
// tidy and check before publishing
// ---------------------------------------------------------------------------
export function cleanSite(src) {
  const s = clone(src);
  const text = (v) => typeof v === 'string' && v.trim() !== '';
  for (const e of s.entries) {
    if (Array.isArray(e.bullets)) e.bullets = e.bullets.filter(text);
    if (Array.isArray(e.tags)) e.tags = e.tags.filter(text);
    if (Array.isArray(e.links)) e.links = e.links.filter((l) => l && text(l.href));
    if (Array.isArray(e.facts)) e.facts = e.facts.filter((f) => Array.isArray(f) && text(f[0]));
    if (Array.isArray(e.groups)) for (const g of e.groups) g.items = (g.items || []).filter(text);
  }
  if (s.profile && Array.isArray(s.profile.links)) s.profile.links = s.profile.links.filter((l) => l && text(l.href));
  // life settings left at their defaults aren't worth keeping
  if (s.world && s.world.life) {
    for (const k of Object.keys(s.world.life)) if (s.world.life[k] === undefined) delete s.world.life[k];
    if (!Object.keys(s.world.life).length) delete s.world.life;
  }
  return tidyGames(s);
}

export function validate(site) {
  const errors = [];
  const warnings = [];
  if (!(site.profile && String(site.profile.name || '').trim())) errors.push({ text: 'The profile has no name.', sel: { type: 'profile' } });
  const seen = new Set();
  for (const e of site.entries) {
    const at = { type: 'entry', id: e.id };
    if (!e.id) errors.push({ text: `“${titleOf(e)}” has no ID.`, sel: at });
    else if (seen.has(e.id)) errors.push({ text: `Two entries share the ID “${e.id}”.`, sel: at });
    seen.add(e.id);
    if (!String(e.title || '').trim()) errors.push({ text: 'An entry has no title.', sel: at });
    if (e.kind === 'project' && e.model && e.model.type === 'glb' && !e.model.src) warnings.push({ text: `“${titleOf(e)}” is set to use your own model, but none is chosen; its pad shows a placeholder.`, sel: at });
    if (e.cover && !String(e.coverAlt || '').trim()) warnings.push({ text: `The cover image on “${titleOf(e)}” has no alt text.`, sel: at });
    const outside = externalAssets(e);
    if (outside.length) {
      let host = 'another site';
      try {
        host = new URL(outside[0]).host;
      } catch {
        /* keep the generic wording */
      }
      warnings.push({ text: `“${titleOf(e)}” loads ${outside.length === 1 ? 'a file' : `${outside.length} files`} from ${host}, so every visitor’s browser contacts it. Uploading the file here keeps the site self-contained.`, sel: at });
    }
    for (const l of e.links || []) {
      if (!SAFE_HREF.test(String(l.href).trim())) warnings.push({ text: `“${titleOf(e)}” links to “${l.href}”, which doesn’t look like a web address.`, sel: at });
      if (!String(l.label || '').trim()) warnings.push({ text: `A link on “${titleOf(e)}” has no label.`, sel: at });
    }
  }
  for (const l of site.profile.links || []) if (!SAFE_HREF.test(String(l.href).trim())) warnings.push({ text: `The contact link “${l.label || l.href}” doesn’t look like a web or mail address.`, sel: { type: 'profile' } });
  if (!site.entries.some((e) => !e.hidden)) warnings.push({ text: 'Every entry is hidden, so the desert will be empty.' });
  return { errors, warnings };
}
