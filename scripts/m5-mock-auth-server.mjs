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
  if(request.url==='/api/account/billing'){
    if(request.headers.cookie?.includes('m5-billing=malformed'))return json(200,{ok:true,data:{snapshot:{}}});
    return json(200,JSON.parse(readFileSync(new URL('../contracts/backend/mocks/account-billing.json',import.meta.url),'utf8')));
  }
  if(request.url==='/api/account/entitlements')return json(200,JSON.parse(readFileSync(new URL('../contracts/backend/mocks/account-entitlements.json',import.meta.url),'utf8')));
  if(request.url==='/api/account/usage')return json(200,{ok:true,data:{usage:[]}});
  if(request.url==='/api/account/access-decisions')return json(200,{ok:true,data:{decisions:[]}});
  if(request.url==='/api/billing/intention')return json(200,{intention:{operationId:'controlled-payment',paymentState:'unknown',subscriptionState:null,commercialAccessActive:false,checkoutContinuationAvailable:false,checkoutUrl:null,reconciliationRequired:true,newIntentionAllowed:false,billingManagementRequired:false}});
  if(request.url==='/api/billing/portal'&&request.method==='POST')return json(200,{portalUrl:'https://billing.example.test/controlled-session'});
  if(['/api/account/state','/api/account/preferences','/api/account/watchlist'].includes(request.url)) {
    const account={profile:{motionIntensity:'medium'},watchlist:{assets:['XAU/USD']},notifications:{inApp:true,email:false,browserPush:false,biasChanges:true,contradictionSpikes:false,keyLevelInteractions:true,macroEventWarnings:false,postEventRegimeShift:true,journalCoaching:false}};
    if(request.method==='PATCH'){
      let body='';for await(const chunk of request)body+=chunk;const input=JSON.parse(body);
      if(!request.headers['idempotency-key'])return json(400,{ok:false,error:{code:'validation_error',message:'Controlled missing key'}});
      if(request.url==='/api/account/watchlist')account.watchlist.assets=input.assets;
      else {account.profile.motionIntensity=input.motionIntensity;account.notifications={...input.notifications,...input.notificationClasses};}
    }
    return json(200,{ok:true,data:account});
  }
  if(request.url==='/api/journal/analytics'||request.url?.startsWith('/api/journal/influence/')){
    const scenario=/(?:^|; )m5-journal-analysis=([^;]+)/.exec(request.headers.cookie??'')?.[1];
    if(scenario==='forbidden')return json(403,{ok:false,error:{code:'forbidden',message:'Controlled forbidden'}});
    if(scenario==='unavailable')return json(503,{ok:false,error:{code:'dependency_failed',message:'Controlled unavailable'}});
    const analytics=request.url==='/api/journal/analytics';
    const fixture=JSON.parse(readFileSync(new URL(`../apps/frontend/tests/journal/fixtures/${analytics?'analytics':'influence'}.json`,import.meta.url),'utf8'));
    if(request.method==='POST'&&!request.headers['idempotency-key'])return json(400,{ok:false,error:{code:'validation_error',message:'Controlled missing key'}});
    if(analytics){if(scenario==='empty'){fixture.performance.totalTrades=0;fixture.performance.bestMonth=null;}return json(200,scenario==='malformed'?{}:fixture);}
    return json(200,{ok:true,data:{snapshot:scenario==='empty'?null:scenario==='malformed'?{}:fixture}});
  }
  if(request.url?.startsWith('/api/journal/cases')) {
    const fixture=JSON.parse(readFileSync(new URL('../contracts/backend/mocks/journal-cases-list.json',import.meta.url),'utf8'));
    const scenario=/(?:^|; )m5-journal=([^;]+)/.exec(request.headers.cookie??'')?.[1];
    const item=fixture.data.cases[0];
    const status=/(?:^|; )m5-case-status=([^;]+)/.exec(request.headers.cookie??'')?.[1];
    if(status){item.status=status;if(['executed','partially_closed','closed','reviewed'].includes(status))item.execution.openedAt='2026-09-30T10:00:00Z';if(['closed','reviewed'].includes(status)){item.closure.closedAt='2026-09-30T12:00:00Z';item.closure.outcome='loss';}if(status==='reviewed')item.review.reviewedAt='2026-09-30T14:00:00Z';}
    if(request.url==='/api/journal/cases/jcase-demo-001/replay')return json(200,{ok:true,data:{replay:{caseData:item,caseRecord:{private:'not-for-browser'},revisions:[{revisionId:'controlled-revision',caseId:item.identity.caseId,revisionType:'planned',previousStatus:'draft',nextStatus:'planned',changedAt:'2026-09-30T10:00:00Z',summary:'Plan recorded for review.',changedById:'private-actor',snapshotJson:'private-snapshot'}]}}});
    const action=/^\/api\/journal\/cases\/jcase-demo-001\/(plan|execute|adjust|partial-close|close|cancel|review)$/.exec(request.url??'')?.[1];
    if(action&&request.method==='POST'){
      let body='';for await(const chunk of request)body+=chunk;const input=JSON.parse(body);
      if(!request.headers['idempotency-key'])return json(400,{ok:false,error:{code:'validation_error',message:'Controlled missing key'}});
      if((action==='execute'&&!input.openedAt)||(action==='close'&&(!input.closedAt||!input.outcome||input.outcome==='open'))||(action==='review'&&!input.reviewedAt))return json(400,{ok:false,error:{code:'validation_error',message:'Controlled invalid lifecycle'}});
      const copy=(target,keys)=>{for(const key of keys)if(input[key]!==undefined)target[key]=input[key];};
      if(action==='plan'){copy(item.identity,['title']);copy(item.plan,['direction','thesis','setupType','conviction','entryPricePlanned','stopLossPlanned','takeProfitPlanned','riskAmountPlanned','riskPercentPlanned','invalidationNote','executionChecklist']);}
      if(action==='execute'||action==='adjust'){copy(item.execution,['openedAt','entryPriceExecuted','positionSize','notes','executionQuality','lastAdjustedAt']);if(action==='adjust')copy(item.plan,['stopLossPlanned','takeProfitPlanned']);}
      if(['partial-close','close','cancel'].includes(action))copy(item.closure,['exitPrice','closedAt','pnlAmount','pnlPercent','rMultiple','closureReason','outcome']);
      if(action==='review')copy(item.review,['reviewedAt','whatWentWell','whatWentWrong','lessons','behaviorTags','followUpActions']);
      item.status=({plan:'planned',execute:'executed',adjust:item.status,'partial-close':'partially_closed',close:'closed',cancel:'canceled',review:'reviewed'})[action];
      return json(200,{ok:true,data:{case:item}});
    }
    if(request.method==='POST'){
      let body='';for await(const chunk of request)body+=chunk;const input=JSON.parse(body);
      if(!request.headers['idempotency-key']||!input.asset||!input.title||!input.timeframe)return json(400,{ok:false,error:{code:'validation_error',message:'Controlled invalid draft'}});
      const item=fixture.data.cases[0];item.identity.title=input.title;item.status='draft';return json(200,{ok:true,data:{case:item}});
    }
    if(request.url==='/api/journal/cases')return json(200,scenario==='empty'?{ok:true,data:{cases:[]}}:scenario==='malformed'?{ok:true,data:{cases:[{}]}}:fixture);
    if(request.url==='/api/journal/cases/jcase-demo-001')return json(200,{ok:true,data:{case:fixture.data.cases[0]}});
    return json(404,{ok:false,error:{code:'not_found',message:'Controlled missing case'}});
  }
  if(request.url?.startsWith('/api/notifications/')) {
    const scenario=/(?:^|; )m5-notifications=([^;]+)/.exec(request.headers.cookie??'')?.[1];
    if(scenario==='unavailable')return json(503,{ok:false,error:{code:'dependency_failed',message:'Controlled unavailable'}});
    if(request.url==='/api/notifications/summary'){
      if(scenario==='summary-forbidden')return json(403,{ok:false,error:{code:'forbidden',message:'Controlled summary entitlement'}});
      return json(200,JSON.parse(readFileSync(new URL('../contracts/backend/mocks/notifications-summary.json',import.meta.url),'utf8')));
    }
    if(request.url.startsWith('/api/notifications/inbox')){
      const item={inboxId:'controlled-inbox',targetId:'private-target',decisionId:'controlled-decision',decisionKey:'controlled-key',asset:'EURUSD',timeframe:'H4',ruleKey:'evidence_refresh',headline:'Context updated for your tracked market',body:'Review the latest recorded context before your next decision.',createdAt:'2026-09-30T10:00:00Z',readAt:null,archivedAt:null,payloadJson:'private-payload'};
      if(scenario==='malformed')return json(200,{ok:true,data:{inbox:[{headline:'incomplete'}]}});
      const limit=Number(new URL(request.url,'http://fixture').searchParams.get('limit'));
      return json(200,{ok:true,data:{inbox:scenario==='empty'?[]:scenario==='window'?Array.from({length:limit},(_,i)=>({...item,inboxId:`controlled-${i}`})):[item]}});
    }
  }
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
