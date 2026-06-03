import { MiscIncludes } from '../relations/index.js';
import {
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import { ICdStubList } from '../search/index.js';

export interface ICdStub {
  id: string;
  title: string;
  artist: string;
  barcode: string;
  comment: string;
}

export type CdStubEntity = {
  inc: MiscIncludes;
  search: Search<SearchPayload<MiscIncludes>, ICdStubList>;
  lookup: Lookup<LookupPayload<MiscIncludes>, ICdStub>;
};
