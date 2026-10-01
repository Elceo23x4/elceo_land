import {test,expect,type Page} from '@playwright/test';
const origin='http://127.0.0.1:3102';
const families=[
 {path:'analytics',operation:'/api/analytics/generate',summary:'Generate a new analytics review',button:'Request new review',read:'Read latest snapshot'},
 {path:'coaching',operation:'/api/coaching/generate',summary:'Generate a new coaching review',button:'Request new review',read:'Read latest snapshot'},
 {path:'workspace',operation:'/api/workspace/refresh',summary:'Refresh workspace',button:'Request workspace refresh',read:'Read current workspace'},
];
async function holdOperation(page:Page,operation:string){
 await page.addInitScript(operation=>{
  const original=window.fetch.bind(window);
  const probe={calls:0,aborts:0,key:'',signal:false};
  Object.assign(window,{generationProbe:probe});
  window.fetch=(input,init)=>{
   const url=new URL(input instanceof Request?input.url:String(input),location.origin);
   if(url.pathname!==operation)return original(input,init);
   probe.calls++;probe.key=new Headers(init?.headers).get('idempotency-key')??'';probe.signal=Boolean(init?.signal);
   return new Promise<Response>((_resolve,reject)=>{
    init?.signal?.addEventListener('abort',()=>{probe.aborts++;reject(new DOMException('Controlled browser wait abort','AbortError'));},{once:true});
   });
  };
 },operation);
}
const probe=(page:Page)=>page.evaluate(()=>Reflect.get(window,'generationProbe') as {calls:number;aborts:number;key:string;signal:boolean});
for(const family of families){
 test(`${family.path} timeout leaves one uncertain operation and only passive readback`,async({page})=>{
  await holdOperation(page,family.operation);
  await page.clock.install({time:new Date('2026-10-01T00:00:00Z')});await page.goto(origin+'/'+family.path);
  await page.clock.pauseAt(new Date('2026-10-01T01:00:00Z'));
  await page.getByText(family.summary,{exact:true}).click();
  // Two synchronous activations must still create one logical operation.
  await page.getByRole('button',{name:family.button,exact:true}).evaluate((button:HTMLButtonElement)=>{button.click();button.click();});
  await expect.poll(async()=>(await probe(page)).calls).toBe(1);
  const initial=await probe(page);expect(initial.signal).toBe(true);expect(initial.key).toBeTruthy();
  await page.clock.fastForward(29999);expect((await probe(page)).aborts).toBe(0);
  await page.clock.fastForward(1);await expect.poll(async()=>(await probe(page)).aborts).toBe(1);
  const feedback=page.locator('details').filter({has:page.getByText(family.summary,{exact:true})}).getByRole('status');
  await expect(feedback).toContainText('The service may still finish the operation.');
  await expect(page.getByRole('button',{name:family.button,exact:true})).toBeDisabled();
  await page.getByRole('button',{name:family.read,exact:true}).click();
  await page.clock.fastForward(60000);expect(await probe(page)).toEqual({...initial,aborts:1});
 });
 test(`${family.path} unmount aborts browser waiting without another generation`,async({page})=>{
  await holdOperation(page,family.operation);
  await page.clock.install({time:new Date('2026-10-01T00:00:00Z')});await page.goto(origin+'/'+family.path);
  await page.clock.pauseAt(new Date('2026-10-01T01:00:00Z'));
  await page.getByText(family.summary,{exact:true}).click();await page.getByRole('button',{name:family.button,exact:true}).click();
  await expect.poll(async()=>(await probe(page)).calls).toBe(1);
  await page.getByRole('link',{name:'Journal',exact:true}).click();await expect(page).toHaveURL(origin+'/journal');
  await expect.poll(async()=>(await probe(page)).aborts).toBe(1);
  await page.clock.fastForward(60000);expect((await probe(page)).calls).toBe(1);expect((await probe(page)).aborts).toBe(1);
 });
}
