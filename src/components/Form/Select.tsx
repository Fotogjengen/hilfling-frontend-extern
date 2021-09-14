import React, { FC, useState } from "react";
import {
  createStyles,
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import cx from "classnames";
import { FormFieldProps, FormHelperTextWrapperProps } from "./types";
import { useForm } from "./Form";

const styles = () =>
  createStyles({
    helperText: {
      color: "red",
    },
    formControl: {
      width: "100%",
    },
  });
let idCount = 0;

const Select: FC<FormFieldProps<SelectProps & WithStyles<typeof styles>>> = ({
  name,
  label,
  classes,
  children,
  ...rest
}) => {
  const { values, errors, onChange } = useForm();
  const [touched, setTouched] = useState<boolean>(false);
  const id = `Select-${name}-${idCount++}`;
  const error = touched && errors[name];
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MuiSelect
        id={id}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        value={values[name]}
        fullWidth
        {...rest}
      >
        {children}
      </MuiSelect>
      <FormHelperText className={classes.helperText}>{error}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(Select);
