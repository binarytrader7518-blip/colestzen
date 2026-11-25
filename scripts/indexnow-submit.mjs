// IndexNow submitter for en-colestzen.vercel.app
// Usage (after each deployment):  node scripts/indexnow-submit.mjs          -> submits new/changed sitemap URLs
//                                 node scripts/indexnow-submit.mjs --all    -> submits every sitemap URL
// Reads the LIVE sitemap, hashes each page, and only notifies IndexNow about URLs whose content changed
// since the last run (state kept in scripts/.indexnow-state.json). Deleted URLs are submitted too.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const HOST = 'en-colestzen.vercel.app';
const ORIGIN = `https://${HOST}`;
const KEY = '22d8d32493a94ca55aea63f50e6b2eee';
const KEY_LOCATION = `${ORIGIN}/key.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const STATE = new URL('./.indexnow-state.json', import.meta.url);
const all = process.argv.includes('--all');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function fetchText(url) { const r = await fetch(url, { redirect: 'manual' }); return { status: r.status, text: r.status === 200 ? await r.text() : '' }; }

const key = await fetchText(KEY_LOCATION);
if (key.status !== 200 || key.text.trim() !== KEY) { console.error(`Key file check failed (${key.status}). Deploy key.txt first.`); process.exit(1); }

const sm = await fetchText(`${ORIGIN}/sitemap.xml`);
const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(ORIGIN));
let state = {}; try { state = JSON.parse(await readFile(STATE, 'utf8')); } catch {}
const next = {}, changed = [];
for (const u of urls) {
  const { status, text } = await fetchText(u);
  if (status !== 200) { console.warn(`skip ${u} (HTTP ${status})`); continue; }
  const h = createHash('sha256').update(text).digest('hex');
  next[u] = h; if (all || state[u] !== h) changed.push(u);
}
for (const u of Object.keys(state)) if (!(u in next)) changed.push(u); // removed pages
if (!changed.length) { console.log('No changed URLs. Nothing submitted.'); process.exit(0); }

for (let i = 0; i < changed.length; i += 10000) {
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: changed.slice(i, i + 10000) });
  for (let attempt = 1; attempt <= 3; attempt++) {
    const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body });
    console.log(`IndexNow HTTP ${r.status} for ${changed.length} URL(s) (attempt ${attempt})`);
    if (r.status === 200 || r.status === 202) break;           // accepted (not the same as indexed)
    if ([400, 403, 422].includes(r.status)) { console.error(await r.text()); process.exit(1); } // fix request, don't retry
    await sleep(2000 * attempt);                                  // 429 / 5xx: back off and retry
  }
}
await writeFile(STATE, JSON.stringify(next, null, 1));
