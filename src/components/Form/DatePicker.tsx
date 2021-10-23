import React, { FC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import { FormFieldProps } from "./types";
import { useForm } from "./Form";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

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
> = ({ name, label, fullWidth, ...rest }) => {
  const { values, onChange } = useForm();
  // const [touched, setTouched] = useState<boolean>(false);
  const id = `DatePicker-${name}-${idCount++}`;
  // const error = touched && errors[name];

  const handleDateChange = (date: MaterialUiPickersDate) => {
    onChange(name, date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id={id}
        label={label}
        value={values[name]}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        fullWidth={fullWidth}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DatePicker);
