import type { ITypedEntity } from '../common/index.js';

export interface ICollection extends ITypedEntity {
  type: 'Recording collection';
  name: string;
  'recording-count': number;
  editor: string;
  'entity-type': string;
}

