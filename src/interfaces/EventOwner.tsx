import { BaseModel } from './BaseModel';

export interface EventOwner extends BaseModel {
  owner: string;
}
