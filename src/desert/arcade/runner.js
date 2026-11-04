// Dune Runner: an original side-scrolling platformer. Run the dunes to the sietch door
// at the end of each level; stomp scorpions, collect spice, and keep off the sand where
// a worm is rising.

import { banner, roundRect } from './sandworm.js';

const W = 640;
const H = 400;
const GRAV = 1500;
const RUN = 210;
const JUMP = 560;

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const overlap = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

export class DuneRunner {
  static id = 'runner';
  static title = 'Dune Runner';
  static blurb = 'Run the dunes to the sietch door. Stomp scorpions, grab spice, and keep off the sand where a worm is rising.';
  static help = '← → or A D to run · Space, W or ↑ to jump';
  static touch = 'runner';

  constructor(api) {
    this.api = api;
    this.reset();
  }

  reset() {
    this.level = 1;
    this.score = 0;
    this.lives = 3;
    this._build();
    this.state = 'ready';
    this.api.score(0);
  }

  _build() {
    const rng = mulberry32(this.level * 7919 + 13);
    const LEN = 2400 + this.level * 450;
    const solids = [];
    const spice = [];
    const scorps = [];
    const worms = [];
    let y = 320;
    solids.push({ x: -300, y, w: 660, h: 440 - y, kind: 'sand' });
    let x = 360;
    const addSpiceRow = (x0, x1, yy) => {
      for (let sx = x0; sx <= x1; sx += 34) spice.push({ x: sx, y: yy, taken: false });
    };
    const maybeScorpion = (sx, sw, sy) => {
      if (sw >= 240 && rng() < 0.3 + this.level * 0.1) {
        scorps.push({ x: sx + sw * 0.6, y: sy, min: sx + 24, max: sx + sw - 30, dir: rng() < 0.5 ? -1 : 1, speed: 38 + this.level * 9, alive: true, t: rng() * 10 });
      }
    };
    while (x < LEN) {
      const r = rng();
      if (r < 0.27) {
        // a pit of soft sand to jump
        const gap = Math.min(135, 64 + rng() * (36 + this.level * 10));
        const ny = clamp(y + (rng() - 0.5) * 70, 240, 340);
        const peak = Math.min(y, ny) - 70;
        for (let k = 1; k <= 3; k++) spice.push({ x: x + (gap * k) / 4, y: peak - Math.sin((k / 4) * Math.PI) * 18, taken: false });
        x += gap;
        y = ny;
        const w = 220 + rng() * 220;
        solids.push({ x, y, w, h: 440 - y, kind: 'sand' });
        maybeScorpion(x, w, y);
        x += w;
      } else if (r < 0.5) {
        // the dune steps up or down
        y = clamp(y + (rng() < 0.5 ? -1 : 1) * (30 + rng() * 45), 225, 340);
        const w = 200 + rng() * 260;
        solids.push({ x, y, w, h: 440 - y, kind: 'sand' });
        maybeScorpion(x, w, y);
        x += w;
      } else if (r < 0.76) {
        // a rock ledge above the sand, spice along its top
        const w = 360 + rng() * 240;
        solids.push({ x, y, w, h: 440 - y, kind: 'sand' });
        const lw = 90 + rng() * 70;
        const lx = x + 90 + rng() * Math.max(10, w - lw - 180);
        const ly = y - 92 - rng() * 30;
        solids.push({ x: lx, y: ly, w: lw, h: 18, kind: 'rock' });
        addSpiceRow(lx + 14, lx + lw - 14, ly - 18);
        maybeScorpion(x, w, y);
        x += w;
      } else {
        // open sand with a worm under it
        const w = 400 + rng() * 200;
        solids.push({ x, y, w, h: 440 - y, kind: 'sand' });
        worms.push({ x: x + w * 0.5, ground: y, period: Math.max(2.4, 3.6 - this.level * 0.2), phase: rng() * 3 });
        addSpiceRow(x + 40, x + 110, y - 26);
        x += w;
      }
    }
    solids.push({ x, y: 320, w: 700, h: 120, kind: 'sand' });
    this.door = { x: x + 300, y: 320 };
    this.len = x + 700;
    this.solids = solids;
    this.spice = spice;
    this.scorps = scorps;
    this.worms = worms;
    this.p = { x: 60, y: 320 - 30, w: 18, h: 30, vx: 0, vy: 0, onGround: false, coyote: 0, buffer: 0, face: 1, inv: 0, safeX: 60, safeY: 290, run: 0 };
    this.cam = 0;
    this.t = 0;
  }

