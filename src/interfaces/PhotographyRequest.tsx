import { BaseModel } from './BaseModel';

export interface PhotographyRequest extends BaseModel {
  startTime: string;
  endTime: string;
  place: string;
  intern: boolean;
  type: string;
  email: string;
  phone: string;
  description: string;
}
