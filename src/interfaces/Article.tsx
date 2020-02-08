import { BaseInterface } from './BaseInterface';
import { SecurityLevel } from './SecurityLevel';
import { PhotoGangBanger } from './PhotoGangBanger';

export interface Article extends BaseInterface {
  tag: string;
  title: string;
  content: string;
  datePublished: string;
  securityLevel: SecurityLevel;
  photoGangBanger: PhotoGangBanger;
}
