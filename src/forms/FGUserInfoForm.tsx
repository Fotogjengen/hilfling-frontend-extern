import React, { FC, useState } from "react";
import Form from "../components/Form/Form";
import { Grid, MenuItem } from "@mui/material";
import { Errors, Validate } from "../components/Form/types";
import TextField from "../components/Form/TextField";
import { PhotoGangBangerApi } from "../utils/api/PhotoGangBangerApi";
import {
  PhoneNumber,
  PhotoGangBangerDto,
  PhotoGangBangerPatchRequestDto,
  PhotoGangBangerPatchRequestDtoBuilder,
  RelationShipStatus,
  SamfundetUserPatchRequestDto,
  SamfundetUserPatchRequestDtoBuilder,
  SemesterStart,
} from "../generated";
import Select from "../components/Form/Select";

export interface FGUserInfoFormIV {
  firstName?: string;
  lastName?: string;
  relationShipStatus?: RelationShipStatus;
  semesterStart?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  active?: boolean;
  pang?: boolean;
  username?: string;
  phoneNumber?: PhoneNumber;
  email?: string;
  profilePicturePath?: string;
  sex?: string;
}

interface Props {
  initialValues: FGUserInfoFormIV;
  gangBanger: PhotoGangBangerDto;
}

const FGUserInfoForm: FC<Props> = ({ initialValues, gangBanger }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = (values: FGUserInfoFormIV): Promise<boolean | null> => {
    const returnValue: boolean | null = null;
    setIsEditing(!isEditing);

    if (!isEditing) {
      return new Promise<boolean | null>((resolve) => resolve(null));
    }

    const firstName =
      values.firstName !== gangBanger.samfundetUser?.firstName &&
      values.firstName
        ? values.firstName
        : undefined;
    const lastName =
      values.lastName !== gangBanger.samfundetUser?.lastName && values.lastName
        ? values.lastName
        : undefined;
    const phoneNumber =
      values.phoneNumber !== gangBanger.samfundetUser?.phoneNumber &&
      values.phoneNumber
        ? values.phoneNumber
        : undefined;
    console.log(typeof phoneNumber);
    const sex =
      values.sex !== gangBanger.samfundetUser?.sex && values.sex
        ? values.sex
        : undefined;

    const address =
      values.address !== gangBanger.address && values.address
        ? values.address
        : undefined;
    const zipCode =
      values.zipCode !== gangBanger.zipCode && values.zipCode
        ? values.zipCode
        : undefined;
    const semesterStart: SemesterStart | undefined =
      values.semesterStart !== gangBanger.semesterStart?.value &&
      values.semesterStart
        ? ({ value: values.semesterStart } as SemesterStart)
        : undefined;
    const city =
      values.city !== gangBanger.city && values.city ? values.city : undefined;
    const relationshipStatus =
      values.relationShipStatus !== gangBanger.relationShipStatus &&
      values.relationShipStatus
        ? values.relationShipStatus
        : undefined;

    if (
      gangBanger.photoGangBangerId &&
      gangBanger.samfundetUser?.samfundetUserId
    ) {
      const samfundetUserPatchRequestDto: SamfundetUserPatchRequestDto =
        new SamfundetUserPatchRequestDtoBuilder(
          gangBanger.samfundetUser.samfundetUserId,
        )
          .withFirstName(firstName)
          .withLastName(lastName)
          .withPhoneNumber(phoneNumber)
          .withSex(sex).dto;

      const request: PhotoGangBangerPatchRequestDto =
        new PhotoGangBangerPatchRequestDtoBuilder(gangBanger.photoGangBangerId)
          .withSamfundetUser(samfundetUserPatchRequestDto)
          .withAddress(address)
          .withZipCode(zipCode)
          .withCity(city)
          .withSemesterStart(semesterStart)
          .withRelationShipStatus(relationshipStatus).dto;

      console.log(request);

      return PhotoGangBangerApi.patch(request)
        .then(() => true)
        .catch(() => false);
    }
    return new Promise<boolean | null>((resolve) => resolve(false));
  };

  const validate: Validate = (values: any): Errors => {
    // TODO: Do validation
    console.log("validate", values);
    const errors: Errors = {};
    return errors;
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
        submitButtonDisabled={false}
        submitButtonText={isEditing ? "Lagre" : "Rediger"}
        variant="text"
      >
        <Grid container spacing={2}>
          {/*Fornavn*/}
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="Fornavn"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Last name*/}
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label="Etternavn"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Semesterstart*/}
          <Grid item xs={12}>
            <TextField
              name="semesterStart"
              label="Semesterstart"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Address*/}
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Adresse"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Zip code*/}
          <Grid item xs={12}>
            <TextField
              name="zipCode"
              label="Postnummer"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*City*/}
          <Grid item xs={12}>
            <TextField
              name="city"
              label="By"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Phone number*/}
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Tlf."
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Sex*/}
          <Grid item xs={12}>
            <TextField
              name="sex"
              label="Kjønn"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
          {/*Relationship status*/}
          <Grid item xs={12}>
            <Select
              name="relationShipStatus"
              label="Sivilstatus"
              fullWidth
              required
              disabled={!isEditing}
            >
              <MenuItem
                key={`relationshipstatus-single`}
                value={RelationShipStatus.SINGLE}
              >
                {RelationShipStatus.SINGLE}
              </MenuItem>
              <MenuItem
                key={`relationshipstatus-married`}
                value={RelationShipStatus.MARRIED}
              >
                {RelationShipStatus.MARRIED}
              </MenuItem>
              <MenuItem
                key={`relationshipstatus-relationship`}
                value={RelationShipStatus.RELATIONSHIP}
              >
                {RelationShipStatus.RELATIONSHIP}
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default FGUserInfoForm;
