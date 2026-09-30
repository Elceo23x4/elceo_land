import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {inboxProjection,notificationSummary} from '../../features/notifications/projection.ts';
test('canonical notification summary remains server supplied',()=>{
 const fixture=JSON.parse(readFileSync(new URL('../../../../contracts/backend/mocks/notifications-summary.json',import.meta.url),'utf8'));
 assert.equal(notificationSummary(fixture.data)?.unread,2);
 fixture.data.inboxUnreadCount='2';assert.equal(notificationSummary(fixture.data),null);
});
test('inbox projection excludes internal payloads and never synthesizes read state',()=>{
 const fixture={inboxId:'controlled',asset:'EURUSD',timeframe:'H4',headline:'Context updated',body:'Review the recorded context.',createdAt:'2026-09-30T10:00:00Z',readAt:null,archivedAt:null,payloadJson:'not-for-render',targetId:'not-for-render'};
 const view=inboxProjection([fixture]);assert.equal(view?.[0].readAt,null);assert.equal(view?.[0].headline,fixture.headline);assert.equal('payloadJson'in view![0],false);assert.equal('targetId'in view![0],false);
 assert.equal(inboxProjection([{...fixture,readAt:undefined}]),null);assert.deepEqual(inboxProjection([]),[]);assert.equal(inboxProjection({}),null);
});
