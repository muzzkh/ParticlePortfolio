// The GitHub token, kept on this device encrypted with the editor password.
//
// The password never leaves the browser and is never stored. It is stretched with
// PBKDF2 (310,000 rounds of SHA-256) into an AES-GCM key, which encrypts the token in
// localStorage. Signing in decrypts it into memory only; locking forgets it.

const KEY = 'arrakis.manage.vault';
const ROUNDS = 310000;
const enc = new TextEncoder();
const dec = new TextDecoder();

const b64 = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function keyFrom(password, salt) {
  const base = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ROUNDS }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

export function vaultInfo() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY));
    return v && v.ct ? { repo: v.repo, savedAt: v.savedAt } : null;
  } catch {
    return null;
  }
}

export async function saveToken(token, password, repo) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await keyFrom(password, salt);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(token));
  localStorage.setItem(KEY, JSON.stringify({ v: 1, salt: b64(salt), iv: b64(iv), ct: b64(ct), repo, savedAt: Date.now() }));
}

// the token, or null when the password is wrong
export async function openVault(password) {
  const v = JSON.parse(localStorage.getItem(KEY));
  const key = await keyFrom(password, unb64(v.salt));
  try {
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(v.iv) }, key, unb64(v.ct));
    return dec.decode(pt);
  } catch {
    return null;
  }
}

export function forgetVault() {
  localStorage.removeItem(KEY);
}
