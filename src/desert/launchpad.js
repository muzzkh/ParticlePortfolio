// The launch keypad. Digits are shown only as dots and the field doesn't say how many it
// wants. A right code arms a short countdown, then onLaunch() fires.

const $ = (id) => document.getElementById(id);

export class LaunchPad {
  constructor({ key, onLaunch, onOpen, onClose }) {
    this.key = key;
    this.onLaunch = onLaunch;
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.root = $('launch');
    this.box = this.root.querySelector('.launch-box');
    this.field = $('launchCode');
    this.msg = $('launchMsg');
    this.code = '';
    this.busy = false;
    this.timer = 0;
    const pad = $('launchPad');
    for (const k of ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'launch']) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `lp-key lp-${k}`;
      b.textContent = k === 'clear' ? 'Clear' : k === 'launch' ? 'Launch' : k;
      b.addEventListener('click', () => this._press(k));
      pad.append(b);
    }
    $('launchCancel').addEventListener('click', () => this.hide());
    this.root.addEventListener('click', (e) => {
      if (e.target === this.root) this.hide();
    });
    window.addEventListener(
      'keydown',
      (e) => {
        if (!this.isOpen) return;
        e.stopImmediatePropagation();
        if (e.code === 'Escape') this.hide();
        else if (e.code === 'Enter' || e.code === 'NumpadEnter') this._press('launch');
        else if (e.code === 'Backspace') this._press('back');
        else if (/^\d$/.test(e.key)) this._press(e.key);
        else return;
        e.preventDefault();
      },
      true,
    );
    window.addEventListener('keyup', (e) => this.isOpen && e.stopImmediatePropagation(), true);
  }

  get isOpen() {
    return !this.root.hidden;
  }

  show() {
    if (this.isOpen) return;
    this.code = '';
    this.busy = false;
    clearInterval(this.timer);
    this.root.classList.remove('armed');
    this._say(this.key.lockSeconds ? `Locked. Try again in ${this.key.lockSeconds} s.` : 'Authorised personnel only.');
    this._render();
    this.root.hidden = false;
    this.onOpen();
    this.root.querySelector('.lp-1').focus({ preventScroll: true });
  }

  hide() {
    if (!this.isOpen) return;
    clearInterval(this.timer);
    this.root.hidden = true;
    this.code = '';
    this.onClose();
  }

  _say(text) {
    this.msg.textContent = text;
  }

  _render() {
    this.field.textContent = this.code ? '•'.repeat(this.code.length) : '';
    this.field.classList.toggle('empty', !this.code);
  }

  async _press(k) {
    if (this.busy) return;
    if (k === 'clear') this.code = '';
    else if (k === 'back') this.code = this.code.slice(0, -1);
    else if (k === 'launch') return this._submit();
    else if (this.code.length < 16) this.code += k;
    this._render();
  }

  async _submit() {
    if (!this.code) return;
    this.busy = true;
    this._say('Verifying…');
    let result;
    try {
      result = await this.key.tryCode(this.code);
    } catch {
      result = 'unsupported';
    }
    this.code = '';
    this._render();
    if (result === 'ok') {
      this.root.classList.add('armed');
      let n = 3;
      this._say(`Codes accepted. Launch in ${n}…`);
      this.timer = setInterval(() => {
        n--;
        if (n > 0) {
          this._say(`Codes accepted. Launch in ${n}…`);
          return;
        }
        clearInterval(this.timer);
        this.hide();
        this.onLaunch();
      }, 1000);
      return;
    }
    this.busy = false;
    if (result === 'locked') this._say(`Locked. Try again in ${this.key.lockSeconds} s.`);
    else if (result === 'unsupported') this._say('This browser cannot check codes.');
    else {
      this._say(this.key.lockSeconds ? `Codes rejected. Locked for ${this.key.lockSeconds} s.` : 'Codes rejected.');
      this.box.classList.remove('shake');
      void this.box.offsetWidth;
      this.box.classList.add('shake');
    }
  }
}
