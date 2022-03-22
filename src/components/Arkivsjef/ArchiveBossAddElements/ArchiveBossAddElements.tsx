import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  IconButton,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import styles from "./ArchiveBossAddElements.module.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
import * as yup from "yup";

/** TODO:
 * [X] Bruke AutoComplete slik at man kan velge mellom kategori/album/sted
 * [X] Lag POST funksjonene
 * [] Fikse form-en og validering :)
 * [] Bruke POST-endepunktene
 */

const ArchiveBossAddElements = () => {
  const [open, setOpen] = useState(false);
  const types = ["Kategori", "Sted", "Album"];

  const handleClickOpen = () => {
    setOpen(true);
  };

  /** TODO: Bruk Post-Endepunktene */

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (
    values: FormikValues,
    props: FormikHelpers<{ name: string }>,
  ) => {
    console.log(props);
    console.log(values);
    setOpen(false);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Sliten? Du må fylle inn navn <3"),
  });
  const initialValues = {
    name: "",
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
                  helperText={<ErrorMessage name="name" />}
                  fullWidth
                />
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
