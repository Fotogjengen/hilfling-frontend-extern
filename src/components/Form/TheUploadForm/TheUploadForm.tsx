import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import Form from "../Form";
import SubmitButton from "../../Field/SubmitButton/SubmitButton";
import { Errors, Validate } from "../../Field/types";

const initialValues = {
  test: "no",
};

interface FormValues {
  test: string;
  [key: string]: string;
}

const TheUploadForm: FC = () => {
  const onSubmit = () => {
    console.log("hei");
  };

  const validate: Validate<FormValues> = ({ test }) => {
    const errors: Errors<FormValues> = {};
    return errors;
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        <Grid container>
          <Grid item xs={12}>
            <SubmitButton float="right">Submit</SubmitButton>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default TheUploadForm;
