import { BaseInterface } from './BaseInterface';

export interface PhotographyRequest extends BaseInterface {
  startTime: string;
  endTime: string;
  place: string;
  intern: boolean;
  type: string;
  email: string;
  phone: string;
  description: string;
}
