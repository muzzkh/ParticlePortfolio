// The games in the desert, as /management knows them (their code is in src/games/).
// site.json may hold, per game: { hidden: true } and { place: { dx, dz, rot } }.

export const GAMES = [
  { id: 'worm', title: 'Worm Pit', kind: 'Sandworm', blurb: 'A ring of stone teeth where visitors steer a young worm: swallow spice, grow, and keep off the stones and their own tail.' },
  { id: 'ride', title: 'Thopter Ride', kind: 'Vehicle', blurb: 'An ornithopter on a stone pad. Visitors climb aboard and fly it anywhere, set it down where they like, and it waits for them there.' },
  { id: 'race', title: 'Sand Race', kind: 'Race', blurb: 'Three laps on sandbikes against three riders, round a marked course that is a new shape every race. The time to beat is kept.' },
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
