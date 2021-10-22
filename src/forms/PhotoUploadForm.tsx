import React, { FC, useEffect, useState } from "react";
import { Button, Grid, MenuItem } from "@material-ui/core";
import DatePicker from "../components/Form/DatePicker";
import Select from "../components/Form/Select";
import ChipField from "../components/Form/ChipField";
import TextField from "../components/Form/TextField";
import Form from "../components/Form/Form";
import { Errors, Validate } from "../components/Form/types";
import { DragNDropFile } from "../types";
import cx from "classnames";
import styles from "../views/Intern/PhotoUpload/PhotoUpload.module.css";
import { useDropzone } from "react-dropzone";
import PhotoUploadPreview from "../components/PhotoUploadPreview/PhotoUploadPreview";
import { Category } from "../interfaces/Category";
import { CategoryApi } from "../utils/api/CategoryApi";

interface Props {
  initialValues: any;
}

const PhotoUploadForm: FC<Props> = ({ initialValues }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".jpg,.jpeg,.png",
  });
  const [files, setFiles] = useState<DragNDropFile[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    CategoryApi.getAll()
      .then((res) => res?.data?.currentList)
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFiles(acceptedFiles as DragNDropFile[]);
  }, [acceptedFiles]);

  const onSubmit = (values: Record<string, unknown>) => {
    // TODO: Send to backend
    console.log("submit", values);
    files.forEach((file) => {
      console.log("file", file);
      // PhotoApi.post();
    });
  };
  const validate: Validate = (values: any): Errors => {
    // TODO: Do validation
    //console.log("validate", values);
    const errors: Errors = {};
    return errors;
  };

  const handleGoodPictureChange = (index: number) => {
    const newFiles: DragNDropFile[] = files;
    newFiles[index].isGoodPicture = !newFiles[index].isGoodPicture;
    setFiles(newFiles);
  };

  const renderFilePreview = files.map((file: DragNDropFile, index: number) => (
    <li className={styles.fileList} key={file.path}>
      <PhotoUploadPreview
        file={file}
        handleChange={() => handleGoodPictureChange(index)}
      />
    </li>
  ));

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Select name="album" label="Album" fullWidth required>
              <MenuItem value="v2021">Vår 2021</MenuItem>
              <MenuItem value="h2021">Høst 2021</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <DatePicker name="date" label="Dato" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField name="motive" label="Motiv" fullWidth required />
          </Grid>

          <Grid item xs={12}>
            <ChipField name="tags" label="Tags" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Select name="category" label="Kategori" fullWidth required>
              {categories.map((category) => {
                <MenuItem value={category.name}>{category.name}</MenuItem>;
              })}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Select name="place" label="Sted" fullWidth required>
              <MenuItem value="STORSALEN">Storsalen</MenuItem>
              <MenuItem value="AQUA">Aqua</MenuItem>
              <MenuItem value="RUNDHALLEN">Rundhallen</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Select
              name="securityLevel"
              label="Sikkerhetsnivå"
              fullWidth
              required
            >
              <MenuItem value="ALLE">ALLE</MenuItem>
              <MenuItem value="INTERN">INTERN</MenuItem>
              <MenuItem value="FG">FG</MenuItem>
            </Select>
          </Grid>
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
    </Form>
  );
};

export default PhotoUploadForm;
