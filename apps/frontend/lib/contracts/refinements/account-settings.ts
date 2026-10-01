// Frozen apps/web/lib/server/account/state-contract.ts and
// services/application-state/src/types.ts at 771487b46874afc28a21f260a2c12f92bfe8f736.
export type MotionIntensity='low'|'medium'|'high';
export type AccountNotificationChannels={inApp:boolean;email:boolean;browserPush:boolean};
export type AccountNotificationClasses={biasChanges:boolean;contradictionSpikes:boolean;keyLevelInteractions:boolean;macroEventWarnings:boolean;postEventRegimeShift:boolean;journalCoaching:boolean};
export type AccountPreferencesInput={motionIntensity:MotionIntensity;notifications:AccountNotificationChannels;notificationClasses:AccountNotificationClasses};
export type EvidencedAccountSettingsBodies={
 'PATCH /api/account/watchlist':{assets:string[]};
 'PATCH /api/account/preferences':AccountPreferencesInput;
};
