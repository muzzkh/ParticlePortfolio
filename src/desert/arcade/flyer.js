// Canyon Flight: hold to beat the ornithopter's wings and climb, let go to glide down.
// The canyon narrows the further you get; spice orbs are worth a detour.

import { banner } from './sandworm.js';

const W = 640;
const H = 400;
const COL = 16; // canyon resolution in virtual pixels
const PX = 150; // the craft's fixed screen x

export class CanyonFlight {
  static id = 'canyon';
  static title = 'Canyon Flight';
  static blurb = 'Hold to beat the wings and climb, let go to glide. The canyon narrows as you go; spice is worth a detour.';
  static help = 'Hold Space, W, ↑ or the screen to climb';
  static touch = 'hold';

  constructor(api) {
    this.api = api;
    this.reset();
  }

  reset() {
    this.y = 200;
    this.vy = 0;
    this.dist = 0;
    this.speed = 170;
    this.t = 0;
    this.flap = 0;
    this.got = 0;
    this.score = 0;
    this.a = Math.random() * 100;
    this.b = Math.random() * 100;
    this.spice = [];
    this.nextSpice = 500;
    this.pillars = new Map(); // column index -> { top: bool, depth }
    this.nextPillar = 60;
    this.state = 'ready';
    this.api.score(0);
  }

  // canyon walls at column n (absolute): returns [top, bottom]
  _walls(n) {
    const center = 200 + Math.sin(n * 0.035 + this.a) * 80 + Math.sin(n * 0.11 + this.b) * 28;
    const gap = Math.max(118, 250 - n * 0.055);
    let top = center - gap / 2;
    let bottom = center + gap / 2;
    const p = this.pillars.get(n);
    if (p) {
      if (p.top) top += gap * p.depth;
      else bottom -= gap * p.depth;
    }
    return [Math.max(8, top), Math.min(H - 8, bottom)];
  }

  update(dt, input) {
    this.t += dt;
    const hold = input.held.has('action') || input.held.has('up');
    if (this.state === 'ready') {
      this.flap += dt * 6;
      if (input.pressed.has('action') || input.pressed.has('up')) this.state = 'play';
      return;
    }
    if (this.state === 'over') {
      if (input.pressed.has('action')) this.reset();
      return;
    }
    this.vy += (hold ? -980 : 640) * dt;
    this.vy = Math.max(-300, Math.min(330, this.vy));
    this.y += this.vy * dt;
    this.flap += dt * (hold ? 26 : 5);
    this.speed = Math.min(310, 170 + this.dist * 0.012);
    this.dist += this.speed * dt;
    const head = Math.floor((this.dist + W) / COL);
    // stalactites and stalagmites, now and then
    while (this.nextPillar < head + 4) {
      const n = this.nextPillar;
      const top = Math.random() < 0.5;
      const depth = 0.32 + Math.random() * 0.12;
      for (let k = 0; k < 3; k++) this.pillars.set(n + k, { top, depth: depth * (k === 1 ? 1 : 0.75) });
      this.nextPillar += 34 + Math.floor(Math.random() * 30);
    }
    // spice orbs in the open part of the canyon
    while (this.nextSpice < this.dist + W + 40) {
      const n = Math.floor(this.nextSpice / COL);
      const [t, b] = this._walls(n);
      this.spice.push({ x: this.nextSpice, y: t + (b - t) * (0.25 + Math.random() * 0.5), taken: false });
      this.nextSpice += 260 + Math.random() * 260;
    }
    // collisions with the walls at the craft's position
    const wx = this.dist + PX;
    for (let n = Math.floor((wx - 14) / COL); n <= Math.floor((wx + 14) / COL); n++) {
      const [t, b] = this._walls(n);
      if (this.y - 8 < t || this.y + 8 > b) {
        this.state = 'over';
        this.api.sfx('die');
        this.api.over(this.score);
        return;
      }
    }
    for (const s of this.spice) {
      if (!s.taken && Math.abs(s.x - wx) < 16 && Math.abs(s.y - this.y) < 18) {
        s.taken = true;
        this.got++;
        this.api.sfx('pickup');
      }
    }
    this.spice = this.spice.filter((s) => s.x > this.dist - 40);
    for (const n of this.pillars.keys()) if (n * COL < this.dist - 40) this.pillars.delete(n);
    const score = Math.floor(this.dist / 10) + this.got * 50;
    if (score !== this.score) {
      this.score = score;
      this.api.score(score);
    }
  }

