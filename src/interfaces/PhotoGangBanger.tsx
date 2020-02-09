import { BaseModel } from './BaseModel';

export interface PhotoGangBanger extends BaseModel {
  relationshipStatus: string;
  semesterStart: string;
  active: boolean;
  pang: boolean;
  address: string;
  zipCode: number;
  city: string;
}
