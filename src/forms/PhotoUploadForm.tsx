import React, { FC, useEffect, useState } from "react";
import { Grid, MenuItem } from "@mui/material";
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
import { CategoryApi } from "../utils/api/CategoryApi";
import {
  AlbumDto,
  CategoryDto,
  EventOwnerDto,
  PlaceDto,
  SecurityLevelDto,
} from "../generated";
import { PlaceApi } from "../utils/api/PlaceApi";
import { SecurityLevelApi } from "../utils/api/SecurityLevelApi";
import { AlbumApi } from "../utils/api/AlbumApi";
import { PhotoApi } from "../utils/api/PhotoApi";
import { EventOwnerApi } from "../utils/api/EventOwnerApi";

export interface PhotoUploadFormIV {
  album: string;
  date: Date;
  motive: string;
  tags: string[];
  category: string;
  place: string;
  securityLevel: string;
  eventOwner: string;
}

interface Props {
  initialValues: PhotoUploadFormIV;
}

const PhotoUploadForm: FC<Props> = ({ initialValues }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".jpg,.jpeg,.png",
  });
  const [files, setFiles] = useState<DragNDropFile[]>([]);
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [eventOwners, setEventOwners] = useState<EventOwnerDto[]>([]);
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [securityLevels, setSecurityLevels] = useState<SecurityLevelDto[]>([]);

  useEffect(() => {
    AlbumApi.getAll()
      .then((res) => setAlbums(res.data.currentList))
      .catch((err) => console.error(err));

    CategoryApi.getAll()
      .then((res) => setCategories(res.data.currentList))
      .catch((err) => console.error(err));

    EventOwnerApi.getAll()
      .then((res) => setEventOwners(res.data.currentList))
      .catch((err) => console.error(err));

    PlaceApi.getAll()
      .then((res) => setPlaces(res.data.currentList))
      .catch((err) => console.error(err));

    SecurityLevelApi.getAll()
      .then((res) => setSecurityLevels(res.data.currentList))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFiles(
      (acceptedFiles as DragNDropFile[]).map((file) => {
        file.isGoodPicture = false;
        return file;
      }),
    );
  }, [acceptedFiles]);

  useEffect(() => {
    console.log("categories");
    console.log(categories);
  }, [categories]);

  const onSubmit = (values: Record<string, any>): Promise<boolean | null> => {
    const formData = new FormData();
    formData.append("motiveTitle", values["motive"]);
    formData.append("securityLevelId", values["securityLevel"]);
    formData.append("placeName", values["place"]);
    formData.append("albumId", values["album"]);
    formData.append("categoryName", values["category"]);
    formData.append("eventOwnerName", values["eventOwner"]);
    formData.append(
      "photoGangBangerId",
      "6a89444f-25f6-44d9-8a73-94587d72b839",
    ); // TODO: Use actual user Id
    files.forEach((dragNDropFile, index) => {
      formData.append(
        "isGoodPhotoList",
        JSON.stringify(dragNDropFile.isGoodPicture),
      );
      formData.append("tagList", values["tags"]);
      formData.append("photoFileList", acceptedFiles[index]);
    });

    return PhotoApi.batchUpload(formData)
      .then(() => true)
      .catch(() => false)
      .finally(() => {
        setFiles([]);
      });
  };

  const validate: Validate = (values: any): Errors => {
    // TODO: Do validation
    console.log("validate", values);
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
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validate}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select name="album" label="Album" fullWidth required>
                  {albums.map((album, index) => (
                    <MenuItem
                      key={`album-item-${index}`}
                      value={album?.albumId?.id}
                    >
                      {album.title}
                    </MenuItem>
                  ))}
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
                  {categories.map((category, index) => (
                    <MenuItem
                      key={`category-item-${index}`}
                      value={category.name}
                    >
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12}>
                <Select name="place" label="Sted" fullWidth required>
                  {places.map((place, index) => (
                    <MenuItem key={`place-item-${index}`} value={place.name}>
                      {place.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12}>
                <Select
                  name="securityLevel"
                  label="Sikkerhetsnivå"
                  fullWidth
                  required
                >
                  {securityLevels.map((securityLevel, index) => (
                    <MenuItem
                      key={`security-level-item-${index}`}
                      value={securityLevel?.securityLevelId?.id}
                    >
                      {securityLevel.securityLevelType}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select name="eventOwner" label="Eier" fullWidth required>
                  {eventOwners.map((eventOwner, index) => (
                    <MenuItem
                      key={`event-owner-item-${index}`}
                      value={eventOwner.name}
                    >
                      {eventOwner.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Form>
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
    </div>
  );
};

export default PhotoUploadForm;
