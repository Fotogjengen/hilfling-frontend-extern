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
        submitButtonText={"Rediger"}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Navn"
              fullWidth
              required
              disabled={!isEditing}
            />
          </Grid>
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
