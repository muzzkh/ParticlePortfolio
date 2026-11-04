// Small DOM helpers for the editor: element builder, dialogs and toasts.

export function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'text') el.textContent = v;
    else if (k === 'value') el.value = v;
    else if (k === 'checked') el.checked = !!v;
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  return el;
}

let toastTimer = 0;
export function toast(text, kind = '') {
  let el = document.getElementById('mToast');
  if (!el) {
    el = h('div', { id: 'mToast', class: 'm-toast', role: 'status', 'aria-live': 'polite' });
    document.body.append(el);
  }
  el.textContent = text;
  el.className = `m-toast show ${kind}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), kind === 'error' ? 6000 : 3200);
}

// A modal dialog. buttons: [{ label, value, kind }]; resolves with the chosen value
// (or null when dismissed with Esc / the backdrop).
// onMount(close) gets a way to close it from inside the body.
export function dialog({ title, body, buttons, wide = false, dismissable = true, onMount }) {
  return new Promise((resolve) => {
    const prev = document.activeElement;
    let closed = false;
    const close = (v) => {
      if (closed) return;
      closed = true;
      back.remove();
      document.removeEventListener('keydown', onKey, true);
      if (prev && prev.focus) prev.focus();
      resolve(v);
    };
    const onKey = (e) => {
      if (e.key === 'Escape' && dismissable) {
        e.preventDefault();
        e.stopPropagation();
        close(null);
      }
    };
    const box = h(
      'div',
      { class: `m-dialog${wide ? ' wide' : ''}`, role: 'dialog', 'aria-modal': 'true', 'aria-label': title },
      h('h2', { text: title }),
      h('div', { class: 'm-dialog-body' }, body),
      h(
        'div',
        { class: 'm-dialog-actions' },
        (buttons || [{ label: 'OK', value: true, kind: 'primary' }]).map((b) => h('button', { type: 'button', class: `m-btn ${b.kind || ''}`, onclick: () => close(b.value) }, b.label)),
      ),
    );
    const back = h('div', { class: 'm-backdrop', onclick: (e) => e.target === back && dismissable && close(null) }, box);
    document.body.append(back);
    document.addEventListener('keydown', onKey, true);
    const focusable = box.querySelector('input, textarea, select') || box.querySelector('.m-btn.primary') || box.querySelector('button');
    if (focusable) focusable.focus();
    if (onMount) onMount(close);
  });
}

export function confirmDialog(title, text, okLabel = 'OK', danger = false) {
  return dialog({
    title,
    body: h('p', { text }),
    buttons: [
      { label: 'Cancel', value: false },
      { label: okLabel, value: true, kind: danger ? 'danger' : 'primary' },
    ],
  });
}

// grow a textarea with its content
export function autosize(ta) {
  const fit = () => {
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight + 2, 600)}px`;
  };
  ta.addEventListener('input', fit);
  requestAnimationFrame(fit);
  return ta;
}

export function timeAgo(ms) {
  const s = Math.round((Date.now() - ms) / 1000);
  if (s < 60) return 'just now';
  const m = Math.round(s / 60);
  if (m < 60) return `${m} min ago`;
  const hrs = Math.round(m / 60);
  if (hrs < 48) return `${hrs} h ago`;
  return new Date(ms).toLocaleString();
}
