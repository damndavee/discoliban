import type { IUserTag, IGenre } from './rating.js';
import type { IRating } from './rating.js';
import { IRelation } from '../relations/index.js';

export interface IMayHaveRelations {
  relations?: IRelation[];
}

export interface IMayHaveTagsAndGenres {
  tags?: IUserTag[];
  genres?: IGenre[];
}

export interface IMayHaveRating {
  rating?: IRating;
}


