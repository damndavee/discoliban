import type { ITypedEntity } from '../common/index.js';

export interface IAlias extends ITypedEntity {
  name: string;
  'sort-name': string;
  ended: boolean;
  locale: string;
  primary: string;
  begin: string;
  end: string;
}

