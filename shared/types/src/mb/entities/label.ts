import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
  ITypedEntity,
  LifeSpan,
} from '../common/index.js';
import type { IArea } from './area.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import {
  IBrowseLabelsQuery,
  IBrowseLabelsResult,
  ILabelList,
} from '../search/index.js';

export interface ILabel
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  country?: null | string;
  name: string;
  'sort-name': string;
  'life-span'?: LifeSpan;
  disambiguation?: string;
  'label-code': null | string;
  ipis?: string[];
  isnis?: string[];
  area?: IArea;
}

export interface ILabelInfo {
  label: ILabel | null;
  'catalog-number': string | null;
}

type LabelInc = MiscIncludes | RelationsIncludes;

export type LabelEntity = {
  inc: LabelInc;
  search: Search<SearchPayload<LabelInc>, ILabelList>;
  browse: Browse<IBrowseLabelsQuery, IBrowseLabelsResult>;
  lookup: Lookup<LookupPayload<LabelInc>, ILabel>;
};