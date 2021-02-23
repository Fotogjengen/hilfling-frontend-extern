import { BaseModel } from "./BaseModel";
import { SecurityLevel } from "./SecurityLevel";
import { PhotoGangBanger } from "./PhotoGangBanger";

export interface Article extends BaseModel {
  tag: string;
  title: string;
  content: string;
  datePublished: string;
  securityLevel: SecurityLevel;
  photoGangBanger: PhotoGangBanger;
}
