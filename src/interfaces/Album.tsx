import { BaseInterface } from './BaseInterface';

export interface Album extends BaseInterface {
  title: string;
  dateCreated: string;
  analog: boolean;
}
