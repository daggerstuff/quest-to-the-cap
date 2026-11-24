// Offline art direction tool. Run with Node 24 and BFL_API_KEY, outside dist/.
// Produces a review candidate, never overwrites a shipped asset.
import { writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';

const key = process.env.BFL_API_KEY;
if (!key) throw new Error('Set BFL_API_KEY before starting a paid generation.');
const headers = { 'x-key': key, 'Content-Type': 'application/json' };
const request = async (url, options) => {
  const res = await fetch(url, { signal: AbortSignal.timeout(30000), redirect: 'error', ...options });
  if (!res.ok) throw new Error(`Image service returned HTTP ${res.status}`);
  return res;
};
const job = await (await request('https://api.bfl.ai/v1/flux-2-pro-preview', {
  method: 'POST', headers, body: JSON.stringify({
    width: 864, height: 1536, output_format: 'png',
    prompt: 'Portrait pixel RPG wallpaper. Almost empty plum night sky fills the upper half for a device clock. The lower half shows a terraced campus hill, a violet library with a lit arched window and an amber footpath. Crisp pixel clusters, indigo shadows and gold highlights. No characters, text, frame, widgets or UI.'
  })
})).json();
const poll = new URL(job.polling_url);
if (poll.protocol !== 'https:' || !/(^|\.)bfl\.ai$/.test(poll.hostname)) throw new Error('Unexpected polling host');
const deadline = Date.now() + 300000;
while (true) {
  if (Date.now() > deadline) throw new Error(`Polling timed out for ${job.id}; do not resubmit automatically`);
  await delay(1500);
  const result = await (await request(poll, { headers })).json();
  if (result.status === 'Pending' || result.status === 'Processing') continue;
  if (result.status !== 'Ready') throw new Error(`Generation ended: ${result.status}`);
  const image = await request(result.result.sample, {});
  const bytes = Buffer.from(await image.arrayBuffer());
  if (!bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a','hex'))) throw new Error('Expected a PNG candidate');
  const path = `campus-night-${Date.now()}.png`;
  await writeFile(path, bytes, { flag: 'wx' });
  console.log(`Review ${path} before converting to WebP. Job: ${job.id}`);
  break;
}
