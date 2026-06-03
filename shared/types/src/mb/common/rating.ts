export interface IUserVote {
  count: number;
}

export interface IRating {
  value: number | null;
  'votes-count': number;
}

export interface ITag {
  name: string;
}

export type IUserTag = ITag & IUserVote;

export interface IGenre extends IUserVote {
  id?: string;
  name: string;
  disambiguation: string;
}

export interface IAnnotation {
  entity: string;
  name: string;
  text: string;
  type: string;
}

