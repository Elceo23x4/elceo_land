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
  | (FailureBase<K> & Readonly<{ kind: 'validation_failure' }>)
  | (FailureBase<K> & Readonly<{ kind: 'payload_too_large' }>)
  | (FailureBase<K> & Readonly<{ kind: 'unauthenticated' }>)
  | (FailureBase<K> & Readonly<{ kind: 'forbidden' }>)
  | (FailureBase<K> & Readonly<{ kind: 'not_found' }>)
  | (FailureBase<K> & Readonly<{ kind: 'conflict' }>)
  | (FailureBase<K> & Readonly<{ kind: 'rate_limited' }>)
  | (FailureBase<K> & Readonly<{ kind: 'unavailable_degraded' }>)
  | (FailureBase<K> & Readonly<{ kind: 'internal_failure' }>)
  | Readonly<{
      kind: 'commercial_pending';
      operation: K;
      responseContract: OperationPolicy<K>['responseContract'];
      status: number;
      commercialState: 'processing' | 'unknown' | 'reconciliation_required';
      value: T;
    }>
  | (FailureBase<K> & Readonly<{ kind: 'unknown_error' }>);
