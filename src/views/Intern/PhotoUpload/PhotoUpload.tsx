import React, { FC } from "react";
import { ValidationErrors } from "final-form";
import { Grid } from "@material-ui/core";
import PhotoUploadForm from "../../../forms/PhotoUploadForm";
import { useDropzone } from "react-dropzone";
import cx from "classnames";
import styles from "./PhotoUpload.module.css";
import { GuiImageCard } from "../../../gui-components";
import PhotoUploadPreview from "../../../components/PhotoUploadPreview/PhotoUploadPreview";
import { DragNDropFile } from "../../../types";

interface Values {
  album: string;
  date: Date;
  motive: string;
  tags: string[];
  category: string;
  place: string;
  securityLevel: string;
}

const initialValues: Values = {
  album: "",
  date: new Date(),
  motive: "",
  tags: [],
  category: "",
  place: "",
  securityLevel: "",
};

const PhotoUpload: FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".jpg,.jpeg,.png",
  });

  const files = (acceptedFiles as DragNDropFile[]).map(
    (file: DragNDropFile, index: number) => (
      <li className={styles.fileList} key={file.path}>
        <PhotoUploadPreview file={file} />
      </li>
    ),
  );

  const onSubmit = (values: Record<string, unknown>) => {
    console.log("submit");
    /*console.log(values);*/
  };
  const validate = (values: Record<string, unknown>): ValidationErrors => {
    /*console.log("validate");
    console.log(values);*/
    const errors: ValidationErrors = {};
    return errors;
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PhotoUploadForm onSubmit={onSubmit} validate={validate} />
        </Grid>
        <Grid item xs={6}>
          <section>
            <div
              {...getRootProps({ className: "dropzone" })}
              className={cx(styles.dropzone)}
            >
              <input {...getInputProps()} />
              <p>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>
            </div>
            <aside>
              <ul className={styles.noStyleUl}>{files}</ul>
            </aside>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhotoUpload;
