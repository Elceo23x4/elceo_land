import { createHash } from 'node:crypto';
import { inflateSync } from 'node:zlib';

export const approvedReference = Object.freeze({
  path: 'docs/design/references/approved-landing-reference.png',
  bytes: 2888188, width: 941, height: 1672,
  sha256: 'a8a689790431cd2d3d4423383a45122e3b5a10abaae43bd6b8815396bd8db4d6',
});
const crcTable = Array.from({ length: 256 }, (_, n) => {
  for (let k = 0; k < 8; k++) n = n & 1 ? 0xedb88320 ^ (n >>> 1) : n >>> 1;
  return n >>> 0;
});
function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}
function paeth(a, b, c) {
  const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}
// Deliberately restricted to the approved original's non-interlaced RGBA8 encoding.
// Validate all chunks/CRCs and decode every pixel scanline, not just the PNG header.
export function decodeReference(bytes) {
  if (!bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) throw new Error('Invalid PNG signature.');
  let offset = 8, width, height, ended = false, seenData = false, dataEnded = false;
  const data = [];
  while (offset < bytes.length) {
    if (offset + 12 > bytes.length) throw new Error('Truncated PNG chunk.');
    const length = bytes.readUInt32BE(offset), end = offset + 12 + length;
    if (end > bytes.length) throw new Error('Truncated PNG payload.');
    const type = bytes.toString('ascii', offset + 4, offset + 8);
    const body = bytes.subarray(offset + 8, end - 4);
    if (crc32(bytes.subarray(offset + 4, end - 4)) !== bytes.readUInt32BE(end - 4)) throw new Error(`PNG CRC failure: ${type}`);
    if (offset === 8 && type !== 'IHDR') throw new Error('Missing initial IHDR.');
    if (seenData && type !== 'IDAT') dataEnded = true;
    if (type === 'IHDR') {
      if (width !== undefined || length !== 13) throw new Error('Invalid IHDR.');
      width = body.readUInt32BE(0); height = body.readUInt32BE(4);
      if (width !== approvedReference.width || height !== approvedReference.height
          || !body.subarray(8).equals(Buffer.from([8, 6, 0, 0, 0]))) throw new Error('Unexpected reference dimensions/encoding.');
    } else if (type === 'IDAT') {
      if (dataEnded) throw new Error('Non-contiguous IDAT chunks.');
      seenData = true; data.push(body);
    } else if (type === 'IEND') {
      if (length !== 0 || !seenData || end !== bytes.length) throw new Error('Invalid PNG ending.');
      ended = true;
    } else if (type !== 'PLTE' && (bytes[offset + 4] & 32) === 0) throw new Error(`Unknown critical PNG chunk: ${type}`);
    offset = end;
  }
  if (!ended) throw new Error('Missing IEND.');
  const stride = width * 4, expected = (stride + 1) * height;
  const inflated = inflateSync(Buffer.concat(data), { maxOutputLength: expected });
  if (inflated.length !== expected) throw new Error('Incomplete PNG scanlines.');
  const pixels = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    const filter = inflated[y * (stride + 1)];
    if (filter > 4) throw new Error('Invalid PNG scanline filter.');
    for (let x = 0; x < stride; x++) {
      const i = y * stride + x;
      const a = x >= 4 ? pixels[i - 4] : 0, b = y ? pixels[i - stride] : 0, c = y && x >= 4 ? pixels[i - stride - 4] : 0;
      const predictor = [0, a, b, Math.floor((a + b) / 2), paeth(a, b, c)][filter];
      pixels[i] = (inflated[y * (stride + 1) + 1 + x] + predictor) & 255;
    }
  }
  return { width, height, pixels };
}
export function verifyReference(bytes) {
  const decoded = decodeReference(bytes);
  if (bytes.length !== approvedReference.bytes || createHash('sha256').update(bytes).digest('hex') !== approvedReference.sha256) {
    throw new Error('Approved original PNG byte identity changed.');
  }
  return decoded;
}
