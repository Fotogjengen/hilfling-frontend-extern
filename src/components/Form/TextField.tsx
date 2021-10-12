import React, { FC, useState } from "react";
import {
  createStyles,
  FormControl,
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps,
  withStyles,
  WithStyles,
} from "@material-ui/core";
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
> = ({ name, label, classes, children, fullWidth, ...rest }) => {
  const { values, errors, onChange } = useForm();
  const [touched, setTouched] = useState<boolean>(false);
  const id = `Select-${name}-${idCount++}`;
  const error = touched && errors[name];
  return (
    <FormControl fullWidth={fullWidth}>
      <MuiTextField
        label={label}
        onChange={(e) => onChange(name, e.target.value)}
        {...rest}
      />
      <FormHelperText className={classes.helperText}>{error}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(TextField);
