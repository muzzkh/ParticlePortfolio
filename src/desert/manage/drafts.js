// Unpublished work, saved in this browser (IndexedDB) so closing the tab loses nothing.
// Holds the working site.json and the binary files added since the last publish.

const DB = 'arrakis-manage';
const STORE = 'drafts';

function open() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function run(mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const req = fn(tx.objectStore(STORE));
    tx.oncomplete = () => resolve(req && req.result);
    tx.onerror = () => reject(tx.error);
  });
}

export async function saveDraft(draft) {
  try {
    await run('readwrite', (s) => s.put({ ...draft, savedAt: Date.now() }, 'current'));
    return true;
  } catch {
    return false;
  }
}

export async function loadDraft() {
  try {
    return (await run('readonly', (s) => s.get('current'))) || null;
  } catch {
    return null;
  }
}

export async function clearDraft() {
  try {
    await run('readwrite', (s) => s.delete('current'));
  } catch {
    /* nothing saved */
  }
}
