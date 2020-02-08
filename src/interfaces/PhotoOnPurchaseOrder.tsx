import { BaseInterface } from './BaseInterface';
import { Photo } from './Photo';
import { PurchaseOrder } from './PurchaseOrder';

export interface PhotoOnPurchaseOrder extends BaseInterface {
  photo: Photo;
  size: string;
  amount: number;
  purchaseOrder: PurchaseOrder;
}
