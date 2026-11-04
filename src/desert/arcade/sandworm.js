// Sandworm: a snake-style game. Swallow spice to grow; rock, the edge of the
// erg and your own tail end the run.

const COLS = 32;
const ROWS = 20;
const CELL = 20; // 640 × 400 virtual pixels
const DIRS = { left: { x: -1, y: 0 }, right: { x: 1, y: 0 }, up: { x: 0, y: -1 }, down: { x: 0, y: 1 } };

export class Sandworm {
  static id = 'sandworm';
  static title = 'Sandworm';
  static blurb = 'Swallow the spice and grow. Rock, the edge of the erg and your own tail end the run.';
  static help = 'Arrows or WASD to steer · on touch, swipe or use the pad';
  static touch = 'dpad';

  constructor(api) {
    this.api = api;
    this.reset();
  }

  reset() {
    this.dir = DIRS.right;
    this.queue = [];
    this.body = [];
    for (let i = 0; i < 4; i++) this.body.push({ x: 8 - i, y: 10 });
    this.grow = 0;
    this.score = 0;
    this.step = 0.13;
    this.acc = 0;
    this.t = 0;
    this.state = 'ready';
    this.rocks = new Set();
    while (this.rocks.size < 12) {
      const x = 2 + Math.floor(Math.random() * (COLS - 4));
      const y = 2 + Math.floor(Math.random() * (ROWS - 4));
      if (Math.abs(y - 10) <= 1 && x < 16) continue; // keep the opening run clear
      this.rocks.add(x + ',' + y);
    }
    this.food = this._free();
    this.api.score(0);
  }

  _free() {
    for (;;) {
      const x = Math.floor(Math.random() * COLS);
      const y = Math.floor(Math.random() * ROWS);
      const k = x + ',' + y;
      if (this.rocks.has(k)) continue;
      if (this.body.some((b) => b.x === x && b.y === y)) continue;
      return { x, y };
    }
  }

  update(dt, input) {
    this.t += dt;
    for (const k of ['left', 'right', 'up', 'down']) {
      if (!input.pressed.has(k)) continue;
      const d = DIRS[k];
      const last = this.queue.length ? this.queue[this.queue.length - 1] : this.dir;
      const reverse = d.x === -last.x && d.y === -last.y;
      const same = d.x === last.x && d.y === last.y;
      if (!reverse && !same && this.queue.length < 2) this.queue.push(d);
      if (this.state === 'ready') this.state = 'play';
    }
    if (this.state === 'over') {
      if (input.pressed.has('action')) this.reset();
      return;
    }
    if (this.state === 'ready') {
      if (input.pressed.has('action')) this.state = 'play';
      return;
    }
    this.acc += dt;
    while (this.acc >= this.step && this.state === 'play') {
      this.acc -= this.step;
      this._tick();
    }
  }

  _tick() {
    if (this.queue.length) this.dir = this.queue.shift();
    const head = this.body[0];
    const nx = head.x + this.dir.x;
    const ny = head.y + this.dir.y;
    const eats = nx === this.food.x && ny === this.food.y;
    const growing = this.grow > 0 || eats;
    const hitsSelf = this.body.some((b, i) => b.x === nx && b.y === ny && (growing || i < this.body.length - 1));
    if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS || this.rocks.has(nx + ',' + ny) || hitsSelf) {
      this.state = 'over';
      this.api.sfx('die');
      this.api.over(this.score);
      return;
    }
    this.body.unshift({ x: nx, y: ny });
    if (eats) {
      this.grow += 3;
      this.score += 10;
      this.step = Math.max(0.06, this.step * 0.96);
      this.food = this._free();
      this.api.score(this.score);
      this.api.sfx('pickup');
    }
    if (this.grow > 0) this.grow--;
    else this.body.pop();
  }

  draw(g, W, H) {
    // sand, with a few wind ripples
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#dcae74');
    bg.addColorStop(1, '#c7925a');
    g.fillStyle = bg;
    g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(120, 70, 30, 0.12)';
    g.lineWidth = 2;
    for (let i = 0; i < 9; i++) {
      g.beginPath();
      for (let x = 0; x <= W; x += 16) {
        const y = 24 + i * 46 + Math.sin(x * 0.02 + i * 1.7) * 8;
        if (x === 0) g.moveTo(x, y);
        else g.lineTo(x, y);
      }
      g.stroke();
    }
    // rocks
    for (const k of this.rocks) {
      const [x, y] = k.split(',').map(Number);
      g.fillStyle = '#5a3b2b';
      roundRect(g, x * CELL + 1, y * CELL + 2, CELL - 2, CELL - 3, 5);
      g.fill();
      g.fillStyle = 'rgba(255, 220, 180, 0.18)';
      roundRect(g, x * CELL + 3, y * CELL + 3, CELL - 8, 5, 2);
      g.fill();
    }
    // spice, breathing softly
    const fx = this.food.x * CELL + CELL / 2;
    const fy = this.food.y * CELL + CELL / 2;
    const p = 0.5 + 0.5 * Math.sin(this.t * 4);
    const glow = g.createRadialGradient(fx, fy, 1, fx, fy, 16);
    glow.addColorStop(0, 'rgba(255, 170, 70, 0.9)');
    glow.addColorStop(1, 'rgba(255, 120, 40, 0)');
    g.fillStyle = glow;
    g.beginPath();
    g.arc(fx, fy, 14 + p * 3, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#ff8a3d';
    g.beginPath();
    g.arc(fx, fy, 5, 0, Math.PI * 2);
    g.fill();
    // the worm: one thick ringed body, the head a round open mouth
    const pts = this.body.map((b) => [b.x * CELL + CELL / 2, b.y * CELL + CELL / 2]);
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.strokeStyle = '#7d5a3c';
    g.lineWidth = CELL * 0.84;
    g.beginPath();
    pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    g.stroke();
    g.strokeStyle = '#9b7350';
    g.lineWidth = CELL * 0.5;
    g.stroke();
    g.fillStyle = 'rgba(60, 35, 20, 0.45)';
    pts.forEach(([x, y], i) => {
      if (i === 0) return;
      g.beginPath();
      g.arc(x, y, 2.2, 0, Math.PI * 2);
      g.fill();
    });
    const [hx, hy] = pts[0];
    g.fillStyle = '#6a4a31';
    g.beginPath();
    g.arc(hx, hy, CELL * 0.56, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#f0c49a';
    g.beginPath();
    g.arc(hx + this.dir.x * 3, hy + this.dir.y * 3, CELL * 0.32, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#2a1810';
    g.beginPath();
    g.arc(hx + this.dir.x * 4, hy + this.dir.y * 4, CELL * 0.16, 0, Math.PI * 2);
    g.fill();

    if (this.state === 'ready') banner(g, W, H, 'Sandworm', 'Press an arrow key to start');
    if (this.state === 'over') banner(g, W, H, `Score ${this.score}`, 'Space or tap to go again');
  }
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

// a centred title card over a dimmed playfield
export function banner(g, W, H, title, sub) {
  g.fillStyle = 'rgba(24, 12, 4, 0.55)';
  g.fillRect(0, 0, W, H);
  g.textAlign = 'center';
  g.fillStyle = '#fbead0';
  g.font = '700 30px Syncopate, Futura, sans-serif';
  g.fillText(title.toUpperCase(), W / 2, H / 2 - 6);
  g.fillStyle = 'rgba(244, 226, 198, 0.8)';
  g.font = '500 17px Barlow, sans-serif';
  g.fillText(sub, W / 2, H / 2 + 26);
  g.textAlign = 'left';
}
