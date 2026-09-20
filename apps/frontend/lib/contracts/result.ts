import type { OperationKey, OperationPolicy } from './policy';

export type SafeBackendError = Readonly<{
  code?: string;
  message: string;
  details?: unknown;
}>;

type FailureBase<K extends OperationKey> = Readonly<{
  operation: K;
  responseContract: OperationPolicy<K>['responseContract'];
  status: number | null;
  error: SafeBackendError;
}>;

export type ContractResult<K extends OperationKey, T> =
  | Readonly<{
      kind: 'success';
      operation: K;
      responseContract: OperationPolicy<K>['responseContract'];
      status: number;
      value: T;
    }>
  | (FailureBase<K> & { kind: 'validation_failure' })
  | (FailureBase<K> & { kind: 'unauthenticated' })
  | (FailureBase<K> & { kind: 'forbidden' })
  | (FailureBase<K> & { kind: 'not_found' })
  | (FailureBase<K> & { kind: 'conflict' })
  | (FailureBase<K> & { kind: 'rate_limited' })
  | (FailureBase<K> & { kind: 'unavailable_degraded' })
  | Readonly<{
      kind: 'commercial_pending';
      operation: K;
      responseContract: OperationPolicy<K>['responseContract'];
      status: number;
      value: T;
      commercialState: 'processing' | 'unknown' | 'reconciliation_required';
    }>
  | (FailureBase<K> & { kind: 'unknown_error' });
