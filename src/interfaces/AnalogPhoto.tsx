import { BaseModel } from "./BaseModel";
import { Photo } from "./Photo";

export interface AnalogPhoto extends BaseModel, Photo {
  imageNumber: number;
  pageNumber: number;
}
