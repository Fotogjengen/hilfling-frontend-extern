import React, { FC } from "react";
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import { Field, Form as RffForm } from "react-final-form";
import DatePicker from "../components/Form/DatePicker";
import Select from "../components/Form/Select";
import ChipField from "../components/Form/ChipField";
import Form from "../components/Form/Form";
import SubmitButton from "../components/Form/SubmitButton";
import { FormProps, Validate } from "../components/Form/types";

const PhotoUploadForm: FC<FormProps> = ({
  onSubmit,
  validate,
  initialValues,
}) => {
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          {/*<Field
            fullWidth
            required
            name="album"
            component={Select}
            label="Album"
            formControlProps={{ fullWidth: true }}
          >
            <MenuItem value="v2021">Vår 2021</MenuItem>
          </Field>*/}
          <Select name="album" label="Album" fullWidth required>
            <MenuItem value="v2021">Vår 2021</MenuItem>
            <MenuItem value="h2021">Høst 2021</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
          {/*<Field
            fullWidth
            required
            name="date"
            component={DatePicker}
            type="datetime-local"
            label="Dato"
          />*/}
          <DatePicker name="date" label="Dato" value={Date.now()} />
        </Grid>

        <Grid item xs={12}>
          {/*<Field
            fullWidth
            required
            name="motive"
            component={TextField}
            type="text"
            label="Motiv"
          />*/}
        </Grid>

        <Grid item xs={12}>
          {/*<Field
            fullWidth
            required
            name="tags"
            component={ChipField}
            type="array"
            label="Tags"
            formControlProps={{ fullWidth: true }}
          />*/}
        </Grid>

        <Grid item xs={12}>
          {/*<Field
            fullWidth
            required
            name="category"
            component={Select}
            label="Kategori"
            formControlProps={{ fullWidth: true }}
          >
            <MenuItem value="INTERIØR">INTERIØR</MenuItem>
            <MenuItem value="MILJØBILDE">MILJØBILDE</MenuItem>
          </Field>*/}
        </Grid>

        <Grid item xs={12}>
          {/* <Field
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
          </Field>*/}
        </Grid>

        <Grid item xs={12}>
          {/*<Field
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
          </Field>*/}
        </Grid>
        <Grid item xs={12}>
          <SubmitButton>Hei</SubmitButton>
        </Grid>
      </Grid>
    </Form>
  );
};

/*const PhotoUploadForm2: FC<Props> = ({ onSubmit, validate }) => {
  return (
    <RffForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit /!*submitting, pristine, values*!/ }) => (
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
              <Button variant="contained" color="primary" type="submit">
                Last opp
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};*/

export default PhotoUploadForm;
