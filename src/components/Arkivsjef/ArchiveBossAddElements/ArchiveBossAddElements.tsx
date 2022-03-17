import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import styles from "./ArchiveBossAddElements.module.css";

/** TODO:
 * [X] Bruke AutoComplete slik at man kan velge mellom kategori/album/sted
 * [] Lag POST funksjonene
 * [] Bruke POST-endepunktene
 */

const ArchiveBossAddElements = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  /** TODO: Bruk Post-Endepunktene */
  const handleCreate = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const types = ["Kategori", "Sted", "Album"];

  const [type, setType] = useState(types[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <div>
      <IconButton aria-label="add" onClick={handleClickOpen}>
        <AddCircle className={styles.svgicon} />
      </IconButton>
      <Typography onClick={handleClickOpen}>Legg til ny</Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Legg til nytt album, ny kategori eller nytt sted
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Her kan du legge til nytt album, ny kategori eller nytt sted. Denne
            funksjonen skal hovedsakelig brukes av arkivsjef.
          </DialogContentText>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleChange}
            >
              {types.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="name"
            label="Navn"
            type="Navn"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Avbryt</Button>
          <Button variant="contained" onClick={handleCreate}>
            Lag ny
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ArchiveBossAddElements;
