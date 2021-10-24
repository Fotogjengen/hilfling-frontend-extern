import React, { FC, SyntheticEvent, useState } from "react";
import { Alert as MuiAlert, AlertProps } from "@material-ui/lab";
import { makeStyles, Theme, Snackbar as MuiSnackbar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

type Severity = "success" | "error" | "warning" | "info";

interface Props {
  message: string;
  severity: Severity;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Snackbar: FC<Props> = ({ message, severity, open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MuiSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
