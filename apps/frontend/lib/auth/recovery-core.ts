import { normalizeHttpOrigin, verifySameOriginBrowserMutation, type AuthTopologyConfig } from './core.ts';

const paths = new Set(['/api/auth/password-reset/request', '/api/auth/password-reset/confirm']);
const problem = (status: number) => Response.json({ error: 'recovery_unavailable' }, {
  status, headers: { 'cache-control': 'private, no-store' },
});

// Endpoint-local resilience ceiling, not a backend DTO constraint. The pinned
// handlers return fixed JSON literals of at most 36 UTF-8 bytes. 4 KiB allows
// ample serialization headroom without buffering an unbounded upstream body.
const recoveryResponseBytes = 4096;
async function readRecoveryPayload(response: Response): Promise<unknown> {
  const reader = response.body?.getReader();
  if (!reader) throw new Error('Missing recovery response');
  const chunks: Uint8Array[] = []; let bytes = 0;
  try {
    const declared = response.headers.get('content-length');
    if (declared && /^\d+$/.test(declared) && Number(declared) > recoveryResponseBytes) {
      await reader.cancel(); throw new Error('Recovery response exceeded local bound');
    }
    for (;;) {
      const {value, done} = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > recoveryResponseBytes) {
        await reader.cancel(); throw new Error('Recovery response exceeded local bound');
      }
      chunks.push(value);
    }
    const body = new Uint8Array(bytes); let offset = 0;
    for (const chunk of chunks) {body.set(chunk, offset);offset += chunk.byteLength;}
    return JSON.parse(new TextDecoder('utf-8', {fatal:true}).decode(body));
  } finally {reader.releaseLock();}
}

/** Exact frozen recovery operations only. No cookie/session or privileged header forwarding. */
export async function relayRecovery(request: Request, config: AuthTopologyConfig, transport: typeof fetch): Promise<Response> {
  const url = new URL(request.url);
  if (request.method !== 'POST' || !paths.has(url.pathname) || url.search) return problem(404);
  if (!verifySameOriginBrowserMutation(request, normalizeHttpOrigin(config.publicOrigin, 'public origin')).allowed) return problem(403);
  if (request.headers.has('authorization') || request.headers.has('x-elceo-internal-token')) return problem(400);
  if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') return problem(415);
  const key = request.headers.get('idempotency-key');
  if (!key?.trim()) return problem(400);
  // Enforce the pinned authentication body limit while streaming, before buffering.
  const reader = request.body?.getReader();
  if (!reader) return problem(400);
  const chunks: Uint8Array[] = []; let bytes = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 8192) { await reader.cancel(); return problem(413); }
      chunks.push(value);
    }
    const body = new Uint8Array(bytes); let offset = 0;
    for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
    const target = new URL(url.pathname, normalizeHttpOrigin(config.backendOrigin, 'backend origin'));
    const response = await transport(target, {
      method: 'POST', body, cache: 'no-store', redirect: 'manual', signal: request.signal,
      headers: { 'content-type': 'application/json', accept: 'application/json', 'idempotency-key': key },
    });
    // Recovery has dedicated JSON responses; never forward redirects, cookies or raw errors.
    let payload: unknown;
    try { payload = await readRecoveryPayload(response); } catch { return problem(502); }
    const record = payload !== null && typeof payload === 'object' ? payload as Record<string, unknown> : {};
    const headers = { 'cache-control': 'private, no-store' };
    if (url.pathname.endsWith('/request') && response.status === 202 && record.accepted === true)
      return Response.json({ accepted: true }, { status: 202, headers });
    if (url.pathname.endsWith('/confirm') && response.status === 200 && record.reset === true)
      return Response.json({ reset: true }, { headers });
    if (url.pathname.endsWith('/confirm') && response.status === 400 && ['invalid_or_expired_token','password_policy_rejected'].includes(String(record.error)))
      return Response.json({ error: record.error }, { status: 400, headers });
    return problem(response.status === 429 ? 429 : 502);
  } catch { return problem(503); }
  finally { reader.releaseLock(); }
}
