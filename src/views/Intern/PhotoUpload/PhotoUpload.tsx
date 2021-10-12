import React, { FC, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import PhotoUploadForm from "../../../forms/PhotoUploadForm";
import { useDropzone } from "react-dropzone";
import cx from "classnames";
import styles from "./PhotoUpload.module.css";
import PhotoUploadPreview from "../../../components/PhotoUploadPreview/PhotoUploadPreview";
import { DragNDropFile } from "../../../types";
import { Errors, Validate } from "../../../components/Form/types";

interface Values {
  album: string;
  date: Date;
  motive: string;
  tags: string[];
  category: string;
  place: string;
  securityLevel: string;
}

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
  /*return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <PhotoUploadForm
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
        />
      </Grid>
      <Grid item xs={6}>
        <section>
          <div
            {...getRootProps({ className: "dropzone" })}
            className={cx(styles.dropzone)}
          >
            <input {...getInputProps()} />
            <p>Dra og slipp filer her, eller klikk for å velge filer.</p>
          </div>
          <aside>
            <ul className={styles.noStyleUl}>{renderFilePreview}</ul>
          </aside>
        </section>
      </Grid>
    </Grid>
  );*/
};

export default PhotoUpload;
