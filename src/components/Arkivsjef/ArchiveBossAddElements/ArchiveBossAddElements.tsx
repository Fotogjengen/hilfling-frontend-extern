import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Typography, MenuItem, Radio, RadioGroup} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import styles from "./ArchiveBossAddElements.module.css";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import * as yup from "yup";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { AlbumApi } from "../../../utils/api/AlbumApi";

/** TODO:
 * [X] Bruke AutoComplete slik at man kan velge mellom kategori/album/sted
 * [X] Lag POST funksjonene
 * [X] Fikse form-en og validering :)
 *    [X] Fikse navn
 *    [X] Fikse type
 * [X] Bruke POST-endepunktene
 * [] Fikse håndtering av album
 * [] Fikse slik at det oppdateres automatisk
 *    - Idé bruke react-context!
 */

const ArchiveBossAddElements = () => {
  const [open, setOpen] = useState(false);
  const types = ["Kategori", "Sted", "Album"];

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values: FormikValues) => {
    if (values.type == "Kategori") {
      CategoryApi.post({ name: values.name })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } else if (values.type == "Sted") {
      PlaceApi.post({ name: values.name })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } else if (values.type == "Album") {
      console.log(values.name, values.type);
      console.log({ title: values.name, analog: true });
      AlbumApi.post({ title: values.name, analog: true })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
    setOpen(false);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Sliten? Du må fylle inn navn <3"),
    type: yup
      .string()
      .required("Du må legge til typen: kategori, sted eller album"),
    radioGroup: yup.string().required("A radio option is required")
  });
  const initialValues = {
    name: "",
    type: "",
    radioGroup: ""
  };

  return (
    <div>
      <IconButton aria-label="add" onClick={handleClickOpen}>
        <AddCircle className={styles.svgicon} />
      </IconButton>
      <Typography onClick={handleClickOpen}>Legg til ny</Typography>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <DialogTitle>
                Legg til nytt album, ny kategori eller nytt sted
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Her kan du legge til nytt album, ny kategori eller nytt sted.
                  Denne funksjonen skal hovedsakelig brukes av arkivsjef.
                </DialogContentText>
                <br />
                <Field
                  as={TextField}
                  name="name"
                  label="Navn"
                  error={props.errors.name && props.touched.name}
                  fullWidth
                />
                <Field
                  as={TextField}
                  sx={{ marginTop: 1.5 }}
                  name="type"
                  label="Type"
                  error={props.errors.type && props.touched.type}
                  fullWidth
                  select
                >
                  {types.map((type, index) => {
                    return (
                      <MenuItem value={type} key={index}>
                        {type}
                      </MenuItem>
                    );
                  })}
                </Field>
                <ErrorMessage name="name" />
                <ErrorMessage name="type" />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Avbryt</Button>
                <Button variant="contained" type="submit">
                  Lag ny
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default ArchiveBossAddElements;
