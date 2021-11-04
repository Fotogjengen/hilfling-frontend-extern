import React, { FC, useState } from "react";
import {
  FormControl,
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps,
} from "@mui/material";
import { withStyles, WithStyles, createStyles } from "@mui/styles";
import { FormFieldProps } from "./types";
import { useForm } from "./Form";

const styles = () =>
  createStyles({
    helperText: {
      color: "red",
    },
  });

let idCount = 0;

const TextField: FC<
  FormFieldProps<TextFieldProps> & WithStyles<typeof styles>
> = ({ name, label, classes, fullWidth }) => {
  const { errors, onChange, values } = useForm();
  const [touched, setTouched] = useState<boolean>(false);
  const id = `Select-${name}-${idCount++}`;
  const error = touched && errors[name];
  return (
    <FormControl fullWidth={fullWidth} id={id}>
      <MuiTextField
        label={label}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => setTouched(true)}
        value={values[name]}
      />
      <FormHelperText className={classes.helperText}>{error}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(TextField);
