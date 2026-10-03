// Controlled presentation service, never application runtime or live persistence evidence.
import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(new URL(p,import.meta.url),'utf8'));
export async function portfolioFixture(request,json){
 const url=new URL(request.url,'http://controlled'),path=url.pathname;
 if(!path.startsWith('/api/portfolio/'))return false;
 const scenario=/(?:^|; )m5-portfolio=([^;]+)/.exec(request.headers.cookie??'')?.[1];
 if(scenario==='forbidden'){json(403,{ok:false,error:{code:'forbidden',message:'Controlled entitlement denied'}});return true;}
 if(scenario==='unavailable'){json(503,{ok:false,error:{code:'dependency_failed',message:'Controlled unavailable'}});return true;}
 if(scenario==='malformed'){json(200,{ok:true,data:{}});return true;}
 const entries=read('../contracts/backend/mocks/portfolio-watchlist.json').data.entries;
 const position=read('../apps/frontend/tests/portfolio/position.fixture.json'),action=read('../apps/frontend/tests/portfolio/action.fixture.json');
 const snapshot={snapshotId:'portfolio-snapshot-controlled',subjectKind:'user',subjectId:'private-portfolio-subject',generatedAt:'2026-09-30T10:00:00Z',createdAt:'2026-09-30T10:00:00Z',activeWatchlistCount:2,activePositionCount:1,weakeningThesisCount:1,invalidatedThesisCount:0,openActionCount:1,criticalActionCount:0,watchlistEntries:entries,positions:[position],actionQueue:[action]};
 if(path==='/api/portfolio/attention')throw new Error('Passive attention must not be invoked: frozen GET can generate.');
 const match=/^\/api\/portfolio\/(watchlist|positions|actions)(?:\/([^/]+)(?:\/(archive|status|thesis-health|open|reduce|close|cancel|complete|dismiss))?)?$/.exec(path);
 if(path==='/api/portfolio/snapshot/current'){json(200,{ok:true,data:{snapshot:scenario==='empty'?null:snapshot}});return true;}
 if(path==='/api/portfolio/snapshot/generate'){if(!request.headers['idempotency-key'])json(400,{ok:false,error:{code:'validation_error',message:'Missing key'}});else json(200,{ok:true,data:{snapshot}});return true;}
 if(!match){json(404,{ok:false,error:{code:'not_found',message:'Unknown controlled route'}});return true;}
 const [,family,id,operation]=match,kind=family==='watchlist'?'entry':family==='positions'?'position':'action',idKey=kind==='entry'?'entryId':kind==='position'?'positionId':'actionId';
 let item=kind==='entry'?entries.find(v=>v.entryId===id)??entries[0]:kind==='position'?position:action;
 if(id&&!['watch-demo-001','watch-demo-002','watch-created','position-demo-001','position-created','action-demo-001','action-created'].includes(id)){json(404,{ok:false,error:{code:'not_found',message:'Unknown controlled record'}});return true;}
 if(id)item[idKey]=id;
 if(kind==='position'&&(scenario==='proposed'||id==='position-created')){item.status='proposed';item.openedAt=null;}
 if(request.method==='GET'){
  if(!request.headers['idempotency-key']){json(400,{ok:false,error:{code:'validation_error',message:'Missing declared read key'}});return true;}
  if(!id){json(200,{ok:true,data:{[family==='watchlist'?'entries':family]:scenario==='empty'?[]:family==='watchlist'?entries:[item]}});return true;}
  const replay={entityKind:kind==='entry'?'watchlist_entry':kind==='position'?'position':'action_item',entityId:id,current:item,revisions:[{revisionId:'revision-controlled',revisionType:'created',changedAt:'2026-09-30T10:00:00Z',summary:'Portfolio entity created.',snapshotJson:'private-snapshot'}]};json(200,{ok:true,data:{[kind]:item,replay}});return true;
 }
 if(!request.headers['idempotency-key']){json(400,{ok:false,error:{code:'validation_error',message:'Missing mutation key'}});return true;}
 let text='';for await(const chunk of request)text+=chunk;const body=text?JSON.parse(text):{};
 if(!id){item[idKey]=kind==='entry'?'watch-created':kind==='position'?'position-created':'action-created';if(kind==='position'){item.status='proposed';item.openedAt=null;}}
 Object.assign(item,body);
 if(operation==='archive')item.status='archived';if(operation==='open')item.status='open';if(operation==='reduce')item.status='reducing';if(operation==='close')item.status='closed';if(operation==='cancel')item.status='canceled';if(operation==='complete'){item.status='completed';item.completedAt='2026-09-30T12:00:00Z';}if(operation==='dismiss'){item.status='dismissed';item.dismissedAt='2026-09-30T12:00:00Z';}
 json(200,{ok:true,data:{[kind]:item}});return true;
}
