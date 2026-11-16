// Where the waystones and the project pads stand: a circle round the place visitors
// start. Plain geometry (nothing is drawn here), so it can be tested on its own.

export const TAU = Math.PI * 2;
export const RING_CHORD = 8.2; // metres between neighbours on a ring: the circles round two stones nearly touch
export const RING_MIN = 8.5; // the smallest a ring gets, however few stones stand on it
export const RING_FULL = 12; // stones on the first ring; any more stand on a ring outside it
export const RING_GAP = 9.5; // metres from one ring out to the next

// How many stones stand on each ring, and how far out it is: [{ r, count }], inside first.
export function ringPlan(n) {
  const rings = [];
  let left = Math.max(0, Math.floor(n) || 0);
  let r = 0;
  while (left > 0) {
    const room = rings.length ? Math.floor((TAU * (r + RING_GAP)) / RING_CHORD) : RING_FULL;
    const count = Math.min(left, room);
    const fit = count > 1 ? RING_CHORD / (2 * Math.sin(Math.PI / count)) : 0;
    r = rings.length ? Math.max(r + RING_GAP, fit) : Math.max(RING_MIN, fit);
    rings.push({ r, count });
    left -= count;
  }
  return rings;
}

// Where each of `n` stones stands, in order: [{ x, z, angle, ring }], offsets from the
// middle. A ring starts at `start` + `turn` (radians) and runs clockwise as the map is
// drawn (x to the right, z down the page). Every other ring is set half a step round, so
// its stones stand between those of the ring inside it.
export function ringSpots(n, start, turn = 0) {
  const out = [];
  ringPlan(n).forEach((ring, k) => {
    const step = TAU / ring.count;
    for (let i = 0; i < ring.count; i++) {
      const angle = start + turn + (i + (k % 2) * 0.5) * step;
      out.push({ x: Math.cos(angle) * ring.r, z: Math.sin(angle) * ring.r, angle, ring: k });
    }
  });
  return out;
}

// The ring the pads stand on, outside the stones: { r, step, phase }.
// apart: metres a pad keeps from any stone; room: metres two pads keep from each other.
export function padRing(n, start, turn, apart, room) {
  const rings = ringPlan(n);
  if (!rings.length) {
    const r = Math.max(RING_MIN + 3.5, apart);
    return { r, step: 2 * Math.asin(Math.min(1, room / (2 * r))), phase: start + turn };
  }
  const first = rings[0];
  const stoneStep = TAU / first.count;
  let r;
  if (rings.length === 1) {
    // set in the gap between two stones, a pad can stand closer in than straight behind one
    const half = Math.PI / first.count;
    const side = first.r * Math.sin(half);
    r = first.r * Math.cos(half) + Math.sqrt(Math.max(0, apart * apart - side * side));
    r = Math.max(r, first.r + 3.5);
  } else {
    r = rings[rings.length - 1].r + apart;
  }
  // step round in whole (or evenly divided) stone gaps, so pads line up with the circle
  const least = 2 * Math.asin(Math.min(1, room / (2 * r)));
  const step = stoneStep >= least ? stoneStep / Math.floor(stoneStep / least) : stoneStep * Math.ceil(least / stoneStep);
  return { r, step, phase: start + turn + stoneStep / 2 };
}

// The places for pads on that ring, as angles (radians), the nearest to `prefer` first.
export function padSlots(ring, prefer) {
  const n = Math.max(1, Math.floor(TAU / ring.step + 1e-6));
  const slots = [];
  for (let k = 0; k < n; k++) slots.push(ring.phase + k * ring.step);
  const off = (a) => Math.abs(((((a - prefer + Math.PI) % TAU) + TAU) % TAU) - Math.PI);
  return slots.sort((a, b) => off(a) - off(b));
}

// Where `count` pads stand round a circle of `n` stones: [{ x, z }], offsets from the
// middle, in order. Each takes the free place nearest `prefer`; when a ring has none
// left, the pads carry on round the next ring out.
//   apart: metres a pad keeps from a stone        room: metres two pads keep apart
//   taken: [{ x, z, keep }] sites already standing, each with the distance it keeps
//          from a pad (the list grows as pads are placed)
//   free(x, z): false where something else has the ground (the games)
export function padSpots(count, n, start, turn, { apart, room, prefer, taken = [], free = null }) {
  const out = [];
  let ring = padRing(n, start, turn, apart, room);
  let slots = padSlots(ring, prefer);
  for (let i = 0; i < count; i++) {
    let spot = null;
    for (let tries = 0; tries < 8 && !spot; tries++) {
      for (const a of slots) {
        const x = Math.cos(a) * ring.r;
        const z = Math.sin(a) * ring.r;
        if (free && !free(x, z)) continue;
        if (taken.some((p) => Math.hypot(x - p.x, z - p.z) < p.keep - 1e-6)) continue;
        spot = { x, z };
        break;
      }
      if (!spot) {
        ring = { r: ring.r + room + 1.5, step: ring.step, phase: ring.phase + ring.step / 2 };
        slots = padSlots(ring, prefer);
      }
    }
    if (!spot) spot = { x: Math.cos(prefer) * ring.r, z: Math.sin(prefer) * ring.r };
    taken.push({ x: spot.x, z: spot.z, keep: room });
    out.push(spot);
  }
  return out;
}
