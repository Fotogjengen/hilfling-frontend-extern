import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import PhotoUploadForm, {
  PhotoUploadFormIV,
} from "../../../forms/PhotoUploadForm";

const initialValues: PhotoUploadFormIV = {
  album: "",
  date: new Date(Date.now()),
  motive: "",
  tags: [],
  category: "",
  place: "",
  securityLevel: "",
  eventOwner: "",
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
