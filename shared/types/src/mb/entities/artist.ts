import type {
  ITypedEntity,
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
  IPeriod,
} from '../common/index.js';
import type { IAlias } from './alias.js';
import type { IArea } from './area.js';
import type { IRelease } from './release.js';
import type { IReleaseGroup } from './release-group.js';
import { ArtistIncludes } from '../relations/index.js';
import {
  IArtistList,
  IBrowseArtistsQuery,
  IBrowseArtistsResult,
} from '../search/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';

export type Gender = 'male' | 'female' | 'other' | 'not applicable';

export interface IArtist
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  name: string;
  disambiguation: string;
  'sort-name': string;
  'gender-id'?: string;
  gender?: Gender;
  'life-span'?: IPeriod;
  country?: string;
  ipis?: string[];
  isnis?: string[];
  aliases?: IAlias[];
  area?: IArea;
  begin_area?: IArea;
  end_area?: IArea;
  /**
   * Only defined if 'releases' are included
   */
  releases?: IRelease[];
  'release-groups'?: IReleaseGroup[];
}

export interface IArtistCredit {
  artist: IArtist;
  joinphrase: string;
  name: string;
}

export type ArtistEntity = {
  inc: ArtistIncludes;
  search: Search<SearchPayload<ArtistIncludes>, IArtistList>;
  browse: Browse<IBrowseArtistsQuery, IBrowseArtistsResult>;
  lookup: Lookup<LookupPayload<ArtistIncludes>, IArtist>;
};


