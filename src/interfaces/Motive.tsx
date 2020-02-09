import { BaseModel } from './BaseModel';
import { Category } from './Category';
import { EventOwner } from './EventOwner';

export interface Motive extends BaseModel {
  title: string;
  dateTaken: string;
  category: Category;
  eventOwner: EventOwner;
}
