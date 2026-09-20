import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const staticDir = path.join(root, 'apps/frontend/.next/static');
const proofSentinel = 'elceo-m3-session-bound-browser-client-v1';

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
  ['backend origin environment name', /ELCEO_BACKEND_ORIGIN/iu],
  ['public-origin server environment name', /ELCEO_PUBLIC_APP_ORIGIN/iu],
  ['Auth.js server secret', /AUTH_SECRET/iu],
  ['internal API secret', /ELCEO_INTERNAL_API_TOKEN|ELCEO_INTERNAL_TOKEN/iu],
  ['internal token header', /x-elceo-internal-token/iu],
  ['server topology configuration', /getAuthTopologyConfig/iu],
  ['server auth relay', /proxyCanonicalAuthRequest/iu],
  ['server API relay', /proxyCanonicalBrowserApiRequest/iu],
  ['server-only session error', /CanonicalSessionUnavailableError/iu],
  ['JWT parsing authority', /decodeJwt|jwtDecode|next-auth\/jwt/iu],
  ['hard-coded Auth.js session cookie', /authjs\.session-token|next-auth\.session-token|__Secure-authjs|__Host-authjs/iu],
];

const files = await walk(staticDir);
if (!files.length) throw new Error('No Next browser bundles found; run the production Next build first.');

let proofFound = false;
for (const file of files) {
  const source = await readFile(file, 'utf8');
  if (source.includes(proofSentinel)) proofFound = true;
  for (const [label, pattern] of forbidden) {
    if (pattern.test(source)) {
      throw new Error(`M3 browser bundle leaked ${label}: ${path.relative(root, file)}`);
    }
  }
}

if (!proofFound) {
  throw new Error('The M3 same-origin session-bound client proof was not found in the production browser graph.');
}

console.log(`M3 browser session-boundary scan passed across ${files.length} bundles.`);
