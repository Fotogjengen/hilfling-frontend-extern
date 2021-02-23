import { BaseModel } from "./BaseModel";
import { Photo } from "./Photo";
import { PurchaseOrder } from "./PurchaseOrder";

export interface PhotoOnPurchaseOrder extends BaseModel {
  photo: Photo;
  size: string;
  amount: number;
  purchaseOrder: PurchaseOrder;
}
