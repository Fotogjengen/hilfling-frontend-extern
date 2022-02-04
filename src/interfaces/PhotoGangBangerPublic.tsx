import { BaseModel } from "./BaseModel";

export interface PhotoGangBangerPublic extends BaseModel {
  photoGangBangerId: {
    [id: string]: string;
  };
  semesterStart: {
    [key: string]: string;
  };
  samfundetUserPublic: {
    samfundetUserId: {
      id: string;
    };
    firstName: string;
    lastName: string;
    phoneNumber: {
      value: string;
    };
    email: {
      value: string;
    };
    profilePicturePath: string;
  };
  position: {
    positionId: {
      id: string;
    };
    title: string;
    email: {
      value: string;
    };
  };
  active: boolean;
  pang: boolean;
}
