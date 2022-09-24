import React, { FC } from "react";
import { Collapse, Alert as MUIAlert } from "@mui/material";
import styles from "./Alert.module.css";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
  severity: "error" | "warning" | "info" | "success";
}

const Alert: FC<Props> = ({ open, setOpen, message, severity }: Props) => {
  return (
    <Collapse in={open} className={styles.collapse}>
      <div onClick={() => setOpen(false)}>
        <MUIAlert severity={severity} sx={{ boxShadow: 4 }}>
          {" "}
          {message}{" "}
        </MUIAlert>
      </div>
    </Collapse>
  );
};

export default Alert;
