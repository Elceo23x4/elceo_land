// Controlled browser-test service only. Never imported by application code.
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
const workspaceFixture=JSON.parse(readFileSync(new URL('../contracts/backend/mocks/workspace-current.json',import.meta.url),'utf8'));
const session = {
  user: { id: 'm4-parity-user', email: 'm4-parity@example.test', name: 'M4 Parity User', role: 'user', planTier: 'free', onboardingCompletedAt: null },
  expires: '2026-09-27T00:00:00.000Z',
};
let lastSignIn = null;
const server = createServer(async (request, response) => {
  const json = (status, value, headers = {}) => { response.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers }); response.end(JSON.stringify(value)); };
  if (request.url === '/health') return json(200, { ok: true });
  if (request.url === '/__m5/last-signin') return json(200, lastSignIn);
  if (request.url?.startsWith('/api/auth/session')) {
    const state = /(?:^|; )m5-test-state=([^;]+)/.exec(request.headers.cookie ?? '')?.[1];
    if (state === 'unavailable') return json(503, { error: 'controlled_dependency_failure' });
    if (state === 'empty-body') { response.writeHead(200, { 'content-type': 'application/json' }); response.end(); return; }
    if (state === 'malformed') return json(200, { user: { id: 'incomplete' } });
    if (state === 'network') { request.socket.destroy(); return; }
    if (state === 'body-failure') {
      response.writeHead(200, { 'content-type': 'application/json', 'content-length': 1024 });
      response.write('{'); setTimeout(() => response.destroy(), 20); return;
    }
    return json(200, state === 'signed-out' ? null : session);
  }
  if (request.url?.startsWith('/api/auth/password-reset/') && request.method === 'POST') {
    let body = ''; for await (const chunk of request) body += chunk;
    const fields = JSON.parse(body);
    if (request.url.endsWith('/request')) return json(202, {accepted:true});
    return fields.token === 'controlled-valid' ? json(200,{reset:true}) : json(400,{error:'invalid_or_expired_token'});
  }
  for(const family of ['analytics','coaching']) {
    if(request.url===`/api/${family}/latest`||request.url===`/api/${family}/generate`) {
      const fixture=JSON.parse(readFileSync(new URL(`../contracts/backend/mocks/${family}-latest.json`,import.meta.url),'utf8'));
      const scenario=/(?:^|; )m5-review=([^;]+)/.exec(request.headers.cookie??'')?.[1];
      if(scenario==='forbidden')return json(403,{ok:false,error:{code:'forbidden',message:'Fixture access denied'}});
      if(scenario==='empty')return json(200,{ok:true,data:{snapshot:null}});
      if(scenario==='malformed')return json(200,{ok:true,data:{snapshot:{}}});
      return json(200,fixture);
    }
  }
  if (request.url?.startsWith('/api/workspace/')) {
    const scenario=/(?:^|; )m5-workspace=([^;]+)/.exec(request.headers.cookie??'')?.[1];
    if(scenario==='forbidden')return json(403,{ok:false,error:{code:'forbidden',message:'Fixture access denied'}});
    if(scenario==='unavailable')return json(503,{ok:false,error:{code:'dependency_failed',message:'Fixture dependency unavailable'}});
    if(scenario==='malformed')return json(200,{ok:true,data:{snapshot:{}}});
    if(request.url==='/api/workspace/current')return json(200,scenario==='empty'?{ok:true,data:{snapshot:null}}:workspaceFixture);
    if(request.url==='/api/workspace/agenda')return json(200,{ok:true,data:{agenda:workspaceFixture.data.snapshot.summary.agenda}});
    if(request.url==='/api/workspace/history')return json(200,{ok:true,data:{snapshots:[workspaceFixture.data.snapshot],limit:25}});
    if(request.url==='/api/workspace/freshness')return json(200,{ok:true,data:{freshnessRecords:[],attentionSummary:null,domainsNeedingRefresh:[]}});
    if(request.url==='/api/workspace/refresh'&&request.method==='POST')return json(200,{ok:true,data:{report:{refreshRunId:'controlled-refresh',overallStatus:'partial_success'}}});
  }
  if (request.url === '/api/auth/providers') return json(200, { google: { id: 'google', name: 'Google', type: 'oidc' } });
  if (request.url === '/api/auth/csrf') return json(200, { csrfToken: 'm5-controlled-csrf' }, { 'set-cookie': 'm5-controlled-challenge=present; HttpOnly; Path=/; SameSite=Lax' });
  if (request.url === '/api/auth/signout' && request.method === 'POST') {
    let body='';for await(const chunk of request)body+=chunk;
    const fields=new URLSearchParams(body);
    if(fields.get('csrfToken')!=='m5-controlled-csrf'||!request.headers.cookie?.includes('m5-controlled-challenge=present'))return json(403,{error:'fixture_csrf_failed'});
    response.writeHead(303,{location:'/login?m5=controlled-signout','cache-control':'no-store'});response.end();return;
  }
  if (request.url === '/api/auth/signin/google' && request.method === 'POST') {
    let body = ''; for await (const chunk of request) body += chunk;
    const fields = new URLSearchParams(body);
    const challenge = request.headers.cookie?.includes('m5-controlled-challenge=present');
    if (!challenge || fields.get('csrfToken') !== 'm5-controlled-csrf') return json(403, { error: 'fixture_csrf_failed' });
    lastSignIn = { callbackUrl: fields.get('callbackUrl'), csrfVerified: true, origin: request.headers.origin };
    // Proves relay navigation only; no Google interaction or session is minted.
    response.writeHead(303, { location: '/m1-proof?m5=controlled-signin', 'cache-control': 'no-store' }); response.end(); return;
  }
  return json(404, { error: 'm5_mock_route_not_found' });
});
server.listen(4010, '127.0.0.1');
const shutdown = () => server.close(() => process.exit(0));
process.on('SIGTERM', shutdown); process.on('SIGINT', shutdown);
