export type ArtistType = 'Person' | 'Group' | string;
export type ArtistKind = 'person' | 'group';
export type ArtistLabel = 'Solo artist' | 'Band';

export interface MBArtist {
  id: string;
  name: string;
  score?: number;
  type?: ArtistType;
  disambiguation?: string;
  country?: string;
}
