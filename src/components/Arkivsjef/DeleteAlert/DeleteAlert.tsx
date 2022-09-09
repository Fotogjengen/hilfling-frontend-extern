import React, { FC } from "react";
import { Collapse, Alert } from "@mui/material";
import styles from "./Alert.module.css";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
}

const DeleteAlert: FC<Props> = ({ open, setOpen, message }: Props) => {
  return (
    <Collapse in={open} className={styles.collapse}>
      <div onClick={() => setOpen(false)}>
        <Alert severity="success" sx={{ boxShadow: 4 }}>
          {" "}
          {message}{" "}
        </Alert>
      </div>
    </Collapse>
  );
};

export default DeleteAlert;