  update(dt, input) {
    this.t += dt;
    const go = input.pressed.has('action') || input.pressed.has('up');
    if (this.state === 'ready') {
      if (go) this.state = 'play';
      return;
    }
    if (this.state === 'over') {
      if (input.pressed.has('action')) this.reset();
      return;
    }
    if (this.state === 'clear') {
      if (go) {
        this.level++;
        this._build();
        this.state = 'play';
      }
      return;
    }
    const p = this.p;
    // run
    const want = ((input.held.has('right') ? 1 : 0) - (input.held.has('left') ? 1 : 0)) * RUN;
    const acc = p.onGround ? 1800 : 1000;
    if (want > p.vx) p.vx = Math.min(want, p.vx + acc * dt);
    else if (want < p.vx) p.vx = Math.max(want, p.vx - acc * dt);
    if (want) p.face = Math.sign(want);
    // jump: buffered presses and a little grace after leaving an edge
    if (go) p.buffer = 0.12;
    else p.buffer -= dt;
    p.coyote = p.onGround ? 0.1 : p.coyote - dt;
    if (p.buffer > 0 && p.coyote > 0) {
      p.vy = -JUMP;
      p.buffer = 0;
      p.coyote = 0;
      this.api.sfx('jump');
    }
    if (!input.held.has('action') && !input.held.has('up') && p.vy < -220) p.vy = -220;
    p.vy = Math.min(820, p.vy + GRAV * dt);
    // move and collide, one axis at a time
    p.x += p.vx * dt;
    for (const s of this.solids) {
      if (!overlap(p, s)) continue;
      if (p.vx > 0) p.x = s.x - p.w;
      else if (p.vx < 0) p.x = s.x + s.w;
      p.vx = 0;
    }
    p.x = Math.max(-20, p.x);
    p.y += p.vy * dt;
    p.onGround = false;
    for (const s of this.solids) {
      if (!overlap(p, s)) continue;
      if (p.vy > 0) {
        p.y = s.y - p.h;
        p.onGround = true;
      } else if (p.vy < 0) {
        p.y = s.y + s.h;
      }
      p.vy = 0;
    }
    if (p.onGround && p.inv <= 0) {
      p.safeX = p.x;
      p.safeY = p.y;
    }
    p.run += Math.abs(p.vx) * dt * 0.06;
    p.inv = Math.max(0, p.inv - dt);
    if (p.y > H + 40) this._hurt();

    // scorpions
    for (const s of this.scorps) {
      if (!s.alive) continue;
      s.t += dt;
      s.x += s.dir * s.speed * dt;
      if (s.x < s.min || s.x > s.max) {
        s.dir *= -1;
        s.x = clamp(s.x, s.min, s.max);
      }
      const box = { x: s.x - 14, y: s.y - 14, w: 28, h: 14 };
      if (!overlap(p, box)) continue;
      if (p.vy > 60 && p.y + p.h - box.y < 16) {
        s.alive = false;
        p.vy = -380;
        this._add(25);
        this.api.sfx('stomp');
      } else this._hurt();
    }
    // worms: a warning ripple, then the worm rises and falls
    for (const w of this.worms) {
      const k = this._wormRise(w);
      if (k <= 0.05) continue;
      const box = { x: w.x - 26, y: w.ground - 115 * k, w: 52, h: 115 * k };
      if (overlap(p, box)) this._hurt();
    }
    // spice
    for (const s of this.spice) {
      if (s.taken) continue;
      if (Math.abs(p.x + p.w / 2 - s.x) < 16 && Math.abs(p.y + p.h / 2 - s.y) < 22) {
        s.taken = true;
        this._add(10);
        this.api.sfx('pickup');
      }
    }
    // the door
    if (p.x + p.w > this.door.x + 8 && p.onGround) {
      this.state = 'clear';
      this._add(100);
      this.api.sfx('clear');
    }
    this.cam = clamp(p.x - 240, 0, this.len - W);
  }

