export interface IEntity {
  id: string;
}

export interface ITypedEntity extends IEntity {
  'type-id': string;
  type: string;
  id: string;
}

export type Operation<TPayload, TResponse> = {
  payload: TPayload;
  response: TResponse;
};

export type Search<TPayload, TResponse> = Operation<TPayload, TResponse>;
export type Browse<TPayload, TResponse> = Operation<TPayload, TResponse>;
export type Lookup<TPayload, TResponse> = Operation<TPayload, TResponse>;

export type SearchPayload<I extends string> = {
  query: string;
  limit?: number;
  offset?: number;
  inc?: I[];
};

export type LookupPayload<I extends string> = {
  mbid: string;
  inc?: I[];
};
