import { BaseInterface } from './BaseInterface';

export interface PhotoGangBanger extends BaseInterface {
  relationshipStatus: string;
  semesterStart: string;
  active: boolean;
  pang: boolean;
  address: string;
  zipCode: number;
  city: string;
}
