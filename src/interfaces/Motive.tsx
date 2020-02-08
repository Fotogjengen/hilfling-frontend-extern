import { BaseInterface } from './BaseInterface';
import { Category } from './Category';
import { EventOwner } from './EventOwner';

export interface Motive extends BaseInterface {
  title: string;
  dateTaken: string;
  category: Category;
  eventOwner: EventOwner;
}
