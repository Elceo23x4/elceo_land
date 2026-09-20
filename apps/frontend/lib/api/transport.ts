import type { OpenApiOperationTypes } from '../contracts/generated/openapi-operation-map.generated';
import type {
  AllowedHeaderName,
  MutationOperationKey,
  OperationKey,
  OperationPolicy,
  ReadOperationKey,
} from '../contracts/policy';
import type { ContractResult, SafeBackendError } from '../contracts/result';

type GeneratedRequest<K extends OperationKey> = OpenApiOperationTypes[K]['request'];
type GeneratedResponse<K extends OperationKey> = OpenApiOperationTypes[K]['response'];

type NonIdempotencyHeader<H extends string> = H extends unknown
  ? Lowercase<H> extends 'idempotency-key' ? never : H
  : never;
type CallerHeaderName<K extends OperationKey> = NonIdempotencyHeader<AllowedHeaderName<K>>;
type CallerHeaders<K extends OperationKey> = [CallerHeaderName<K>] extends [never]
  ? { headers?: never }
  : { headers?: Partial<Record<CallerHeaderName<K>, string>> };

export type RequestContext = Readonly<{ signal?: AbortSignal }>;

export type OperationInput<K extends OperationKey> = Omit<GeneratedRequest<K>, 'url' | 'headers'>
  & CallerHeaders<K>
  & Readonly<{ context?: RequestContext }>;

type IdempotencyInput<K extends OperationKey> = OperationPolicy<K>['idempotency'] extends 'required'
  ? Readonly<{
      idempotency: Readonly<{
        key: string;
      }>;
    }>
  : Readonly<{ idempotency?: never }>;

export type MutationInput<K extends OperationKey> = OperationInput<K> & IdempotencyInput<K>;

type RuntimePolicy = Readonly<{
  key: string;
  method: string;
  routePath: string;
  responseContract: string;
  idempotency: 'required' | 'not_required';
  allowedHeaders: readonly string[];
  /** Compact browser policy uses this; rich server policy carries explicitStatuses. */
  unavailableStatuses?: readonly number[];
  explicitStatuses?: readonly number[];
}>;

type RuntimeInput = {
  path?: Record<string, string | number>;
  query?: Record<string, string | number | boolean | readonly (string | number | boolean)[] | null | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
  context?: RequestContext;
  idempotency?: { key: string };
};

export type TransportRetryContext = Readonly<{
  operation: string;
  method: string;
  url: string;
  attempt: number;
  error: unknown;
  idempotencyKey?: string;
}>;

export type TransportRetryPolicy = (
  context: TransportRetryContext,
) => boolean | Promise<boolean>;

export type TransportConfiguration = Readonly<{
  baseOrigin: string;
  fetchImplementation: typeof fetch;
  /**
   * No automatic retry is performed by default. An injected policy owns
   * transport retry cadence/limits and receives the attempt number and stable
   * logical-mutation key. Caller cancellation is never retried.
   */
  shouldRetry?: TransportRetryPolicy;
}>;

export type PolicyClient<K extends OperationKey> = Readonly<{
  read<P extends ReadOperationKey<K>>(
    operation: P,
    input: OperationInput<P>,
  ): Promise<ContractResult<P, GeneratedResponse<P>>>;
  mutate<P extends MutationOperationKey<K>>(
    operation: P,
    input: MutationInput<P>,
  ): Promise<ContractResult<P, GeneratedResponse<P>>>;
}>;

const safeError = (value: unknown, fallback: string): SafeBackendError => {
  if (!value || typeof value !== 'object') return { message: fallback };
  const candidate = 'error' in value && value.error && typeof value.error === 'object'
    ? value.error as Record<string, unknown>
    : value as Record<string, unknown>;
  return {
    ...(typeof candidate.code === 'string' ? { code: candidate.code } : {}),
    message: typeof candidate.message === 'string' ? candidate.message : fallback,
    ...('details' in candidate ? { details: candidate.details } : {}),
  };
};

