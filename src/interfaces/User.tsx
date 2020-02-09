import { BaseInterface } from './BaseInterface';

export interface User extends BaseInterface {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePicture: string;
  phoneNumber: string;
  sex: string;
}
