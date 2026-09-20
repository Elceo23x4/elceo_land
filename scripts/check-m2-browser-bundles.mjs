import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const staticDir = path.join(root, 'apps/frontend/.next/static');
const proofSentinel = 'elceo-m2-browser-api-client-v1';

const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(full));
    else if (entry.name.endsWith('.js')) out.push(full);
  }
  return out;
};

const forbidden = [
  ['internal token header', /x-elceo-internal-token/iu],
  ['internal credential marker', /ELCEO_INTERNAL_API_TOKEN|ELCEO_INTERNAL_TOKEN/iu],
  ['trusted operation registry', /trustedOperationRegistry/iu],
  ['trusted server API client', /createTrustedServerApiClient/iu],
  ['backend handler guard evidence', /handlerGuardEvidence/iu],
  ['backend runtime test evidence', /runtimeTestEvidence/iu],
  ['backend source provenance', /sourceProvenance/iu],
  ['backend policy inventory path', /policyInventory/iu],
  ['backend API source path', /apps\/web\/app\/api\//iu],
  ['declared backend policy audit metadata', /declaredPolicyExpectation|testCoverageStatus/iu],
];

const files = await walk(staticDir);
if (!files.length) throw new Error('No Next browser bundles found; run the production Next build first.');

let proofFound = false;
let proofChunkBytes = 0;
for (const file of files) {
  const source = await readFile(file, 'utf8');
  for (const [label, pattern] of forbidden) {
    if (pattern.test(source)) {
      throw new Error(`Browser bundle leaked ${label}: ${path.relative(root, file)}`);
    }
  }
  if (source.includes(proofSentinel)) {
    proofFound = true;
    proofChunkBytes += (await stat(file)).size;
  }
}
if (!proofFound) {
  throw new Error('The real browser API client proof was not found in the production browser graph.');
}

console.log(`M2 browser authority scan passed across ${files.length} bundles; browser-client proof chunk bytes=${proofChunkBytes}.`);
