import { BaseModel } from './BaseModel';
import { Motive } from './Motive';
import { Place } from './Place';
import { Gang } from './Gang';
import { PhotoGangBanger } from './PhotoGangBanger';
import { SecurityLevel } from './SecurityLevel';

export interface Photo extends BaseModel {
  title: string;
  motive: Motive;
  place: Place;
  securityLevel: SecurityLevel;
  gang: Gang;
  photoGangBanger: PhotoGangBanger;
}
