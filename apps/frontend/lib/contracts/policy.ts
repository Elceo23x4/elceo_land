import type {
  browserUserOperationKeys,
  OperationKey,
  OperationPolicy,
  trustedServerOperationKeys,
} from './generated/operation-registry.generated';

export type { OperationKey, OperationPolicy };

export type BrowserUserOperationKey = (typeof browserUserOperationKeys)[number];
export type TrustedServerOperationKey = (typeof trustedServerOperationKeys)[number];

type ReadHttpMethod = 'GET' | 'HEAD' | 'OPTIONS';

/**
 * Client invocation shape follows the concrete operation method. The frozen
 * route inventory is route-file scoped, so a mixed GET/POST file can carry a
 * route-level mutation sideEffectRisk/idempotency declaration onto its GET
 * projection. Those frozen requirements are still enforced by ReadInput; they
 * do not turn an HTTP GET into a mutate() call.
 */
export type ReadOperationKey<K extends OperationKey> = {
  [P in K]: OperationPolicy<P>['method'] extends ReadHttpMethod ? P : never;
}[K];

export type MutationOperationKey<K extends OperationKey> = Exclude<K, ReadOperationKey<K>>;

export type AllowedHeaderName<K extends OperationKey> = OperationPolicy<K>['allowedHeaders'][number];
