/** Frozen evidence only: inbox route blob 7f7ce9d730421a6af5b4002ceb6420516218fccb
 * at 771487b46874afc28a21f260a2c12f92bfe8f736 parses limit (default 50, max 200).
 * OpenAPI omits this query. Keep this refinement separate from generated output.
 */
export type EvidencedNotificationQueries={
 'GET /api/notifications/inbox':{limit?:number};
};

// Frozen app-api.ts + app-api.schema.ts and exact route handlers.
// PATCH validator reuses create validator and therefore requires channel despite DTO omission.
// decisionKind/minimumPriority are ignored by handlers: deliberately not offered by this UI.
export type NotificationChannel='in_app'|'email'|'push'|'sms'|'webhook';
export type TargetCreate={channel:'email';email:string;label?:string|null}|{channel:'push';subscriptionId:string;label?:string|null}|{channel:'in_app';label?:string|null};
export type SubscriptionWrite={channel:NotificationChannel;minimumMaterialityScore?:number|null;isEnabled?:boolean};
export type EvidencedNotificationBodies={
 'POST /api/notifications/targets':TargetCreate;
 'POST /api/notifications/subscriptions':SubscriptionWrite;
 'PATCH /api/notifications/subscriptions/{subscriptionId}':SubscriptionWrite;
 'POST /api/notifications/verification/issue':{targetId:string};
 'POST /api/notifications/verification/consume':{targetId:string;token:string};
};
