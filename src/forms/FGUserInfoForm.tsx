import React, {FC, useState} from "react";
import Form from "../components/Form/Form";
import { Grid } from "@mui/material";
import { Errors, Validate } from "../components/Form/types";
import TextField from "../components/Form/TextField";

export interface FGUserInfoFormIV {
  firstName?: string;
  lastName?: string;
  relationShipStatus?: string;
  semesterStart?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  active?: boolean;
  pang?: boolean;
  username?: string;
  phoneNumber?: string;
  email?: string;
  profilePicturePath?: string;
  sex?: string;
}

interface Props {
  initialValues: FGUserInfoFormIV;
}

const FGUserInfoForm: FC<Props> = ({ initialValues }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = (values: Record<string, any>) => {
    console.log("submit");
    setIsEditing(!isEditing);


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
            <TextField
                name="relationShipStatus"
                label="Sivilstatus"
                fullWidth
                required
                disabled={!isEditing}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default FGUserInfoForm;
