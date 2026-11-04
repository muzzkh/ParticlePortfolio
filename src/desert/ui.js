// DOM side of things: HUD wiring, rhythm oscilloscope, wormsign banner, toasts.

const $ = (id) => document.getElementById(id);

export function formatTime(h) {
  const hh = Math.floor(h) % 24;
  const mm = Math.floor((h - Math.floor(h)) * 60);
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

export class UI {
  constructor(handlers) {
    this.hud = $('hud');
    this.intro = $('intro');
    this.timeInput = $('time');
    this.timeOut = $('timeOut');
    this.clock = $('clock');
    this.region = $('region');
    this.rhythmBox = $('rhythm');
    this.rhythmState = $('rhythmState');
    this.wave = $('rhythmWave');
    this.waveCtx = this.wave.getContext('2d');
    this.wormsign = $('wormsign');
    this.wsDist = $('wsDist');
    this.wsArrow = $('wsArrow');
    this.toastEl = $('toast');
    this.fadeEl = $('fade');
    this.buttons = {
      thumper: $('btnThumper'),
      sandwalk: $('btnSandwalk'),
      storm: $('btnStorm'),
      seed: $('btnSeed'),
      arcade: $('btnArcade'),
      atomics: $('btnAtomics'),
      sound: $('btnSound'),
    };
    this.buttons.sound.classList.add('on');
    this.steps = [];
    this.toastTimer = 0;
    this.hidden = false;

    $('enter').addEventListener('click', () => handlers.enter());
    $('enterRead').addEventListener('click', () => handlers.enterRead());
    this.timeInput.addEventListener('input', () => handlers.time(parseFloat(this.timeInput.value)));
    this.buttons.thumper.addEventListener('click', () => handlers.thumper());
    this.buttons.sandwalk.addEventListener('click', () => handlers.sandwalk());
    this.buttons.storm.addEventListener('click', () => handlers.storm());
    this.buttons.seed.addEventListener('click', () => handlers.seed());
    this.buttons.sound.addEventListener('click', () => handlers.sound());
    this.buttons.arcade.addEventListener('click', () => handlers.arcade());
    this.buttons.atomics.addEventListener('click', () => handlers.atomics());
    for (const b of Object.values(this.buttons)) b.addEventListener('mouseup', () => b.blur());

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.wave.width = 220 * dpr;
    this.wave.height = 34 * dpr;
    this.waveCtx.scale(dpr, dpr);
  }

  enter() {
    this.intro.classList.add('gone');
    this.hud.classList.remove('hidden');
    $('presence').hidden = false;
  }

  toggleHidden() {
    this.hidden = !this.hidden;
    this.hud.classList.toggle('hidden', this.hidden);
  }

  setTime(h) {
    const s = formatTime(h);
    this.timeOut.textContent = s;
    this.clock.textContent = s;
    if (Math.abs(parseFloat(this.timeInput.value) - h) > 0.02) this.timeInput.value = h.toFixed(2);
  }

  setRegion(name) {
    this.region.textContent = name;
  }

  setToggle(name, on) {
    this.buttons[name].classList.toggle('on', on);
  }

  toast(msg, seconds = 3.5) {
    this.toastEl.textContent = msg;
    this.toastEl.classList.add('show');
    this.toastTimer = seconds;
  }

  fade(on) {
    this.fadeEl.classList.toggle('on', on);
  }

  step(time, strength) {
    this.steps.push({ time, strength });
    if (this.steps.length > 40) this.steps.shift();
  }

  update(dt, now, rhythm, regularity, sandwalk, worm) {
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) this.toastEl.classList.remove('show');
    }

    // rhythm label
    let state = 'Still';
    const walking = now - (this.steps.length ? this.steps[this.steps.length - 1].time : -9) < 1.2;
    if (sandwalk && walking) state = 'Sandwalking';
    else if (rhythm > 0.8) state = 'Drumming';
    else if (rhythm > 0.5) state = 'Rhythmic';
    else if (walking) state = regularity > 0.6 ? 'Steady' : 'Broken';
    this.rhythmState.textContent = state;
    this.rhythmBox.classList.toggle('warn', rhythm > 0.5 && rhythm <= 0.8);
    this.rhythmBox.classList.toggle('danger', rhythm > 0.8);

    // oscilloscope: each footfall is a spike; spikes scroll left over 4 s
    const ctx = this.waveCtx;
    const W = 220;
    const H = 34;
    ctx.clearRect(0, 0, W, H);
    // attraction fill
    const grd = ctx.createLinearGradient(0, 0, W, 0);
    grd.addColorStop(0, 'rgba(255,200,140,0.0)');
    grd.addColorStop(1, rhythm > 0.8 ? 'rgba(255,90,54,0.35)' : 'rgba(255,170,90,0.22)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, H - 3, W * rhythm, 3);
    ctx.lineWidth = 1.25;
    ctx.strokeStyle = rhythm > 0.8 ? '#ff7a50' : rhythm > 0.5 ? '#ffb070' : 'rgba(244,226,198,0.8)';
    ctx.beginPath();
    const span = 4;
    const mid = H * 0.5;
    ctx.moveTo(0, mid);
    const pts = [];
    for (const s of this.steps) {
      const x = W - ((now - s.time) / span) * W;
      if (x > -6 && x < W + 6) pts.push({ x, a: 6 + 8 * s.strength });
    }
    let x = 0;
    for (const p of pts) {
      if (p.x - 5 > x) ctx.lineTo(p.x - 5, mid);
      ctx.lineTo(p.x - 2.5, mid - p.a);
      ctx.lineTo(p.x, mid + p.a * 0.55);
      ctx.lineTo(p.x + 2.5, mid - p.a * 0.2);
      ctx.lineTo(p.x + 4, mid);
      x = p.x + 4;
    }
    ctx.lineTo(W, mid);
    ctx.stroke();

    // wormsign
    if (worm && worm.visible) {
      this.wormsign.classList.add('show');
      this.wsDist.textContent = `${Math.round(worm.distance)} m`;
      this.wsArrow.style.transform = `rotate(${worm.screenAngle}rad)`;
    } else {
      this.wormsign.classList.remove('show');
    }
  }
}
