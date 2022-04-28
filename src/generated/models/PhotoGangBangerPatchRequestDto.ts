import { PhotoGangBangerId } from "./PhotoGangBangerId";
import { SemesterStart } from "./SemesterStart";
import { PositionDto } from "./PositionDto";
import { PhotoGangBangerDto, RelationShipStatus } from "./PhotoGangBangerDto";
import {
  SamfundetUserPatchRequestDto,
  SamfundetUserPatchRequestDtoBuilder,
} from "./SamfundetUserPatchRequestDto";
import { PatchRequest } from "./PatchRequest";

export type PhotoGangBangerPatchRequestDto = {
  photoGangBangerId: PhotoGangBangerId;
  relationShipStatus?: RelationShipStatus;
  semesterStart?: SemesterStart;
  address?: string;
  zipCode?: string;
  city?: string;
  samfundetUser?: SamfundetUserPatchRequestDto;
  position?: PositionDto;
  isActive?: boolean;
  isPang?: boolean;
};

export class PhotoGangBangerPatchRequestDtoBuilder
  implements PatchRequest<PhotoGangBangerPatchRequestDto>
{
  dto: PhotoGangBangerPatchRequestDto;

  constructor(id: PhotoGangBangerId) {
    this.dto = {
      photoGangBangerId: id,
    } as PhotoGangBangerPatchRequestDto;
  }

  withRelationShipStatus(
    relationShipStatus?: RelationShipStatus,
  ): PhotoGangBangerPatchRequestDtoBuilder {
    if (relationShipStatus) {
      this.dto.relationShipStatus = relationShipStatus;
    }
    return this;
  }

  withSemesterStart(
    semesterStart?: SemesterStart,
  ): PhotoGangBangerPatchRequestDtoBuilder {
    if (semesterStart) {
      this.dto.semesterStart = semesterStart;
    }
    return this;
  }

  withAddress(address?: string): PhotoGangBangerPatchRequestDtoBuilder {
    if (address) {
      this.dto.address = address;
    }
    return this;
  }

  withZipCode(zipcode?: string): PhotoGangBangerPatchRequestDtoBuilder {
    if (zipcode) {
      this.dto.zipCode = zipcode;
    }
    return this;
  }

  withCity(city?: string): PhotoGangBangerPatchRequestDtoBuilder {
    if (city) {
      this.dto.city = city;
    }
    console.log(this.dto)
    return this;
  }

  withSamfundetUser(
    samfundetUser?: SamfundetUserPatchRequestDto,
  ): PhotoGangBangerPatchRequestDtoBuilder {
    if (samfundetUser) {
      this.dto.samfundetUser = new SamfundetUserPatchRequestDtoBuilder(
        samfundetUser.samfundetUserId,
      ).withAll(
        samfundetUser.firstName,
        samfundetUser.lastName,
        samfundetUser.username,
        samfundetUser.phoneNumber,
        samfundetUser.email,
        samfundetUser.profilePicturePath,
        samfundetUser.sex,
        samfundetUser.securityLevel,
      ).dto;
    }
    return this;
  }

  withPosition(position?: PositionDto): PhotoGangBangerPatchRequestDtoBuilder {
    if (position) {
      this.dto.position = position;
    }
    return this;
  }

  withIsActive(isActive?: boolean): PhotoGangBangerPatchRequestDtoBuilder {
    if (isActive !== undefined) {
      this.dto.isActive = isActive;
    }
    return this;
  }

  withIsPang(isPang?: boolean): PhotoGangBangerPatchRequestDtoBuilder {
    if (isPang !== undefined) {
      this.dto.isPang = isPang;
    }
    return this;
  }

  withAll(
    relationShipStatus?: RelationShipStatus,
    semesterStart?: SemesterStart,
    address?: string,
    zipCode?: string,
    city?: string,
    samfundetUser?: SamfundetUserPatchRequestDto,
    position?: PositionDto,
    isActive?: boolean,
    isPang?: boolean,
  ): PhotoGangBangerPatchRequestDtoBuilder {
    return this.withRelationShipStatus(relationShipStatus)
      .withSemesterStart(semesterStart)
      .withAddress(address)
      .withZipCode(zipCode)
      .withCity(city)
      .withSamfundetUser(samfundetUser)
      .withPosition(position)
      .withIsActive(isActive)
      .withIsPang(isPang);
  }
}
