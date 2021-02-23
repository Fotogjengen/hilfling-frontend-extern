import { BaseModel } from "./BaseModel";

export interface User extends BaseModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePicture: string;
  phoneNumber: string;
  sex: string;
}
