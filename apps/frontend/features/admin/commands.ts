/** Reviewed UI command vocabulary and consumed fields. Not an API proxy registry.
 * Provenance: frozen app-api.ts, billing.ts, entitlements.ts and admin handlers;
 * see M5_ADMIN_SOURCE_EVIDENCE.md. Browser state never grants authority. */
const text={kind:'text'} as const;
const iso={kind:'timestamp'} as const;
const optional={kind:'optional'} as const;
const plan={kind:'choice',values:['free','premium','admin_internal']} as const;
const interval={kind:'choice',values:['monthly','quarterly','yearly','custom']} as const;
const provider={kind:'choice',values:['internal_manual','stripe_placeholder']} as const;
const occurrence={subjectId:text,occurredAt:iso};
const proofProvider={kind:'choice',values:['totp','webauthn_passkey','authenticator_app','verified_email_fallback']} as const;
export const commandDefinitions={
 trial:{label:'Record trial',fields:{subjectId:text,planKind:plan,trialEndsAt:iso,providerKind:provider}},
 activate:{label:'Record activation',fields:{subjectId:text,planKind:plan,interval,currentPeriodStart:iso,currentPeriodEnd:iso,providerKind:provider}},
 renew:{label:'Record renewal',fields:{subjectId:text,nextPeriodStart:iso,nextPeriodEnd:iso}},
 changePlan:{label:'Change recorded plan',fields:{subjectId:text,nextPlanKind:plan,interval,effectiveAt:iso,reason:text}},
 pastDue:{label:'Mark past due',fields:occurrence},cancelPeriod:{label:'Cancel at period end',fields:occurrence},expire:{label:'Record expiry',fields:occurrence},pause:{label:'Pause subscription',fields:occurrence},resume:{label:'Resume subscription',fields:occurrence},
 entitlementPlan:{label:'Set entitlement plan',fields:{subjectId:text,planKind:plan,planStartedAt:optional,planEndsAt:optional,trialEndsAt:optional}},
 entitlementState:{label:'Set account state',fields:{subjectId:text,accountState:{kind:'choice',values:['active','suspended','restricted','canceled']}}},
 entitlementOverride:{label:'Set internal override',fields:{subjectId:text,internalOverride:{kind:'boolean'}}},
 mapping:{label:'Record provider mapping',fields:{providerKind:{kind:'choice',values:['stripe','manual_test','internal_import']},externalPriceId:text,mappedPlanKind:plan,interval}},
 dryRun:{label:'Run fixture dry run',fields:{jobId:text}},
 replay:{label:'Replay in fixture mode',fields:{runId:text}},
 gift:{label:'Gift Focus Plan',fields:{userId:text,duration:{kind:'choice',values:['two_weeks','one_month']},operatorNote:optional,stepUpChallengeId:text}},
 retract:{label:'Retract Focus gift',fields:{userId:text,giftRecordId:text,operatorNote:optional,stepUpChallengeId:text}},
 restrict:{label:'Restrict user',fields:{userId:text,restrictionKind:{kind:'choice',values:['suspended','banned']},operatorNote:optional,stepUpChallengeId:text}},
 challenge:{label:'Request step-up challenge',fields:{actionKind:{kind:'choice',values:['focus_plan_gift','focus_plan_gift_retract','user_restriction']},targetUserId:text,providerKind:proofProvider}},
 verify:{label:'Verify step-up proof',fields:{challengeId:text,providerKind:proofProvider,proof:text}},
} as const;
export type AdminCommand=keyof typeof commandDefinitions;
export type Field={readonly kind:'text'|'timestamp'|'optional'|'boolean'|'choice';readonly values?:readonly string[]};
type FieldValue<F>=F extends {kind:'boolean'}?boolean:F extends {kind:'choice';values:readonly (infer V)[]}?V:F extends {kind:'optional'}?string|undefined:string;
export type CommandBody<K extends AdminCommand>={[F in keyof typeof commandDefinitions[K]['fields']]:FieldValue<typeof commandDefinitions[K]['fields'][F]>};
export function parseCommandBody<K extends AdminCommand>(command:K,value:unknown):CommandBody<K>|null{
 if(!value||typeof value!=='object'||Array.isArray(value))return null;
 const shape=commandDefinitions[command].fields;const input=value as Record<string,unknown>;
 if(Object.keys(input).some(k=>!Object.hasOwn(shape,k)))return null;
 const output:Record<string,unknown>={};
 for(const [key,spec]of Object.entries(shape) as [string,Field][]){const v=input[key];
  if(spec.kind==='optional'&&(v===undefined||v==='')){output[key]=undefined;continue;}
  if(spec.kind==='boolean'){if(typeof v!=='boolean')return null;output[key]=v;continue;}
  if(typeof v!=='string'||!v.trim())return null;
  if(spec.kind==='choice'&&!spec.values?.includes(v))return null;
  if(spec.kind==='timestamp'&&Number.isNaN(Date.parse(v)))return null;
  if(['planStartedAt','planEndsAt','trialEndsAt'].includes(key)&&spec.kind==='optional'&&Number.isNaN(Date.parse(v)))return null;
  output[key]=v;
 }
 return output as CommandBody<K>;
}
export const stepUpActions={gift:'focus_plan_gift',retract:'focus_plan_gift_retract',restrict:'user_restriction'} as const;

export const stepUpRouteScopes={gift:'/api/admin/commercial/users/{userId}/gift-focus-plan',retract:'/api/admin/commercial/users/{userId}/retract-focus-gift',restrict:'/api/admin/commercial/users/{userId}/restrict'} as const;
