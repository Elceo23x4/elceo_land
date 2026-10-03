// Exact workflow paths and verification jobs/steps, not similarly named statuses.
export const requirements = [
 ['m1-candidate.yml','candidate',['Run npm run build:next','Run npm run typecheck:next','Run npm run test:m1','Run npx playwright test']],
 ['m2-contract-layer.yml','contracts',['Verify deterministic generated contracts','Verify typed transport, policy partitions, mocks and client boundaries','Verify frozen backend snapshot and UI authority']],
 ['m3-auth-topology.yml','auth-topology',['Verify canonical session and mediation topology','Re-run accepted M2 contract boundaries','Re-run M1 architecture regressions','Verify frozen backend snapshot and UI authority']],
 ['m4-dashboard-parity.yml','parity',['Compare Vite and Next dashboard parity','Verify M4 static migration boundaries','Re-run accepted M2 boundaries','Re-run accepted M3 boundaries','Re-run accepted M1 boundaries','Verify frozen backend snapshot and UI authority']],
 ['m5-production-ui.yml','presentation',['Run npm ci','Run npm run build:vite','Run npm run build:next','Run npm run typecheck:next','Run npm run test:m1','Run node scripts/check-m5-assets.mjs','M5 hardening rejection tests','Run npx playwright test --config=playwright.m5.config.ts']],
 ['ui-foundation-integrity.yml','foundation',['Check ELCEO UI foundation','Verify complete frozen backend snapshot','Test integrity rejection cases']],
 ['webpack.yml','build (22.23.2)',['Install locked dependencies','TypeScript and Vite production build']],
];
export function evaluateAggregate({ expected, current, runs, jobs }) {
 if (!expected || current!==expected) return {state:'failure',reason:'PR head changed'};
 const evidence=[];
 for(const [file,name,steps] of requirements) {
  const candidates=runs.filter(r=>r.head_sha===expected && r.event==='pull_request' && r.path.split('@')[0]===`.github/workflows/${file}`).sort((a,b)=>b.id-a.id);
  const run=candidates[0];
  if(!run || run.status!=='completed') return {state:'pending',reason:`Awaiting ${file}`};
  if(run.conclusion!=='success') return {state:'failure',reason:`${file}: ${run.conclusion}`};
  const list=jobs[run.id] ?? [];
  const job=list.find(j=>j.name===name);
  if(!job || job.head_sha!==expected || job.run_id!==run.id || job.status!=='completed' || job.conclusion!=='success') return {state:'failure',reason:`Missing successful exact-head job: ${file}/${name}`};
  for(const step of steps) if(!job.steps.some(s=>s.name===step && s.status==='completed' && s.conclusion==='success')) return {state:'failure',reason:`Missing or skipped verification: ${file}/${step}`};
  if(list.some(j=>j.status!=='completed'||j.conclusion!=='success')) return {state:'failure',reason:`Incomplete job set: ${file}`};
  evidence.push({file,run:run.id,attempt:run.run_attempt,head:run.head_sha,job:job.id});
 }
 return {state:'success',reason:'All seven exact-head workflows verified',evidence};
}
