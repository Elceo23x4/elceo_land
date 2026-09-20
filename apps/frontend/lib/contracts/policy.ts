import type {
  browserUserOperationKeys,
  OperationKey,
  OperationPolicy,
  trustedServerOperationKeys,
} from './generated/operation-registry.generated';

export type { OperationKey, OperationPolicy };

export type BrowserUserOperationKey = (typeof browserUserOperationKeys)[number];
export type TrustedServerOperationKey = (typeof trustedServerOperationKeys)[number];

export type ReadOperationKey<K extends OperationKey> = {
  [P in K]: OperationPolicy<P>['sideEffectRisk'] extends 'read' ? P : never;
}[K];

export type MutationOperationKey<K extends OperationKey> = Exclude<K, ReadOperationKey<K>>;

export type AllowedHeaderName<K extends OperationKey> = OperationPolicy<K>['allowedHeaders'][number];
