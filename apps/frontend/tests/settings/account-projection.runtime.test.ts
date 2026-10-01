import {test} from 'node:test';
import assert from 'node:assert/strict';
import {accountPreferences,trackedAssets} from '../../features/settings/account-projection.ts';
const channels={inApp:true,email:false,browserPush:false};
const classes={biasChanges:true,contradictionSpikes:false,keyLevelInteractions:true,macroEventWarnings:false,postEventRegimeShift:true,journalCoaching:false};
test('account preferences preserve every recorded notification flag',()=>{
 assert.deepEqual(accountPreferences({profile:{motionIntensity:'low'},notifications:{...channels,...classes}}),{motionIntensity:'low',notifications:channels,notificationClasses:classes});
 assert.equal(accountPreferences({profile:{motionIntensity:'medium'},notifications:channels}),null);
 assert.equal(accountPreferences({profile:{motionIntensity:'invented'},notifications:{...channels,...classes}}),null);
});
test('tracked market projection never fabricates an empty or default selection',()=>{
 assert.equal(trackedAssets({}),null);assert.equal(trackedAssets({watchlist:{assets:[123]}}),null);assert.deepEqual(trackedAssets({watchlist:{assets:[]}}),[]);assert.deepEqual(trackedAssets({watchlist:{assets:['recorded-custom']}}),['recorded-custom']);
});
