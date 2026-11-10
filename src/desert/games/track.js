// The Sand Race circuit: a closed, smooth loop around a centre, starting and finishing
// at a given point, a different shape every race. Pure geometry, no three.js, so it
// can be tested on its own (test/track.test.js).

const SAMPLES = 520;

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

// cx, cz: the middle; sx, sz: the start/finish line (on the loop); r0: its radius there;
// rng: where the shape comes from. → { pts: [{ x, z, tx, tz, s, curv }], length, maxR }
export function makeTrack(cx, cz, sx, sz, r0, rng) {
  const a0 = Math.atan2(sz - cz, sx - cx);
  const p1 = rng() * Math.PI * 2;
  const p2 = rng() * Math.PI * 2;
  const k1 = 0.18 + rng() * 0.14;
  const k2 = 0.08 + rng() * 0.1;
  const shape = (a) => 1 + k1 * Math.sin(2 * a + p1) + k2 * Math.sin(3 * a + p2);
  const dir = rng() < 0.5 ? 1 : -1; // clockwise or not
  const N = 11;
  const ctrl = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    let r = (shape(a) / shape(0)) * (i === 0 ? 1 : 0.94 + rng() * 0.12);
    r = Math.min(1.32, Math.max(0.62, r)) * r0;
    const ang = a0 + dir * a;
    ctrl.push({ x: cx + Math.cos(ang) * r, z: cz + Math.sin(ang) * r });
  }
  ctrl[0] = { x: sx, z: sz };
  // sample the closed spline, then measure along it
  const pts = [];
  for (let i = 0; i < SAMPLES; i++) {
    const f = (i / SAMPLES) * N;
    const k = Math.floor(f);
    const t = f - k;
    const q = (j) => ctrl[(((k + j) % N) + N) % N];
    pts.push({ x: catmull(q(-1).x, q(0).x, q(1).x, q(2).x, t), z: catmull(q(-1).z, q(0).z, q(1).z, q(2).z, t), tx: 0, tz: 0, s: 0, curv: 0 });
  }
  let s = 0;
  let maxR = 0;
  for (let i = 0; i < SAMPLES; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % SAMPLES];
    a.s = s;
    s += Math.hypot(b.x - a.x, b.z - a.z);
    maxR = Math.max(maxR, Math.hypot(a.x - cx, a.z - cz));
  }
  const length = s;
  for (let i = 0; i < SAMPLES; i++) {
    const a = pts[(i - 1 + SAMPLES) % SAMPLES];
    const b = pts[(i + 1) % SAMPLES];
    const l = Math.hypot(b.x - a.x, b.z - a.z) || 1;
    pts[i].tx = (b.x - a.x) / l;
    pts[i].tz = (b.z - a.z) / l;
  }
  // curvature: how fast the heading turns, per metre (smoothed a little)
  const raw = pts.map((p, i) => {
    const q = pts[(i + 4) % SAMPLES];
    const d = Math.atan2(p.tx * q.tz - p.tz * q.tx, p.tx * q.tx + p.tz * q.tz);
    return Math.abs(d) / (length / SAMPLES) / 4;
  });
  for (let i = 0; i < SAMPLES; i++) {
    let sum = 0;
    for (let j = -6; j <= 6; j++) sum += raw[(i + j + SAMPLES) % SAMPLES];
    pts[i].curv = sum / 13;
  }
  return { pts, length, maxR, cx, cz };
}

// the point `s` metres along the loop (any s; it wraps), with its direction
export function pointAt(track, s) {
  const { pts, length } = track;
  const w = ((s % length) + length) % length;
  // binary search for the sample just before w
  let lo = 0;
  let hi = pts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (pts[mid].s <= w) lo = mid;
    else hi = mid - 1;
  }
  const a = pts[lo];
  const b = pts[(lo + 1) % pts.length];
  const seg = (lo + 1 === pts.length ? length : b.s) - a.s || 1;
  const f = (w - a.s) / seg;
  const tx = a.tx + (b.tx - a.tx) * f;
  const tz = a.tz + (b.tz - a.tz) * f;
  const l = Math.hypot(tx, tz) || 1;
  return { x: a.x + (b.x - a.x) * f, z: a.z + (b.z - a.z) * f, tx: tx / l, tz: tz / l, curv: a.curv, i: lo };
}

// the sample nearest (x, z): searched near `hint` (a sample index) when given, else everywhere
export function nearest(track, x, z, hint = -1) {
  const { pts } = track;
  const n = pts.length;
  let best = -1;
  let bd = Infinity;
  const look = (i) => {
    const p = pts[i];
    const d = (p.x - x) ** 2 + (p.z - z) ** 2;
    if (d < bd) {
      bd = d;
      best = i;
    }
  };
  if (hint < 0) for (let i = 0; i < n; i++) look(i);
  else for (let j = -40; j <= 40; j++) look((((hint + j) % n) + n) % n);
  const p = pts[best];
  // signed distance across the track (+ to the right of the direction of travel, as
  // seen from above with the travel pointing up the screen)
  const across = (x - p.x) * -p.tz + (z - p.z) * p.tx;
  return { i: best, s: p.s, dist: Math.sqrt(bd), across };
}
