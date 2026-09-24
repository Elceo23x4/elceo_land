import { readFileSync,writeFileSync,appendFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { evaluateAggregate } from './m5-aggregate-policy.mjs';
const event=JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH,'utf8'));
const expected=event.pull_request?.head.sha;
const repo=process.env.GITHUB_REPOSITORY;
const pr=event.pull_request?.number;
if(!expected || !pr || !repo) throw Error('PR head identity required');
if(execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim()!==expected) throw Error('Checkout is not exact PR head');
const api=async (path,options={})=>{
 const response=await fetch(`https://api.github.com/repos/${repo}/${path}`,{
  ...options,headers:{accept:'application/vnd.github+json',authorization:`Bearer ${process.env.GITHUB_TOKEN}`,'x-github-api-version':'2022-11-28',...options.headers}});
 if(!response.ok) throw Error(`GitHub evidence unavailable: ${response.status}`);
 return response.json();
};
const current=async()=> (await api(`pulls/${pr}`)).head.sha;
const publish=async(state,description)=>api(`statuses/${expected}`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({state,context:'M5 exact-head acceptance',description:description.slice(0,140),target_url:`https://github.com/${repo}/actions/runs/${process.env.GITHUB_RUN_ID}`})});
if(await current()!==expected) throw Error('PR head moved');
await publish('pending','Required workflow attempt started; exact-head acceptance must be re-established');
if(process.argv.includes('invalidate')) process.exit(0);
const list=async(path,key)=>{
 const all=[];
 for(let page=1;page<=10;page++) { const data=await api(`${path}${path.includes('?')?'&':'?'}per_page=100&page=${page}`);all.push(...data[key]);if(all.length>=data.total_count)return all; }
 throw Error('Evidence pagination limit; fail closed');
};
async function snapshot(){
 const runs=await list(`actions/runs?head_sha=${expected}&event=pull_request`,'workflow_runs');
 const jobs={};
 // Jobs are requested for the current run attempt, not an earlier successful attempt.
 for(const r of runs.filter(r=>r.status==='completed'&&r.conclusion==='success')) jobs[r.id]=await list(`actions/runs/${r.id}/attempts/${r.run_attempt}/jobs`,'jobs');
 return evaluateAggregate({expected,current:await current(),runs,jobs});
}
try {
 for(let poll=0;poll<60;poll++) {
  const result=await snapshot();
  console.log(JSON.stringify({head:expected,...result}));
  if(result.state==='failure') throw Error(result.reason);
  if(result.state==='success') {
   // Re-read complete run/attempt identities and the current PR head immediately
   // before publication. A partial rerun or moved head cannot reuse old proof.
   const confirmation=await snapshot();
   if(confirmation.state!=='success'||JSON.stringify(confirmation.evidence)!==JSON.stringify(result.evidence)) continue;
   const evidence={head:expected,pr,checkedAt:new Date().toISOString(),...confirmation};
   writeFileSync('m5-aggregate-evidence.json',JSON.stringify(evidence,null,2)+'\n');
   if(process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY,`\nExact head: ${expected}\n\n\`\`\`json\n${JSON.stringify(evidence,null,2)}\n\`\`\`\n`);
   await publish('success',confirmation.reason);process.exit(0);
  }
  await new Promise(resolve=>setTimeout(resolve,15000));
 }
 throw Error('Timed out awaiting complete exact-head evidence');
} catch(error) { await publish('failure','Exact-head acceptance not established; inspect aggregate evidence');throw error; }
