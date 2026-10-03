import type { PolicyClient } from '../../lib/api/transport';
import type { BrowserUserOperationKey } from '../../lib/contracts/policy';
declare const client:PolicyClient<BrowserUserOperationKey>;
client.mutate('POST /api/workspace/refresh',{body:{triggerKind:'manual'},idempotency:{key:'one-logical-request'}});
// @ts-expect-error The pinned validator requires triggerKind.
client.mutate('POST /api/workspace/refresh',{idempotency:{key:'one-logical-request'}});
// @ts-expect-error Refinement does not remove idempotency authority.
client.mutate('POST /api/workspace/refresh',{body:{triggerKind:'manual'}});
// @ts-expect-error Unknown trigger kinds remain invalid.
client.mutate('POST /api/workspace/refresh',{body:{triggerKind:'page_open'},idempotency:{key:'one-logical-request'}});
// @ts-expect-error Refinement cannot add a body to unrelated operations.
client.read('GET /api/workspace/current',{body:{triggerKind:'manual'}});
