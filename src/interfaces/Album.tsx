import { BaseModel } from './BaseModel';

export interface Album extends BaseModel {
  title: string;
  dateCreated: string;
  analog: boolean;
}
