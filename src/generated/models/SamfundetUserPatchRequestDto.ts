import { SamfundetUserId } from "./SamfundetUserId";
import { PhoneNumber } from "./PhoneNumber";
import { Email } from "./Email";
import { SecurityLevelDto } from "./SecurityLevelDto";
import { PatchRequest } from "./PatchRequest";

export type SamfundetUserPatchRequestDto = {
  samfundetUserId: SamfundetUserId;
  firstName?: string;
  lastName?: string;
  username?: string;
  phoneNumber?: PhoneNumber;
  email?: Email;
  profilePicturePath?: string;
  sex?: string;
  securityLevel?: SecurityLevelDto;
};

export class SamfundetUserPatchRequestDtoBuilder
  implements PatchRequest<SamfundetUserPatchRequestDto>
{
  dto: SamfundetUserPatchRequestDto;

  constructor(id: SamfundetUserId) {
    this.dto = {
      samfundetUserId: id,
    } as SamfundetUserPatchRequestDto;
  }

  withFirstName(firstName?: string): SamfundetUserPatchRequestDtoBuilder {
    if (firstName) {
      this.dto.firstName = firstName;
    }
    return this;
  }

  withLastName(lastName?: string): SamfundetUserPatchRequestDtoBuilder {
    if (lastName) {
      this.dto.lastName = lastName;
    }
    return this;
  }

  withUsername(username?: string): SamfundetUserPatchRequestDtoBuilder {
    if (username) {
      this.dto.username = username;
    }
    return this;
  }

  withPhoneNumber(
    phoneNumber?: PhoneNumber | string,
  ): SamfundetUserPatchRequestDtoBuilder {
    if (phoneNumber) {
      if (typeof phoneNumber === "string") {
        this.dto.phoneNumber = { value: phoneNumber } as PhoneNumber;
      } else {
        this.dto.phoneNumber = phoneNumber;
      }
    }
    return this;
  }

  withEmail(email?: Email): SamfundetUserPatchRequestDtoBuilder {
    if (email) {
      this.dto.email = email;
    }
    return this;
  }

  withProfilePicturePath(
    profilePicturePath?: string,
  ): SamfundetUserPatchRequestDtoBuilder {
    if (profilePicturePath) {
      this.dto.profilePicturePath = profilePicturePath;
    }
    return this;
  }

  withSex(sex?: string): SamfundetUserPatchRequestDtoBuilder {
    if (sex) {
      this.dto.sex = sex;
    }
    return this;
  }

  withSecurityLevel(securityLevel?: SecurityLevelDto) {
    if (securityLevel) {
      this.dto.securityLevel = securityLevel;
    }
    return this;
  }

  withAll(
    firstName?: string,
    lastName?: string,
    username?: string,
    phoneNumber?: PhoneNumber,
    email?: Email,
    profilePicturePath?: string,
    sex?: string,
    securityLevel?: SecurityLevelDto,
  ): SamfundetUserPatchRequestDtoBuilder {
    return this.withFirstName(firstName)
      .withLastName(lastName)
      .withUsername(username)
      .withPhoneNumber(phoneNumber)
      .withEmail(email)
      .withProfilePicturePath(profilePicturePath)
      .withSex(sex)
      .withSecurityLevel(securityLevel);
  }
}
