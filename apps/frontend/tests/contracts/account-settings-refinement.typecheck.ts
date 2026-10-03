import type {MutationInput} from '../../lib/api/transport';
const selection:MutationInput<'PATCH /api/account/watchlist'>={body:{assets:[]},idempotency:{key:'selection'}};
// @ts-expect-error Mandatory idempotency is preserved.
const noKey:MutationInput<'PATCH /api/account/watchlist'>={body:{assets:['XAU/USD']}};
// @ts-expect-error Motion-only PATCH would discard required notification state.
const incomplete:MutationInput<'PATCH /api/account/preferences'>={body:{motionIntensity:'low'},idempotency:{key:'motion'}};
// @ts-expect-error Arbitrary account fields cannot be introduced.
const authority:MutationInput<'PATCH /api/account/watchlist'>={body:{assets:[],role:'admin'},idempotency:{key:'selection'}};
void [selection,noKey,incomplete,authority];
