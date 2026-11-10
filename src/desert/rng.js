// Seeded randomness, shared by everything that must come out the same for a given seed
// (the layout, the rocks) and by the things that reseed themselves on every visit.

// a small, fast seeded generator: returns a function giving numbers in [0, 1)
export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// a 32-bit hash of a string (FNV-1a), for seeding from ids and names
export function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}

// a seed that differs on every visit
export function freshSeed() {
  return (Math.random() * 0xffffffff) >>> 0;
}

export const pick = (rng, list) => list[Math.floor(rng() * list.length) % list.length];
export const range = (rng, a, b) => a + (b - a) * rng();
