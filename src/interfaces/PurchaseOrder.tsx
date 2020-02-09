import { BaseModel } from './BaseModel';

export interface PurchaseOrder extends BaseModel {
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
