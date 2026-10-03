import {record} from '../workspace/projection.ts';
import type {AccountPreferencesInput} from '../../lib/contracts/refinements/account-settings';
export function accountPreferences(value:unknown):AccountPreferencesInput|null {
 const d=record(value),p=record(d?.profile),n=record(d?.notifications),motionIntensity=p?.motionIntensity;
 if(!n||!['inApp','email','browserPush','biasChanges','contradictionSpikes','keyLevelInteractions','macroEventWarnings','postEventRegimeShift','journalCoaching'].every(k=>typeof n[k]==='boolean')||(motionIntensity!=='low'&&motionIntensity!=='medium'&&motionIntensity!=='high'))return null;
 return {motionIntensity,notifications:{inApp:n.inApp as boolean,email:n.email as boolean,browserPush:n.browserPush as boolean},notificationClasses:{biasChanges:n.biasChanges as boolean,contradictionSpikes:n.contradictionSpikes as boolean,keyLevelInteractions:n.keyLevelInteractions as boolean,macroEventWarnings:n.macroEventWarnings as boolean,postEventRegimeShift:n.postEventRegimeShift as boolean,journalCoaching:n.journalCoaching as boolean}};
}
export function trackedAssets(value:unknown):string[]|null {
 const a=record(record(value)?.watchlist)?.assets;
 return Array.isArray(a)&&a.every(x=>typeof x==='string')?a:null;
}
// Frozen packages/types/src/events.ts LAUNCH_ASSET_SYMBOLS. This is a selection
// vocabulary, not a live market-data or provider-availability assertion.
export const launchMarkets=['XAU/USD','BTC/USD','Nasdaq 100','S&P 500','EUR/USD','GBP/USD','USD/JPY','USD/CHF','AUD/USD','NZD/USD','USD/CAD','DE30','DXY','VIX'] as const;