  draw(g) {
    const sky = g.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#5a4a6e');
    sky.addColorStop(0.55, '#c9875f');
    sky.addColorStop(1, '#e8b47a');
    g.fillStyle = sky;
    g.fillRect(0, 0, W, H);
    // haze bands drifting past
    g.fillStyle = 'rgba(255, 220, 180, 0.05)';
    for (let i = 0; i < 4; i++) {
      const span = W + 300;
      const x = ((((i * 260 - this.dist * 0.3) % span) + span) % span) - 150;
      g.fillRect(x, 120 + i * 60, 220, 5);
    }
    // canyon walls
    const first = Math.floor(this.dist / COL);
    const last = first + Math.ceil(W / COL) + 1;
    g.fillStyle = '#4b3226';
    g.beginPath();
    g.moveTo(-COL, 0);
    for (let n = first; n <= last; n++) g.lineTo(n * COL - this.dist, this._walls(n)[0]);
    g.lineTo(W + COL, 0);
    g.fill();
    g.beginPath();
    g.moveTo(-COL, H);
    for (let n = first; n <= last; n++) g.lineTo(n * COL - this.dist, this._walls(n)[1]);
    g.lineTo(W + COL, H);
    g.fill();
    g.strokeStyle = '#8a5b3e';
    g.lineWidth = 3;
    for (const side of [0, 1]) {
      g.beginPath();
      for (let n = first; n <= last; n++) {
        const x = n * COL - this.dist;
        const y = this._walls(n)[side];
        if (n === first) g.moveTo(x, y);
        else g.lineTo(x, y);
      }
      g.stroke();
    }
    // spice
    for (const s of this.spice) {
      if (s.taken) continue;
      const x = s.x - this.dist;
      const gl = g.createRadialGradient(x, s.y, 1, x, s.y, 13);
      gl.addColorStop(0, 'rgba(255, 170, 70, 0.95)');
      gl.addColorStop(1, 'rgba(255, 120, 40, 0)');
      g.fillStyle = gl;
      g.beginPath();
      g.arc(x, s.y, 13, 0, Math.PI * 2);
      g.fill();
    }
    // the ornithopter, tilted with its climb, two pairs of wings beating
    g.save();
    g.translate(PX, this.y);
    g.rotate(Math.max(-0.35, Math.min(0.35, this.vy / 900)));
    const beat = Math.sin(this.flap);
    for (const [ox, ph] of [
      [4, 0],
      [-6, 1.9],
    ]) {
      const a = Math.sin(this.flap + ph);
      g.fillStyle = 'rgba(222, 200, 156, 0.85)';
      g.beginPath();
      g.ellipse(ox, -2 - a * 8, 22, 3.5 + Math.abs(a) * 2, -0.08 - a * 0.25, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = '#8d7b60';
    g.beginPath();
    g.ellipse(0, 0, 17, 6, 0, 0, Math.PI * 2);
    g.fill();
    g.fillRect(-30, -2, 16, 3);
    g.fillStyle = '#4d6b70';
    g.beginPath();
    g.ellipse(13, -1, 6, 4.5, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = `rgba(98, 205, 189, ${0.5 + 0.3 * Math.abs(beat)})`;
    g.fillRect(-15, 3, 5, 2);
    g.restore();

    if (this.state === 'ready') banner(g, W, H, 'Canyon Flight', 'Hold Space or the screen to fly');
    if (this.state === 'over') banner(g, W, H, `Score ${this.score}`, 'Space or tap to fly again');
  }
}
