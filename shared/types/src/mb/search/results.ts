import type { IAnnotation, ITag } from '../common/rating.js';
import type {
  IMatch,
  IWork,
  IArea,
  IArtist,
  IEvent,
  ICdStub,
  IPlace,
  IInstrument,
  IUrl,
  ILabel,
  IRecording,
  ISeries,
  IRelease,
  IReleaseGroup,
} from '../entities/index.js';

type DateTimeFormat = Intl.DateTimeFormat

export interface ISearchResult {
  created: DateTimeFormat;
  count: number;
  offset: number;
}

export type IAnnotationMatch = IAnnotation & IMatch;
export interface IAnnotationList extends ISearchResult {
  annotations: IAnnotationMatch[];
}

export type IAreaMatch = IArea & IMatch;
export interface IAreaList extends ISearchResult {
  areas: IAreaMatch[];
}

export type IArtistMatch = IArtist & IMatch;
export interface IArtistList extends ISearchResult {
  artists: IArtistMatch[];
}

export type ICdStubMatch = ICdStub & IMatch;
export interface ICdStubList extends ISearchResult {
  cdstubs: ICdStubMatch[];
}

export type IEventMatch = IEvent & IMatch;
export interface IEventList extends ISearchResult {
  events: IEventMatch[];
}

export type IInstrumentMatch = IInstrument & IMatch;
export interface IInstrumentList extends ISearchResult {
  instruments: IInstrumentMatch[];
}

export type ILabelMatch = ILabel & IMatch;
export interface ILabelList extends ISearchResult {
  labels: ILabelMatch[];
}

export type IPlacesMatch = IPlace & IMatch;
export interface IPlaceList extends ISearchResult {
  places: IPlacesMatch[];
}

export type IReleaseMatch = IRelease & IMatch;
export interface IReleaseList extends ISearchResult {
  releases: IReleaseMatch[];
  'release-count': number;
}

export type IRecordingMatch = IRecording & IMatch;
export interface IRecordingList extends ISearchResult {
  recordings: IRecordingMatch[];
  'recordings-count': number;
}

export type IReleaseGroupMatch = IReleaseGroup & IMatch;
export interface IReleaseGroupList extends ISearchResult {
  'release-groups': IReleaseGroupMatch[];
}

export type ISeriesGroupMatch = ISeries & IMatch;
export interface ISeriesList extends ISearchResult {
  series: ISeriesGroupMatch[];
}

export type ITagMatch = ITag & IMatch;
export interface ITagList extends ISearchResult {
  tags: ITagMatch[];
}

export type IUrlMatch = IUrl & IMatch;
export interface IUrlList extends ISearchResult {
  urls: IUrlMatch[];
}

export type IWorkMatch = IWork & IMatch;
export interface IWorkList extends ISearchResult {
  works: IWorkMatch[];
}

export interface IReleaseSearchResult extends ISearchResult {
  releases: IRelease[];
}

