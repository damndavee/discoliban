import { Entity, EntityMap, Operation } from '@discoliban/types/mb';

type ExtractOperation<T> =
  T extends Operation<infer P, infer R> ? { payload: P; response: R } : never;

type HasOperation<M extends string> = {
  [K in keyof EntityMap]: EntityMap[K] extends Record<
    M,
    Operation<unknown, unknown>
  >
    ? K
    : never;
}[keyof EntityMap];

export type BrowsableEntity = HasOperation<'browse'>;
export type SearchableEntity = HasOperation<'search'>;
export type LookupEntity = HasOperation<'lookup'>;

export type Payload<
  E extends Entity,
  M extends keyof EntityMap[E],
> = ExtractOperation<EntityMap[E][M]>['payload'];

export type Response<
  E extends Entity,
  M extends keyof EntityMap[E],
> = ExtractOperation<EntityMap[E][M]>['response'];

export type RawQuery = {
  query?: string;
  inc?: string[];
  limit?: number;
  offset?: number;
};