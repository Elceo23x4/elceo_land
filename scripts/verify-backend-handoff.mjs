import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const source = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SOURCE.json'), 'utf8'));
const snapshot = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SNAPSHOT.json'), 'utf8'));

if (snapshot.sourceRepository !== source.sourceRepository) {
  throw new Error(`Snapshot repository mismatch: ${snapshot.sourceRepository} != ${source.sourceRepository}`);
}
if (snapshot.sourceCommit !== source.sourceCommit) {
  throw new Error(`Snapshot commit mismatch: ${snapshot.sourceCommit} != ${source.sourceCommit}`);
}
if (snapshot.authority !== 'read-only snapshot') {
  throw new Error(`Unexpected snapshot authority: ${snapshot.authority}`);
}

const required = [
  'docs/backend-contract/ui-page-inventory.md',
  'docs/backend-contract/frontend-integration-map.md',
  'docs/backend-contract/ui-state-matrix.md',
  'docs/backend-contract/state-ownership.md',
  'docs/backend-contract/auth-session-and-authorization.md',
  'docs/backend-contract/billing-payment-state-machine.md',
  'docs/backend-contract/notifications-ui-contract.md',
  'docs/backend-contract/validation-and-field-rules.md',
  'docs/backend-contract/contract-gaps.md',
  'contracts/backend/backend-freeze-manifest.json',
  'contracts/backend/handoff-summary.json',
  'contracts/backend/openapi.json',
  'contracts/backend/route-inventory.json',
];

const byDestination = new Map(snapshot.files.map((entry) => [entry.destination, entry]));
for (const requiredPath of required) {
  if (!byDestination.has(requiredPath)) throw new Error(`Required handoff file missing from snapshot: ${requiredPath}`);
}

for (const entry of snapshot.files) {
  const fullPath = path.join(root, entry.destination);
  const content = await readFile(fullPath);
  const actual = createHash('sha256').update(content).digest('hex');
  if (actual !== entry.sha256) {
    throw new Error(`Read-only handoff drift detected in ${entry.destination}: expected ${entry.sha256}, got ${actual}`);
  }
}

if (snapshot.fileCount !== snapshot.files.length) {
  throw new Error(`Snapshot fileCount mismatch: ${snapshot.fileCount} != ${snapshot.files.length}`);
}

console.log(`Verified ${snapshot.files.length} read-only backend handoff files at ${snapshot.sourceRepository}@${snapshot.sourceCommit}.`);
