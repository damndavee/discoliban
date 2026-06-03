import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
  IEntity,
} from '../common/index.js';
import type { IArtist } from './artist.js';
import type { IRelease } from './release.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  IBrowseReleaseGroupsQuery,
  IBrowseReleaseGroupsResult,
  IReleaseGroupList,
} from '../search/index.js';

export interface IReleaseGroup
  extends IEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  count: number;
  disambiguation?: string;
  title: string;
  'secondary-types': string[];
  'first-release-date': string;
  'primary-type': string;
  'primary-type-id'?: string;
  'secondary-type-ids'?: string[];
  'sort-name': string;
  'artist-credit': { artist: IArtist; name: string; joinphrase: string }[];
  releases?: IRelease[]; // include 'releases'
}

type ReleaseGroupInc = MiscIncludes | RelationsIncludes;

export type ReleaseGroupEntity = {
  inc: ReleaseGroupInc;
  search: Search<SearchPayload<ReleaseGroupInc>, IReleaseGroupList>;
  browse: Browse<IBrowseReleaseGroupsQuery, IBrowseReleaseGroupsResult>;
  lookup: Lookup<LookupPayload<ReleaseGroupInc>, IReleaseGroup>;
};