  // 0 below the sand … 1 at full height; negative while the warning ripple shows
  _wormRise(w) {
    const tt = (this.t + w.phase) % w.period;
    const up0 = w.period - 1.0;
    if (tt < up0 - 0.9) return 0;
    if (tt < up0) return -1; // ripple
    return Math.sin(((tt - up0) / 1.0) * Math.PI);
  }

  _add(n) {
    this.score += n;
    this.api.score(this.score);
  }

  _hurt() {
    const p = this.p;
    if (p.inv > 0 && p.y < H + 40) return;
    this.lives--;
    this.api.sfx('hit');
    if (this.lives <= 0) {
      this.state = 'over';
      this.api.over(this.score);
      return;
    }
    p.x = p.safeX;
    p.y = p.safeY - 2;
    p.vx = 0;
    p.vy = 0;
    p.inv = 1.6;
  }

  draw(g) {
    const cam = this.cam;
    // sky, sun, and two layers of far dunes moving slower than the ground
    const sky = g.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#f1c48e');
    sky.addColorStop(0.7, '#e7a468');
    g.fillStyle = sky;
    g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(255, 244, 222, 0.85)';
    g.beginPath();
    g.arc(500 - cam * 0.03, 92, 34, 0, Math.PI * 2);
    g.fill();
    for (const [spd, base, amp, col] of [
      [0.15, 250, 26, '#dda06a'],
      [0.4, 290, 30, '#cf8f5a'],
    ]) {
      g.fillStyle = col;
      g.beginPath();
      g.moveTo(0, H);
      for (let x = 0; x <= W; x += 10) {
        const wx = x + cam * spd;
        g.lineTo(x, base - Math.sin(wx * 0.006) * amp - Math.sin(wx * 0.017 + 1) * amp * 0.4);
      }
      g.lineTo(W, H);
      g.fill();
    }
    g.save();
    g.translate(-Math.round(cam), 0);
    // ground and ledges
    for (const s of this.solids) {
      if (s.x > cam + W || s.x + s.w < cam) continue;
      if (s.kind === 'sand') {
        const gr = g.createLinearGradient(0, s.y, 0, s.y + 120);
        gr.addColorStop(0, '#d9a465');
        gr.addColorStop(1, '#b07845');
        g.fillStyle = gr;
        g.fillRect(s.x, s.y, s.w, s.h);
        g.fillStyle = '#ecc28a';
        g.fillRect(s.x, s.y, s.w, 4);
      } else {
        g.fillStyle = '#5e4131';
        roundRect(g, s.x, s.y, s.w, s.h, 6);
        g.fill();
        g.fillStyle = '#8a6248';
        g.fillRect(s.x + 4, s.y + 2, s.w - 8, 4);
      }
    }
    // the sietch door: a rock face with a lit arch
    const d = this.door;
    g.fillStyle = '#5a3d2d';
    g.fillRect(d.x - 30, d.y - 150, 160, 150);
    g.fillStyle = '#2a1a12';
    g.beginPath();
    g.moveTo(d.x, d.y);
    g.lineTo(d.x, d.y - 70);
    g.arc(d.x + 24, d.y - 70, 24, Math.PI, 0);
    g.lineTo(d.x + 48, d.y);
    g.fill();
    const glow = 0.6 + 0.25 * Math.sin(this.t * 2);
    g.fillStyle = `rgba(124, 200, 255, ${glow * 0.35})`;
    g.fill();
    // spice
    for (const s of this.spice) {
      if (s.taken || s.x < cam - 20 || s.x > cam + W + 20) continue;
      const gl = g.createRadialGradient(s.x, s.y, 1, s.x, s.y, 12);
      gl.addColorStop(0, 'rgba(255, 170, 70, 0.95)');
      gl.addColorStop(1, 'rgba(255, 120, 40, 0)');
      g.fillStyle = gl;
      g.beginPath();
      g.arc(s.x, s.y, 12, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#ff8a3d';
      g.beginPath();
      g.arc(s.x, s.y, 4, 0, Math.PI * 2);
      g.fill();
    }
    // scorpions
    for (const s of this.scorps) {
      if (!s.alive || s.x < cam - 40 || s.x > cam + W + 40) continue;
      const step = Math.sin(s.t * 14) * 2;
      g.strokeStyle = '#2f2119';
      g.lineWidth = 2;
      for (let k = -1; k <= 1; k++) {
        g.beginPath();
        g.moveTo(s.x + k * 6, s.y - 6);
        g.lineTo(s.x + k * 8 + (k === 0 ? step : 0), s.y);
        g.stroke();
      }
      g.fillStyle = '#3a2a20';
      g.beginPath();
      g.ellipse(s.x, s.y - 7, 13, 6, 0, 0, Math.PI * 2);
      g.fill();
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(s.x - s.dir * 11, s.y - 9);
      g.quadraticCurveTo(s.x - s.dir * 22, s.y - 26, s.x - s.dir * 8, s.y - 24);
      g.stroke();
      g.beginPath();
      g.moveTo(s.x + s.dir * 12, s.y - 7);
      g.lineTo(s.x + s.dir * 19, s.y - 11);
      g.stroke();
    }
    // worms
    for (const w of this.worms) {
      if (w.x < cam - 80 || w.x > cam + W + 80) continue;
      const k = this._wormRise(w);
      if (k < 0) {
        g.strokeStyle = 'rgba(110, 66, 30, 0.55)';
        g.lineWidth = 2;
        for (let r = 0; r < 3; r++) {
          const rr = 14 + r * 12 + ((this.t * 40) % 12);
          g.beginPath();
          g.ellipse(w.x, w.ground + 2, rr * 1.8, rr * 0.35, 0, Math.PI, 0);
          g.stroke();
        }
      } else if (k > 0.02) {
        const top = w.ground - 115 * k;
        g.fillStyle = '#7a5a3e';
        roundRect(g, w.x - 24, top, 48, w.ground - top + 6, 22);
        g.fill();
        g.strokeStyle = 'rgba(50, 30, 18, 0.5)';
        g.lineWidth = 2;
        for (let yy = top + 24; yy < w.ground; yy += 13) {
          g.beginPath();
          g.moveTo(w.x - 22, yy);
          g.lineTo(w.x + 22, yy + 2);
          g.stroke();
        }
        g.fillStyle = '#f0c49a';
        g.beginPath();
        g.ellipse(w.x, top + 8, 18, 8, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#2a1810';
        g.beginPath();
        g.ellipse(w.x, top + 9, 9, 4, 0, 0, Math.PI * 2);
        g.fill();
      }
    }
    // the runner: hooded and cloaked, legs scissoring with speed
    const p = this.p;
    g.globalAlpha = p.inv > 0 ? 0.55 + 0.25 * Math.sin(this.t * 10) : 1;
    const cx = p.x + p.w / 2;
    const swing = Math.sin(p.run * Math.PI) * (p.onGround ? 6 : 3);
    g.strokeStyle = '#2e2620';
    g.lineWidth = 3;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(cx - 2, p.y + 20);
    g.lineTo(cx - 2 + swing, p.y + p.h);
    g.moveTo(cx + 2, p.y + 20);
    g.lineTo(cx + 2 - swing, p.y + p.h);
    g.stroke();
    g.fillStyle = '#6d5844';
    g.beginPath();
    g.moveTo(cx - 5, p.y + 6);
    g.lineTo(cx + 6, p.y + 6);
    g.lineTo(cx + 9 - p.face * 3, p.y + 23);
    g.lineTo(cx - 9 - p.face * 3, p.y + 23);
    g.closePath();
    g.fill();
    g.fillStyle = '#3b322b';
    g.beginPath();
    g.arc(cx, p.y + 5, 6, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#7cc8ff';
    g.fillRect(cx + p.face * 2 - 1, p.y + 4, 2, 2);
    g.globalAlpha = 1;
    g.restore();

    // HUD: level and lives
    g.fillStyle = 'rgba(40, 20, 8, 0.65)';
    g.font = '600 14px Barlow, sans-serif';
    g.fillText(`LEVEL ${this.level}`, 14, 24);
    for (let i = 0; i < this.lives; i++) {
      g.beginPath();
      g.arc(92 + i * 16, 19, 5, 0, Math.PI * 2);
      g.fill();
    }
    if (this.state === 'ready') banner(g, W, H, 'Dune Runner', 'Space or tap Jump to start');
    if (this.state === 'clear') banner(g, W, H, 'Sietch reached', `Space for level ${this.level + 1}`);
    if (this.state === 'over') banner(g, W, H, `Score ${this.score}`, 'Space or tap to run again');
  }
}
