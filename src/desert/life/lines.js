// What the other walkers say when you come near: a greeting, a tip, or a pointer to
// something you haven't found yet. Pure, so it can be tested (test/lines.test.js).

import { pick } from '../rng.js';

const GREET = [
  'Good walking to you.',
  'The sand is kind today.',
  'Shade and water to you, traveller.',
  'You walk loudly. The deep ones listen.',
  'Mind the slip faces. They give way.',
  'The stones hum when you stand close.',
  'I came to read the stones as well.',
  'Long road. Good boots.',
  'The wind is turning. Can you smell it?',
  'I have walked this road twice. It reads better slowly.',
];
const NIGHT = ['Cold tonight. Keep moving.', 'The stones are brighter after dark.', 'Stars enough to walk by.', 'The mice are out. Step lightly.'];
const TIPS = [
  'Break your stride and the worm loses you.',
  'Rock under your feet is safe ground.',
  'A thumper will call one. Be elsewhere when it comes.',
  'After a spice blow, walk through the glow to gather it.',
  'You can leap, you know. It saves the knees on the ridges.',
  'From high up you see the whole road. Pull the view back.',
];
const GAME_LINES = {
  worm: (dir) => `Someone keeps a young worm in the pit to the ${dir}.`,
  ride: (dir) => `There is a thopter on the pad to the ${dir}. They let anyone fly it.`,
  race: (dir) => `They race sandbikes on the course to the ${dir}. Three laps, and the riders don't wait.`,
};

// which way (dx, dz) lies, in words; north is −z, east is +x (as on the map)
export function compass(dx, dz) {
  const names = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'];
  const a = Math.atan2(dx, -dz); // 0 = north, clockwise
  return names[((Math.round(a / (Math.PI / 4)) % 8) + 8) % 8];
}

// ctx: { rng, x, z, night, name, spice, unfound: [{ title, kind, x, z }], total, games: [{ id, x, z }] }
export function greeting(ctx) {
  const { rng } = ctx;
  const roll = rng();
  const near = (list) => list.slice().sort((a, b) => Math.hypot(a.x - ctx.x, a.z - ctx.z) - Math.hypot(b.x - ctx.x, b.z - ctx.z))[0];
  if (ctx.total > 0 && !ctx.unfound.length && roll < 0.35) return 'You have read every stone. The desert knows you now.';
  if (ctx.unfound.length && roll < 0.45) {
    const s = near(ctx.unfound);
    const dir = compass(s.x - ctx.x, s.z - ctx.z);
    const what = s.kind === 'project' ? 'pad' : 'stone';
    return rng() < 0.5 ? `There is a ${what} you have not read, to the ${dir}.` : `Have you read “${s.title}”? It stands to the ${dir}.`;
  }
  if (ctx.games.length && roll < 0.6) {
    const g = pick(rng, ctx.games);
    const line = GAME_LINES[g.id];
    if (line) return line(compass(g.x - ctx.x, g.z - ctx.z));
  }
  if (roll < 0.74) return pick(rng, TIPS);
  if (ctx.spice >= 10 && roll < 0.8) return 'You smell of spice. A good haul.';
  if (ctx.name && roll < 0.86) return `They say ${ctx.name.split(' ')[0]} raised these stones.`;
  return pick(rng, ctx.night ? NIGHT : GREET);
}
