import { BaseInterface } from './BaseInterface';
import { Motive } from './Motive';
import { Place } from './Place';
import { Gang } from './Gang';
import { PhotoGangBanger } from './PhotoGangBanger';

export interface Photo extends BaseInterface {
  title: string;
  motive: Motive;
  place: Place;
  securityLevel: SecurityLevel;
  gang: Gang;
  photoGangBanger: PhotoGangBanger;
}
