import { ISearchQuery, SearchBasedEntityMap } from '@discoliban/types/mb';

declare global {
  namespace Express {
    interface Request {
      cleanQuery: ISearchQuery<SearchBasedEntityMap<unknown>>;
    }
  }
}

export {};
