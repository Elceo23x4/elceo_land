import { readFile } from 'node:fs/promises';
import { approvedReference, verifyReference } from './reference-image-lib.mjs';
const decoded = verifyReference(await readFile(approvedReference.path));
console.log(`Approved original PNG verified: ${decoded.width}x${decoded.height}, ${approvedReference.bytes} bytes; exact SHA-256, all chunk CRCs and complete pixel decode passed.`);
