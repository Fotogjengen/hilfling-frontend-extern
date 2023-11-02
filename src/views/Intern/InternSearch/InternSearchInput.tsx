import React from "react";
import { useState, useRef } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./InternSearch.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, nbNO } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Cancel } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

interface ChipData {
  key: number;
  label: string;
}

const InternSearchInput: React.FC = () => {
  const boxwidth = 300;
  const motiv = [{ label: "Kult motiv", id: 1 }];
  const album = [{ label: "eksempelalbum", id: 2 }];
  const kategori = [{ label: "eksempelkategori", id: 3 }];
  const sted = [{ label: "eksempelsted", id: 4 }];
  const securityLevel = [{ label: "eksempel", id: 5 }];
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [tags, setTags] = useState<string[]>([]);
  const tagRef = useRef<HTMLInputElement | null>(null);
  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleBackspace = (event: React.KeyboardEvent) => {
    if (
      event.key === "Backspace" &&
      tagRef.current &&
      tagRef.current.value === ""
    ) {
      // Check if backspace is pressed and the input is empty
      if (chipData.length > 0) {
        // If there are tags, remove the last one
        const lastTag = chipData[chipData.length - 1];
        setChipData((chips) => chips.slice(0, -1));
      }
    }
  };

  const handleEnterPress = (event: React.KeyboardEvent) => {
    if (
      event.key === "Enter" &&
      tagRef.current &&
      tagRef.current.value.trim() !== ""
    ) {
      // Check if Enter key is pressed and the input is not empty
      const newLabel = tagRef.current.value.trim();

      // Create a new chip with a unique key
      const newChip = {
        key: Date.now(),
        label: newLabel,
      };

      // Add the new chip to chipData and clear the input field
      setChipData((chips) => [...chips, newChip]);
      tagRef.current.value = "";

      // Prevent the default behavior of the Enter key (form submission)
      event.preventDefault();
    }
  };

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips: any) =>
      chips.filter((chip: any) => chip.key !== chipToDelete.key),
    );
  };

  const handleOnSubmit = () => {
    console.log("subitted");
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      <div>
        <div className={styles.formTextField}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={album}
            sx={{ width: boxwidth }}
            renderInput={(params) => <TextField {...params} label="Album" />}
          />
        </div>
        <div className={styles.formTextField}>
          <TextField type="number" label="Side" sx={{ width: boxwidth }}>
            Side
          </TextField>
        </div>

        <div className={styles.formTextField}>
          <TextField type="number" label="Bildenummer" sx={{ width: boxwidth }}>
            Bildenummer
          </TextField>
        </div>

        <div className={styles.formTextField}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={motiv}
            sx={{ width: boxwidth }}
            renderInput={(params) => <TextField {...params} label="Motiv" />}
          />
        </div>

        <div className={styles.formTextField}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={"NO"}
            localeText={
              nbNO.components.MuiLocalizationProvider.defaultProps.localeText
            }
          >
            <DatePicker
              label={"Dato"}
              value={date}
              onChange={(newValue) => setDate(newValue)}
              format="DD/MM/YYYY"
              sx={{ width: boxwidth }}
            />
          </LocalizationProvider>
        </div>

        <div className={styles.formTextField}>
          <Autocomplete
            fullWidth
            disablePortal
            id="combo-box-demo"
            options={kategori}
            sx={{ width: boxwidth }}
            renderInput={(params) => <TextField {...params} label="Kategori" />}
          />
        </div>
        <div className={styles.formTextField}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={sted}
            sx={{ width: boxwidth }}
            renderInput={(params) => <TextField {...params} label="Sted" />}
          />
        </div>
        <form onSubmit={handleOnSubmit}>
          <TextField
            inputRef={tagRef}
            fullWidth
            variant="standard"
            size="small"
            sx={{ margin: "1rem 0" }}
            margin="none"
            placeholder={tags.length < 5 ? "Enter tags" : ""}
            InputProps={{
              startAdornment: (
                <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                  {chipData.map((data) => {
                    return (
                      <ListItem key={data.key}>
                        <Chip
                          label={data.label}
                          onDelete={handleDelete(data)}
                          color="primary"
                          avatar={<Avatar src="/pictures/Ole.jpg" alt="Ole" />}
                        />
                      </ListItem>
                    );
                  })}
                </Box>
              ),
            }}
            onKeyDown={handleBackspace} // Add this event listener for backspace key
            onKeyPress={handleEnterPress} // Add this event listener for Enter key
          />
        </form>
        <div className={styles.formTextField}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Oppslagsbilde" />
            <FormControlLabel
              control={<Checkbox />}
              label="Vises på forsiden"
            />
            <FormControlLabel control={<Checkbox />} label="Scannet" />
          </FormGroup>
        </div>
        <div className={styles.formTextField}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={securityLevel}
            sx={{ width: boxwidth }}
            renderInput={(params) => (
              <TextField {...params} label="Sikkerhetsnivå" />
            )}
          />
        </div>
        <div className={styles.formTextField}>
          <Button variant="outlined" sx={{ width: boxwidth }}>
            Søk
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default InternSearchInput;
