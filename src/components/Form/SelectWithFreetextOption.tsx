import React, { FC, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps,
  TextField as MuiTextField,
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

interface Props {
  freetextOptionName: string;
}

const SelectWithFreetextOption: FC<
  FormFieldProps<SelectProps & Props & WithStyles<typeof styles>>
> = ({
  name,
  label,
  classes,
  fullWidth,
  children,
  freetextOptionName,
  disabled,
  ...rest
}) => {
  const { values, errors, onChange } = useForm();
  const [touched, setTouched] = useState<boolean>(false);
  const id = `SelectWithFreetextOption-${name}-${idCount++}`;
  const error = touched && errors[name];
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MuiSelect
        id={id}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        value={values[name]}
        onBlur={() => setTouched(true)}
        disabled={disabled}
        {...rest}
      >
        {children}
      </MuiSelect>

      <FormHelperText className={classes.helperText}>{error}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(SelectWithFreetextOption);
