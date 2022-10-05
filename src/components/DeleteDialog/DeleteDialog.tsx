import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React, { FC } from "react";
import styles from "./DeleteDialog.module.css";

interface Props {
  open: boolean;
  onClose: (value: boolean) => void;
  name?: string;
}

const DeleteDialog: FC<Props> = ({ open, onClose, name }: Props) => {
  const handleClose = () => {
    onClose(false);
  };

  const handleButtonClick = (value: boolean) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles.container}>
        <DialogTitle>Sikker på at du vil slette? {name} ?</DialogTitle>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            variant="outlined"
            onClick={() => handleButtonClick(false)}
          >
            Cancel
          </Button>
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => handleButtonClick(true)}
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
