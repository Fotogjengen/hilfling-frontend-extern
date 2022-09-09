import React, { FC, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps,
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

const Select: FC<FormFieldProps<SelectProps & WithStyles<typeof styles>>> = ({
  name,
  label,
  classes,
  fullWidth,
  children,
  ...rest
}) => {
  const { values, errors, onChange } = useForm();
  const [touched, setTouched] = useState<boolean>(false);
  const id = `Select-${name}-${idCount++}`;
  const error = touched && errors[name];
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={`${id}-label-id`} htmlFor={name}>{label}</InputLabel>
      <MuiSelect
        id={id}
        labelId={`${id}-label-id`}
        name={name}
        label={label}
        onChange={(e) => onChange(name, e.target.value)}
        value={values[name]}
        onBlur={() => setTouched(true)}
        {...rest}
      >
        {children}
      </MuiSelect>
      <FormHelperText className={classes.helperText}>{error}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(Select);
