import 'server-only';
import { getAuthTopologyConfig } from './config';
import { relayRecovery } from './recovery-core';

export async function proxyRecovery(request: Request): Promise<Response> {
  try { return await relayRecovery(request, getAuthTopologyConfig(), fetch); }
  catch { return Response.json({ error: 'recovery_unavailable' }, { status: 503, headers: { 'cache-control': 'private, no-store' } }); }
}
