// Display-only subset of frozen NotificationInboxRecord (771487b46874afc28a21f260a2c12f92bfe8f736).
// Source blob: 77f38acd94dbf510c34853981d26026010270d66. Never expose payloadJson or target authority.
import {record} from '../workspace/projection.ts';
export type InboxItem={inboxId:string;asset:string;timeframe:string;headline:string;body:string;createdAt:string;readAt:string|null;archivedAt:string|null};
export function inboxProjection(value:unknown):InboxItem[]|null {
 if(!Array.isArray(value))return null;
 const items:InboxItem[]=[];
 for(const valueItem of value){
  const r=record(valueItem);
  if(!r||['inboxId','asset','timeframe','headline','body','createdAt'].some(k=>typeof r[k]!=='string')||['readAt','archivedAt'].some(k=>r[k]!==null&&typeof r[k]!=='string'))return null;
  items.push({inboxId:r.inboxId as string,asset:r.asset as string,timeframe:r.timeframe as string,headline:r.headline as string,body:r.body as string,createdAt:r.createdAt as string,readAt:r.readAt as string|null,archivedAt:r.archivedAt as string|null});
 }
 return items;
}
export function notificationSummary(value:unknown){
 const d=record(value),m=record(d?.managementSummary),f=record(d?.feedbackSummary);
 const valid=(r:Record<string,unknown>|null|undefined,keys:string[])=>!!r&&keys.every(k=>typeof r[k]==='number'&&Number.isFinite(r[k]));
 if(!d||!valid(d,['inboxUnreadCount'])||!valid(m,['subjectTargetCount','activeTargetCount','subscriptionCount','enabledSubscriptionCount','inboxArchivedCount','recentDeliveredCount','recentFailedCount','recentDeadCount'])||!valid(f,['acceptedCount','deliveredCount','bouncedCount','complainedCount','unsubscribedCount','invalidTargetCount','providerFailedCount','unknownCount','disabledTargetCount','degradedTargetCount']))return null;
 return {unread:d.inboxUnreadCount as number,management:m!,feedback:f!};
}
