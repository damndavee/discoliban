import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  ITypedEntity,
} from '../common/index.js';
import { MiscIncludes } from '../relations/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import {
  IBrowseInstrumentsQuery,
  IBrowseInstrumentsResult,
  IInstrumentList,
} from '../search/index.js';

export type InstrumentType =
  | 'Wind instrument'
  | 'String instrument'
  | 'Percussion instrument'
  | 'Electronic instrument'
  | 'Family'
  | 'Ensemble'
  | 'Other instrument';

export interface IInstrument
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres {
  disambiguation: string;
  name: string;
  type: InstrumentType;
  description: string;
}

export type InstrumentEntity = {
  inc: MiscIncludes;
  search: Search<SearchPayload<MiscIncludes>, IInstrumentList>;
  browse: Browse<IBrowseInstrumentsQuery, IBrowseInstrumentsResult>;
  lookup: Lookup<LookupPayload<MiscIncludes>, IInstrument>;
};
