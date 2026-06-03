import { ISearchQuery } from '@discoliban/types/mb';

declare global {
  namespace Express {
    interface Request {
      cleanQuery: ISearchQuery<unknown>;
    }
  }
}

export {};
