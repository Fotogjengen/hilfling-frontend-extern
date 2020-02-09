import { BaseInterface } from './BaseInterface';
import { Photo } from './Photo';

export interface AnalogPhoto extends BaseInterface, Photo {
  imageNumber: number;
  pageNumber: number;
}
