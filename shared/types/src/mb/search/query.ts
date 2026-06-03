import type { ReleaseStatusQuery, ReleaseTypeQuery } from '../enums/release.js';

export interface IPagination {
  offset?: number;
  limit?: number;
}

export interface IReleaseTypeAndStatus {
  status?: ReleaseStatusQuery[];
  type?: ReleaseTypeQuery[];
}

export interface ISearchQuery<I extends string> extends IPagination {
  query?: string;
  inc?: I[];
}

export type OneOf<T> = {
  [K in keyof T]: { [P in K]: T[K] } & Partial<
    Record<Exclude<keyof T, K>, never>
  >;
}[keyof T];