// Frozen apps/web/lib/server/account/state-contract.ts and
// services/application-state/src/types.ts at 771487b46874afc28a21f260a2c12f92bfe8f736.
export type MotionIntensity='low'|'medium'|'high';
export type AccountNotificationChannels={inApp:boolean;email:boolean;browserPush:boolean};
export type AccountNotificationClasses={biasChanges:boolean;contradictionSpikes:boolean;keyLevelInteractions:boolean;macroEventWarnings:boolean;postEventRegimeShift:boolean;journalCoaching:boolean};
export type AccountPreferencesInput={motionIntensity:MotionIntensity;notifications:AccountNotificationChannels;notificationClasses:AccountNotificationClasses};
export type EvidencedAccountSettingsBodies={
 'POST /api/account/access-check':{feature:ElceoFeatureKey};
 'PATCH /api/account/watchlist':{assets:string[]};
 'PATCH /api/account/preferences':AccountPreferencesInput;
};

// Feature key union and access-check body: pinned packages/types/src/{entitlements,app-api}.ts.
export type ElceoFeatureKey =
  | 'workspace.read' | 'workspace.refresh' | 'journal.read' | 'journal.write' | 'journal.influence.generate'
  | 'portfolio.read' | 'portfolio.write' | 'portfolio.snapshot.generate' | 'analytics.read' | 'analytics.generate'
  | 'coaching.read' | 'coaching.generate' | 'notifications.read' | 'notifications.write'
  | 'notifications.targets.manage' | 'notifications.subscriptions.manage' | 'notifications.delivery.dispatch'
  | 'refresh.run' | 'admin.read' | 'admin.ops' | 'data.extended_macro' | 'data.cot' | 'data.central_bank_liquidity'
  | 'data.bank_health' | 'data.bank_earnings' | 'data.real_yields' | 'data.credit_stress' | 'data.auctions'
  | 'data.volatility_surface' | 'data.cross_market_rates' | 'data.macro_surprise_history';
