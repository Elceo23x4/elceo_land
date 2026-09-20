import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { assertContent, gitBlobSha, sha256, loadManifest, openPinnedSource } from './backend-handoff-lib.mjs';
import { approvedReference, decodeReference, verifyReference } from './reference-image-lib.mjs';

test('approved PNG fully decodes; truncation, CRC damage and trailing data fail', async () => {
  const bytes = await readFile(approvedReference.path);
  assert.equal(verifyReference(bytes).pixels.length, 941 * 1672 * 4);
  assert.throws(() => decodeReference(bytes.subarray(0, -1)), /Truncated/);
  const damaged = Buffer.from(bytes); damaged[50] ^= 1;
  assert.throws(() => decodeReference(damaged), /CRC/);
  assert.throws(() => decodeReference(Buffer.concat([bytes, Buffer.from([0])])), /ending/);
});

test('local content, source size and snapshot metadata cannot substitute for pinned Git identity', () => {
  const bytes = Buffer.from('canonical\n');
  const entry = { source: 'docs/ui-handoff/test.md', destination: 'docs/backend-contract/test.md', gitBlobSha: gitBlobSha(bytes) };
  const metadata = { gitBlobSha: entry.gitBlobSha, bytes: bytes.length };
  const record = { ...entry, bytes: bytes.length, sha256: sha256(bytes) };
  assert.doesNotThrow(() => assertContent(entry, metadata, bytes, record));
  const changed = Buffer.from('tampered!\n');
  assert.throws(() => assertContent(entry, metadata, changed, { ...record, sha256: sha256(changed) }), /integrity/);
  assert.throws(() => assertContent(entry, { ...metadata, bytes: bytes.length + 1 }, bytes, record), /integrity/);
  assert.throws(() => assertContent(entry, metadata, bytes, { ...record, bytes: 1 }), /byte count/);
  assert.throws(() => assertContent(entry, metadata, bytes, { ...record, source: 'another/path' }), /provenance/);
});

test('pinned source rejects missing paths and wrong blob identities before sync writes', async () => {
  const { source, entries } = await loadManifest(process.cwd());
  await assert.rejects(() => openPinnedSource(source, entries.map((e, i) => i ? e : { ...e, source: 'missing/path' })), /exact pinned/);
  const pinned = await openPinnedSource(source, entries);
  try { assert.throws(() => pinned.read({ ...entries[0], gitBlobSha: '0'.repeat(40) }), /path\/blob/); }
  finally { await pinned.close(); }
});
