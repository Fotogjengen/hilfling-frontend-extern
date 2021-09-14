import React, { FC, useState } from "react";
import {
  createStyles,
  TextField,
  TextFieldProps,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { FormFieldProps } from "./types";
import { useForm } from "./Form";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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

const DatePicker: FC<
  FormFieldProps<KeyboardDatePickerProps> & WithStyles<typeof styles>
> = ({ name, label, classes, children, ...rest }) => {
  const { values, errors, onChange } = useForm();
  const [touched, setTouched] = useState<boolean>(false);
  const id = `DatePicker-${name}-${idCount++}`;
  const error = touched && errors[name];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id={id}
        label={label}
        value={values[name]}
        onChange={(e) => onChange(name, e)}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DatePicker);
