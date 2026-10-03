import type {MutationInput} from '../../lib/api/transport';
const valid:MutationInput<'PATCH /api/notifications/subscriptions/{subscriptionId}'>={path:{subscriptionId:'s'},body:{channel:'email',isEnabled:false},idempotency:{key:'logical-key'}};
// @ts-expect-error frozen validator requires channel despite source DTO omission
const missingChannel:MutationInput<'PATCH /api/notifications/subscriptions/{subscriptionId}'>={path:{subscriptionId:'s'},body:{isEnabled:false},idempotency:{key:'logical-key'}};
// @ts-expect-error verification needs an idempotency context
const missingKey:MutationInput<'POST /api/notifications/verification/consume'>={body:{targetId:'t',token:'transient'}};
// @ts-expect-error target owner is never caller authority
const owner:MutationInput<'POST /api/notifications/targets'>={body:{channel:'in_app',subjectId:'attacker'},idempotency:{key:'key'}};
void [valid,missingChannel,missingKey,owner];