const parsePayload = async (response: Response): Promise<unknown> => {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const commercialState = (operation: string, payload: unknown) => {
  if (operation !== 'POST /api/billing/checkout' || !payload || typeof payload !== 'object') return null;
  const operationPayload = (payload as { operation?: unknown }).operation;
  if (!operationPayload || typeof operationPayload !== 'object') return null;
  const state = (operationPayload as { state?: unknown }).state;
  return state === 'processing' || state === 'unknown' || state === 'reconciliation_required' ? state : null;
};

const mapResult = <K extends OperationKey>(
  operation: K,
  policy: RuntimePolicy,
  status: number,
  responseOk: boolean,
  payload: unknown,
): ContractResult<K, GeneratedResponse<K>> => {
  const pending = commercialState(operation, payload);
  if (responseOk && pending) {
    return {
      kind: 'commercial_pending', operation, status, responseContract: policy.responseContract,
      commercialState: pending, value: payload as GeneratedResponse<K>,
    } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (responseOk && !(payload && typeof payload === 'object' && 'ok' in payload && payload.ok === false)) {
    return {
      kind: 'success', operation, status, responseContract: policy.responseContract,
      value: payload as GeneratedResponse<K>,
    } as ContractResult<K, GeneratedResponse<K>>;
  }

  const error = safeError(payload, 'The backend returned an unrecognized error response.');
  const base = { operation, status, responseContract: policy.responseContract, error };
  const statusIsDocumentedUnavailable = status === 503
    && (policy.unavailableStatuses?.includes(status) === true
      || policy.explicitStatuses?.includes(status) === true);

  if (status === 413 || error.code === 'payload_too_large') {
    return { kind: 'payload_too_large', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 500 || error.code === 'internal_error') {
    return { kind: 'internal_failure', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 424 || statusIsDocumentedUnavailable || error.code === 'dependency_failed') {
    return { kind: 'unavailable_degraded', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 400 || status === 422
      || error.code === 'validation_error' || error.code === 'bad_request'
      || error.code === 'unprocessable_entity') {
    return { kind: 'validation_failure', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 401 || error.code === 'unauthorized') {
    return { kind: 'unauthenticated', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 403 || error.code === 'forbidden') {
    return { kind: 'forbidden', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 404 || error.code === 'not_found') {
    return { kind: 'not_found', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 409 || error.code === 'conflict') {
    return { kind: 'conflict', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 429) {
    return { kind: 'rate_limited', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  return { kind: 'unknown_error', ...base } as ContractResult<K, GeneratedResponse<K>>;
};

const renderUrl = (baseOrigin: string, policy: RuntimePolicy, input: RuntimeInput) => {
  let route = policy.routePath;
  for (const match of route.matchAll(/\{([^}]+)\}/gu)) {
    const name = match[1];
    const value = input.path?.[name];
    if (value === undefined) throw new TypeError(`Missing path parameter ${name} for ${policy.key}`);
    route = route.replace(match[0], encodeURIComponent(String(value)));
  }
  const url = new URL(route, baseOrigin);
  for (const [name, value] of Object.entries(input.query ?? {})) {
    if (value === undefined || value === null) continue;
    for (const item of Array.isArray(value) ? value : [value]) url.searchParams.append(name, String(item));
  }
  return url;
};

const isAbortError = (error: unknown) => error instanceof Error && error.name === 'AbortError';

const unknownTransportResult = <K extends OperationKey>(
  operation: K,
  policy: RuntimePolicy,
): ContractResult<K, GeneratedResponse<K>> => ({
  kind: 'unknown_error',
  operation,
  status: null,
  responseContract: policy.responseContract,
  error: {
    message: 'The transport outcome is unknown; reconcile authoritative state before a new logical mutation.',
  },
}) as ContractResult<K, GeneratedResponse<K>>;

export const createPolicyClient = <K extends OperationKey>(
  allowedRegistry: Readonly<Record<K, RuntimePolicy>>,
  configuration: TransportConfiguration,
): PolicyClient<K> => {
  const origin = new URL(configuration.baseOrigin);
  if (!['http:', 'https:'].includes(origin.protocol) || origin.username || origin.password) {
    throw new TypeError('baseOrigin must be an HTTP(S) origin without embedded credentials.');
  }

  const execute = async <P extends K>(operation: P, supplied: unknown) => {
    const policy = allowedRegistry[operation];
    if (!policy) throw new TypeError(`Operation is not allowed by this client: ${operation}`);

    const input = (supplied ?? {}) as RuntimeInput;
    const headers = new Headers();
    const allowed = new Set(policy.allowedHeaders.map((name) => name.toLowerCase()));

    for (const [name, value] of Object.entries(input.headers ?? {})) {
      if (name.toLowerCase() === 'idempotency-key') {
        throw new TypeError(`Header ${name} must be supplied through idempotency context for ${operation}`);
      }
      if (!allowed.has(name.toLowerCase())) {
        throw new TypeError(`Header ${name} is not allowed for ${operation}`);
      }
      headers.set(name, value);
    }

    if (policy.idempotency === 'required') {
      if (!input.idempotency || typeof input.idempotency.key !== 'string' || input.idempotency.key.length === 0) {
        throw new TypeError(`Idempotency context is required for ${operation}`);
      }
      headers.set('Idempotency-Key', input.idempotency.key);
    } else if (input.idempotency) {
      throw new TypeError(`Idempotency context is not accepted for ${operation}`);
    }

    const url = renderUrl(origin.origin, policy, input);
    const serializedBody = input.body === undefined ? undefined : JSON.stringify(input.body);
    if (input.body !== undefined) headers.set('Content-Type', 'application/json');

    let attempt = 1;
    for (;;) {
      try {
        const response = await configuration.fetchImplementation(url, {
          method: policy.method,
          headers,
          signal: input.context?.signal,
          ...(serializedBody === undefined ? {} : { body: serializedBody }),
        });
        const payload = await parsePayload(response);
        return mapResult(operation, policy, response.status, response.ok, payload);
      } catch (error) {
        if (isAbortError(error)) throw error;

        const replayProtected = policy.idempotency === 'required'
          || ['GET', 'HEAD', 'OPTIONS'].includes(policy.method);
        const retry = replayProtected && configuration.shouldRetry
          ? await configuration.shouldRetry({
              operation,
              method: policy.method,
              url: url.toString(),
              attempt,
              error,
              ...(input.idempotency ? { idempotencyKey: input.idempotency.key } : {}),
            })
          : false;

        if (retry) {
          attempt += 1;
          continue;
        }
        return unknownTransportResult(operation, policy);
      }
    }
  };

  return {
    read: (operation, input) => execute(operation, input),
    mutate: (operation, input) => execute(operation, input),
  } as PolicyClient<K>;
};
