// Fully procedural sound: filtered noise for wind and sand, sine thuds for the thumper,
// sub-bass rumble for the worm. Nothing is loaded from disk.

export class DesertAudio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.started = false;
  }

  start() {
    if (this.started) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    this.started = true;

    this.master = ctx.createGain();
    this.master.gain.value = this.enabled ? 0.8 : 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);

    // shared noise buffers
    const len = ctx.sampleRate * 3;
    this.white = ctx.createBuffer(1, len, ctx.sampleRate);
    const w = this.white.getChannelData(0);
    for (let i = 0; i < len; i++) w[i] = Math.random() * 2 - 1;
    this.brown = ctx.createBuffer(1, len, ctx.sampleRate);
    const b = this.brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      b[i] = last * 3.5;
    }

    // wind: two band-passed noise layers
    this.windLow = this._loop(this.brown, 'lowpass', 420, 0.7);
    this.windHigh = this._loop(this.white, 'bandpass', 900, 0.8);
    this.hiss = this._loop(this.white, 'highpass', 4200, 0.5);
    // worm rumble
    this.rumble = this._loop(this.brown, 'lowpass', 110, 1.2);
  }

  _loop(buffer, type, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.playbackRate.value = 0.9 + Math.random() * 0.2;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    filter.Q.value = q;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    src.connect(filter).connect(gain).connect(this.master);
    src.start(ctx.currentTime + Math.random());
    return { src, filter, gain };
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.setTargetAtTime(on ? 0.8 : 0, this.ctx.currentTime, 0.1);
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  update(windStrength, gust, storm, wormLevel) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const w = Math.min(1.4, windStrength * 0.7 + gust * 0.5 + storm * 1.1);
    this.windLow.gain.gain.setTargetAtTime(0.12 + w * 0.32, t, 0.3);
    this.windLow.filter.frequency.setTargetAtTime(260 + w * 420, t, 0.4);
    this.windHigh.gain.gain.setTargetAtTime(0.02 + w * 0.1, t, 0.3);
    this.windHigh.filter.frequency.setTargetAtTime(650 + w * 900 + Math.sin(t * 0.3) * 120, t, 0.5);
    this.hiss.gain.gain.setTargetAtTime(0.004 + w * 0.03 + storm * 0.04, t, 0.3);
    this.rumble.gain.gain.setTargetAtTime(wormLevel * 1.4, t, 0.25);
    this.rumble.filter.frequency.setTargetAtTime(70 + wormLevel * 90, t, 0.3);
  }

  footstep(strength = 1) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.white;
    const off = Math.random() * 2.5;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 1500 + Math.random() * 1400;
    f.Q.value = 0.9;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 5200;
    const g = ctx.createGain();
    const peak = 0.09 * strength * (0.75 + Math.random() * 0.5);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.012);
    g.gain.exponentialRampToValueAtTime(peak * 0.35, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2 + strength * 0.05);
    src.connect(f).connect(lp).connect(g).connect(this.master);
    src.start(t, off, 0.3);
    // soft low thud of the heel
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(95, t);
    o.frequency.exponentialRampToValueAtTime(50, t + 0.08);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0.05 * strength, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(og).connect(this.master);
    o.start(t);
    o.stop(t + 0.12);
  }

  thump(distance) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const v = Math.max(0.08, 1 - distance / 60);
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(82, t);
    o.frequency.exponentialRampToValueAtTime(36, t + 0.28);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.55 * v, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.5);
    const src = ctx.createBufferSource();
    src.buffer = this.white;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 2400;
    f.Q.value = 2;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.12 * v, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    src.connect(f).connect(ng).connect(this.master);
    src.start(t, Math.random(), 0.1);
  }

  // A waystone waking: a struck-stone bell over a low swell, with a breath of sand.
  chime(kind = 'experience') {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const ratio = { experience: 1, education: 1.26, project: 1.335, skills: 1.5 }[kind] ?? 1;
    const base = 220 * ratio;
    const partials = [
      [1, 0.11, 3.2],
      [2.0, 0.05, 2.2],
      [2.76, 0.035, 1.6],
      [4.07, 0.02, 1.1],
      [5.4, 0.012, 0.8],
    ];
    for (const [mul, amp, decay] of partials) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = base * mul * (1 + (Math.random() - 0.5) * 0.004);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(amp, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
      o.connect(g).connect(this.master);
      o.start(t);
      o.stop(t + decay + 0.05);
    }
    const hum = ctx.createOscillator();
    hum.type = 'sine';
    hum.frequency.value = base / 2;
    const hg = ctx.createGain();
    hg.gain.setValueAtTime(0.0001, t);
    hg.gain.exponentialRampToValueAtTime(0.09, t + 0.45);
    hg.gain.exponentialRampToValueAtTime(0.0001, t + 3);
    hum.connect(hg).connect(this.master);
    hum.start(t);
    hum.stop(t + 3.1);
    const src = ctx.createBufferSource();
    src.buffer = this.white;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.setValueAtTime(900, t);
    f.frequency.exponentialRampToValueAtTime(3200, t + 1.2);
    f.Q.value = 0.7;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.0001, t);
    ng.gain.exponentialRampToValueAtTime(0.05, t + 0.3);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    src.connect(f).connect(ng).connect(this.master);
    src.start(t, Math.random(), 1.8);
  }

  eruption(power = 1) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.brown;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(1800, t);
    f.frequency.exponentialRampToValueAtTime(160, t + 3);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(1.1 * power, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 3.8);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random(), 4);
    const hiss = ctx.createBufferSource();
    hiss.buffer = this.white;
    const hf = ctx.createBiquadFilter();
    hf.type = 'highpass';
    hf.frequency.value = 2500;
    const hg = ctx.createGain();
    hg.gain.setValueAtTime(0.0001, t);
    hg.gain.exponentialRampToValueAtTime(0.18 * power, t + 0.2);
    hg.gain.exponentialRampToValueAtTime(0.0001, t + 3.5);
    hiss.connect(hf).connect(hg).connect(this.master);
    hiss.start(t, Math.random(), 4);
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(48, t);
    o.frequency.exponentialRampToValueAtTime(28, t + 2.5);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0.6 * power, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
    o.connect(og).connect(this.master);
    o.start(t);
    o.stop(t + 3);
  }
}
