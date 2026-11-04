// Turns site content (site.json) into the list of entries the desert shows: one waystone
// per résumé chapter, a landing pad per project.

// label: shown on a single entry; group: heading for the list in the codex
export const KINDS = {
  experience: { label: 'Experience', group: 'Experience', glyph: 'diamond' },
  education: { label: 'Education', group: 'Education', glyph: 'circle' },
  project: { label: 'Project', group: 'Projects', glyph: 'square' },
  skills: { label: 'Toolkit', group: 'Toolkit', glyph: 'triangle' },
};

export const MODEL_TYPES = ['ornithopter', 'pod', 'glb'];

export function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// "February 2026 – Present" -> "2026–Now", "June 2023 – August 2023" -> "2023"
export function yearSpan(period) {
  if (!period) return '';
  const years = String(period).match(/\d{4}/g) || [];
  const present = /present|now|current/i.test(period);
  if (!years.length) return present ? 'Now' : '';
  const a = years[0];
  const b = present ? 'Now' : years[years.length - 1];
  return a === b ? a : `${a}–${b}`;
}

const list = (v) => (Array.isArray(v) ? v.filter((x) => x !== null && x !== undefined && x !== '') : []);
const num = (v, d) => (typeof v === 'number' && Number.isFinite(v) ? v : d);

export function prepareEntries(site) {
  const out = [];
  for (const e of (site && site.entries) || []) {
    if (!e || e.hidden || !e.id) continue;
    const kind = KINDS[e.kind] ? e.kind : 'experience';
    const project = kind === 'project';
    const m = e.model || {};
    out.push({
      id: String(e.id),
      kind,
      title: e.title || 'Untitled',
      org: e.org || (project ? 'Project' : ''),
      period: e.period || '',
      years: e.years || (project ? e.status || '' : yearSpan(e.period)),
      location: e.location || '',
      lede: e.summary || '',
      bullets: list(e.bullets),
      body: e.body || '',
      cover: e.cover || '',
      coverAlt: e.coverAlt || '',
      tags: list(e.tags),
      tagsLabel: e.tagsLabel || (kind === 'education' ? 'Relevant coursework' : 'Stack'),
      facts: list(e.facts).filter((f) => Array.isArray(f) && f[0]),
      links: list(e.links).filter((l) => l && l.href),
      groups: kind === 'skills' ? list(e.groups).filter((g) => g && g.category) : null,
      model: project
        ? {
            type: MODEL_TYPES.includes(m.type) ? m.type : 'pod',
            src: m.src || '',
            scale: num(m.scale, 1),
            yaw: num(m.yaw, 0), // degrees
            y: num(m.y, 0),
            lift: m.lift !== false,
          }
        : null,
      // manual placement: offset from where visitors start, and a turn in degrees
      place: e.place && Number.isFinite(e.place.dx) && Number.isFinite(e.place.dz) ? { dx: e.place.dx, dz: e.place.dz, rot: num(e.place.rot, 0) } : null,
      scale: Math.max(0.3, Math.min(3, num(e.scale, 1))),
    });
  }
  return out;
}

// A fresh entry of the given kind, for the management editor.
export function newEntry(kind, existingIds) {
  const base = { experience: 'New role', education: 'New degree', project: 'New project', skills: 'Skills' }[kind] || 'New entry';
  let id = slug(`${kind === 'project' ? 'project-' : ''}${base}`);
  for (let i = 2; existingIds.has(id); i++) id = slug(`${kind === 'project' ? 'project-' : ''}${base}-${i}`);
  const e = { id, kind, title: base, org: '', period: '', location: '', summary: '', bullets: [], body: '', tags: [] };
  if (kind === 'project') {
    e.org = 'Project';
    e.status = 'In progress';
    e.model = { type: 'pod', src: '', scale: 1, yaw: 0, y: 0, lift: true };
  }
  if (kind === 'skills') e.groups = [{ category: 'Languages', items: [] }];
  if (kind === 'education') e.facts = [];
  return e;
}
