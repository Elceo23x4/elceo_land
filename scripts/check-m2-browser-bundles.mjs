import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const staticRoot = path.join(process.cwd(), 'apps/frontend/.next/static');
const collect = async (directory) => {
  const nested = await Promise.all((await readdir(directory, { withFileTypes: true })).map(async (item) => {
    const file = path.join(directory, item.name);
    return item.isDirectory() ? collect(file) : item.name.endsWith('.js') ? [file] : [];
  }));
  return nested.flat();
};
const files = await collect(staticRoot);
if (!files.length) throw new Error('No candidate browser bundles found; run npm run build:next first.');
for (const file of files) {
  const content = await readFile(file, 'utf8');
  if (/x-elceo-internal-token|ELCEO_INTERNAL_API_TOKEN|trustedOperationRegistry|createTrustedServerApiClient/iu.test(content)) {
    throw new Error(`Trusted backend authority leaked into browser bundle: ${path.relative(process.cwd(), file)}`);
  }
}
console.log(`Verified ${files.length} candidate browser bundle(s): no internal token or trusted-server client implementation.`);
