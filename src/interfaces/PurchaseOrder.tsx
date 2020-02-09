import { BaseInterface } from './BaseInterface';

export interface PurchaseOrder extends BaseInterface {
  name: string;
  email: string;
  address: string;
  zipCode: number;
  city: string;
  sendByPost: boolean;
  comment: string;
  dateCreated: string;
  completed: boolean;
}
