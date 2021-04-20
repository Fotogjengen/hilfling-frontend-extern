import React, { FC } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Field, Form } from "react-final-form";
import DatePicker from "../components/Form/DatePicker";
import Select from "../components/Form/Select";
import Checkbox from "../components/Form/Checkbox";
import { ValidationErrors } from "final-form";
import ChipField from "../components/Form/ChipField";

interface Props {
  onSubmit: (values: Record<string, unknown>) => void;
  validate: (values: Record<string, unknown>) => ValidationErrors;
}

const PhotoUploadForm: FC<Props> = ({ onSubmit, validate }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="album"
                component={Select}
                label="Album"
                formControlProps={{ fullWidth: true }}
              >
                <MenuItem value="v2021">Vår 2021</MenuItem>
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="date"
                component={DatePicker}
                type="datetime-local"
                label="Dato"
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="motive"
                component={TextField}
                type="text"
                label="Motiv"
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="tags"
                component={ChipField}
                type="array"
                label="Tags"
                formControlProps={{ fullWidth: true }}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="category"
                component={Select}
                label="Kategori"
                formControlProps={{ fullWidth: true }}
              >
                <MenuItem value="INTERIØR">INTERIØR</MenuItem>
                <MenuItem value="MILJØBILDE">MILJØBILDE</MenuItem>
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="place"
                component={Select}
                label="Place"
                formControlProps={{ fullWidth: true }}
              >
                <MenuItem value="STORSALEN">STORSALEN</MenuItem>
                <MenuItem value="INTERN">INTERN</MenuItem>
                <MenuItem value="FG">FG</MenuItem>
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="securityLevel"
                component={Select}
                label="Sikkerhetsnivå"
                formControlProps={{ fullWidth: true }}
              >
                <MenuItem value="ALLE">ALLE</MenuItem>
                <MenuItem value="INTERN">INTERN</MenuItem>
                <MenuItem value="FG">FG</MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    label="Bra bilde"
                    control={
                      <Field
                        name="goodPicture"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default PhotoUploadForm;
