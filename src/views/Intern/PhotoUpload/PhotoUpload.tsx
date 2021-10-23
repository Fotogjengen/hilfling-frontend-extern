import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import PhotoUploadForm from "../../../forms/PhotoUploadForm";

const initialValues = {
  album: "",
  date: new Date(Date.now()),
  motive: "",
  tags: [],
  category: "",
  place: "",
  securityLevel: "",
};

const PhotoUpload: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PhotoUploadForm initialValues={initialValues} />
      </Grid>
    </Grid>
  );
};

export default PhotoUpload;
