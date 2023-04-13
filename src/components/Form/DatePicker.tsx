import React, { FC } from "react";
import { createStyles, withStyles, WithStyles } from "@mui/styles";
import { FormFieldProps } from "./types";
import { useForm } from "./Form";
import { LocalizationProvider, MobileDatePicker, MobileDatePickerProps } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, TextFieldProps } from "@mui/material";

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
  FormFieldProps<MobileDatePickerProps<Date>> &
    WithStyles<typeof styles> & { fullWidth?: boolean }
> = ({ name, label, fullWidth = false }) => {
  const { values, onChange } = useForm();
  // const id = `DatePicker-${name}-${idCount++}`;

  const handleDateChange = (date: Date | null) => {
    onChange(name, date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        format="dd/MM/yyyy"
        label={label}
        value={values[name]}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            fullWidth: fullWidth,
            helperText: "DD / MM / YYYY"
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default withStyles(styles)(DatePicker);
