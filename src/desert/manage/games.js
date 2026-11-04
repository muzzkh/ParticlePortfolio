// The games in the desert, as /management knows them (their code is in src/games/).
// site.json may hold, per game: { hidden: true } and { place: { dx, dz, rot } }.

export const GAMES = [
  { id: 'worm', title: 'Worm Pit', kind: 'Sandworm', blurb: 'A ring of stone teeth where visitors steer a young worm: swallow spice, grow, and keep off the stones and their own tail.' },
  { id: 'run', title: 'Dune Run', kind: 'Runner', blurb: 'A flagged track out across the erg. The walker sprints on their own; visitors pick the lane and jump the ridges.' },
  { id: 'fly', title: 'Airfield', kind: 'Ornithopter', blurb: 'An ornithopter on a stone pad. Visitors fly it out under a storm, threading the gaps between spires and hanging rock.' },
];

// drop empty settings, so turning something off and on again leaves no change behind
export function tidyGames(site) {
  const g = site.games;
  if (!g || typeof g !== 'object') {
    delete site.games;
    return site;
  }
  for (const id of Object.keys(g)) {
    const c = g[id];
    if (!c || typeof c !== 'object') {
      delete g[id];
      continue;
    }
    if (!c.hidden) delete c.hidden;
    if (!c.place) delete c.place;
    if (!Object.keys(c).length) delete g[id];
  }
  if (!Object.keys(g).length) delete site.games;
  return site;
}
