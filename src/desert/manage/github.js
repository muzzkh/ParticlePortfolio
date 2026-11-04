// The few GitHub REST calls the editor needs: check access, read site.json, and publish
// any number of files as one commit on the branch (which the site's workflow deploys).

const API = 'https://api.github.com';

export class GitHubError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const path = (p) => p.split('/').map(encodeURIComponent).join('/');

function fromBase64Utf8(b64) {
  const bin = atob(b64.replace(/\n/g, ''));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

export class GitHub {
  constructor(token, { owner, repo, branch }) {
    this.token = token;
    this.owner = owner;
    this.repo = repo;
    this.branch = branch;
    this.base = `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
  }

  async req(method, url, body) {
    let res;
    try {
      res = await fetch(API + url, {
        method,
        headers: {
          Authorization: `Bearer ${this.token}`,
          // (no X-GitHub-Api-Version header: optional, and not worth a CORS surprise)
          Accept: 'application/vnd.github+json',
          ...(body ? { 'Content-Type': 'application/json' } : {}),
        },
        body: body ? JSON.stringify(body) : undefined,
        cache: 'no-store',
      });
    } catch {
      throw new GitHubError(0, 'Could not reach GitHub. Check your connection and try again.');
    }
    if (res.ok) return res.status === 204 ? null : res.json();
    let msg = '';
    try {
      msg = (await res.json()).message || '';
    } catch {
      /* no body */
    }
    const plain = {
      401: 'GitHub didn’t accept the token. It may have expired or been revoked.',
      403: 'The token isn’t allowed to do that. It needs “Contents: Read and write” on this repository.',
      404: 'GitHub couldn’t find the repository or file. Check that the token can access this repository.',
      409: 'The branch changed while publishing. Try again.',
      422: 'GitHub rejected the change.',
    }[res.status];
    throw new GitHubError(res.status, plain ? `${plain}${msg ? ` (${msg})` : ''}` : `GitHub error ${res.status}${msg ? `: ${msg}` : ''}`);
  }

  // throws unless the token can read the repository
  async check() {
    const info = await this.req('GET', this.base);
    return { fullName: info.full_name, canPush: info.permissions ? !!info.permissions.push : null, htmlUrl: info.html_url };
  }

  // { text, sha } of a text file on the branch (or at a commit)
  async readText(p, ref = this.branch) {
    const f = await this.req('GET', `${this.base}/contents/${path(p)}?ref=${encodeURIComponent(ref)}`);
    if (f.content === undefined || (f.encoding && f.encoding !== 'base64') || (!f.content && f.size > 0)) {
      // files over 1 MB come without content: fetch the blob instead
      const blob = await this.req('GET', `${this.base}/git/blobs/${f.sha}`);
      return { text: fromBase64Utf8(blob.content || ''), sha: f.sha };
    }
    return { text: fromBase64Utf8(f.content || ''), sha: f.sha };
  }

  // the last commits that touched a file: [{ sha, message, date, author, url }]
  async history(p, count = 15) {
    const list = await this.req('GET', `${this.base}/commits?sha=${encodeURIComponent(this.branch)}&path=${encodeURIComponent(p)}&per_page=${count}`);
    return list.map((c) => ({
      sha: c.sha,
      message: (c.commit && c.commit.message) || '',
      date: Date.parse((c.commit && (c.commit.committer || c.commit.author) || {}).date || '') || 0,
      author: (c.author && c.author.login) || (c.commit && c.commit.author && c.commit.author.name) || '',
      url: c.html_url,
    }));
  }

  // blob sha of a file at the branch head (null if it doesn't exist)
  async shaOf(p) {
    try {
      const f = await this.req('GET', `${this.base}/contents/${path(p)}?ref=${encodeURIComponent(this.branch)}`);
      return f.sha;
    } catch (err) {
      if (err.status === 404) return null;
      throw err;
    }
  }

  // files: [{ path, text } | { path, base64 }]; progress(stepText)
  async commit(files, message, progress = () => {}) {
    progress('Reading the branch…');
    const ref = await this.req('GET', `${this.base}/git/ref/heads/${encodeURIComponent(this.branch)}`);
    const parent = ref.object.sha;
    const parentCommit = await this.req('GET', `${this.base}/git/commits/${parent}`);
    const tree = [];
    let i = 0;
    for (const f of files) {
      i++;
      progress(`Uploading ${i} of ${files.length}: ${f.path.split('/').pop()}`);
      const blob = await this.req('POST', `${this.base}/git/blobs`, f.text !== undefined ? { content: f.text, encoding: 'utf-8' } : { content: f.base64, encoding: 'base64' });
      tree.push({ path: f.path, mode: '100644', type: 'blob', sha: blob.sha });
    }
    progress('Creating the commit…');
    const newTree = await this.req('POST', `${this.base}/git/trees`, { base_tree: parentCommit.tree.sha, tree });
    const commit = await this.req('POST', `${this.base}/git/commits`, { message, tree: newTree.sha, parents: [parent] });
    progress('Updating the branch…');
    await this.req('PATCH', `${this.base}/git/refs/heads/${encodeURIComponent(this.branch)}`, { sha: commit.sha, force: false });
    return { sha: commit.sha, url: commit.html_url || `https://github.com/${this.owner}/${this.repo}/commit/${commit.sha}` };
  }
}
