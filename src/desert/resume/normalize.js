// Turns resume content into waystones: one standing stone per chapter of the road so far.

export const KINDS = {
  experience: { label: 'Experience', glyph: 'diamond' },
  education: { label: 'Education', glyph: 'circle' },
  project: { label: 'Project', glyph: 'square' },
  skills: { label: 'Toolkit', glyph: 'triangle' },
};

function slug(s) {
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
  if (!years.length) return present ? 'Now' : period;
  const a = years[0];
  const b = present ? 'Now' : years[years.length - 1];
  return a === b ? a : `${a}–${b}`;
}

export function buildWaystones({ experience = [], education = [], projects = [], skills = [] }) {
  const stones = [];
  for (const e of experience) {
    stones.push({
      id: slug(`${e.company}-${e.role}`),
      kind: 'experience',
      org: e.company,
      title: e.role,
      period: e.period,
      years: yearSpan(e.period),
      location: e.location || '',
      bullets: e.bullets || [],
      tags: e.tags || [],
      tagsLabel: 'Stack',
    });
  }
  for (const e of education) {
    const facts = [];
    if (e.gpa) facts.push(['GPA', e.gpa]);
    stones.push({
      id: slug(`${e.school}-${e.degree}`),
      kind: 'education',
      org: e.school,
      title: e.degree,
      period: `Graduation · ${e.graduation}`,
      years: yearSpan(e.graduation),
      location: e.location || '',
      facts,
      bullets: e.notes || [],
      tags: e.coursework || [],
      tagsLabel: 'Relevant coursework',
    });
  }
  for (const p of projects) {
    const links = [];
    if (p.href) links.push({ label: 'Visit', href: p.href });
    if (p.repo) links.push({ label: 'Source', href: p.repo });
    stones.push({
      id: slug(`project-${p.name}`),
      kind: 'project',
      org: 'Project',
      title: p.name,
      period: '',
      years: '',
      bullets: p.description ? [p.description] : [],
      tags: p.stack || [],
      tagsLabel: 'Stack',
      links,
    });
  }
  if (skills.length) {
    stones.push({
      id: 'skills',
      kind: 'skills',
      org: 'Toolkit',
      title: 'Skills',
      period: '',
      years: '',
      groups: skills,
      bullets: [],
      tags: [],
    });
  }
  return stones;
}
