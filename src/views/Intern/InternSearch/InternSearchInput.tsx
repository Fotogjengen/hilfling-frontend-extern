import React, { useState, useRef, useEffect, useContext } from "react";
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
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, nbNO } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import styles from "./InternSearch.module.css";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  MotiveDto,
  PlaceDto,
  AlbumDto,
  CategoryDto,
} from "../../../../generated";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import { AlertContext, severityEnum } from "../../../contexts/AlertContext";

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    flexWrap: "wrap", // Enable wrapping elements to the next row
    justifyContent: "flex-start", // Start from the left
  },
}));

const InternSearchInput: React.FC = () => {
  const boxwidth = 300;
  //variables for textfields
  const [motives, setMotives] = useState<MotiveDto[]>([]);
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);

  //variables for suggestions
  const [motive, setMotive] = useState<String>();

  //testdata
  const album = [{ label: "eksempelalbum", id: 2 }];
  const kategori = [{ label: "eksempelkategori", id: 3 }];
  const sted = [{ label: "eksempelsted", id: 4 }];
  const securityLevel = [{ label: "eksempel", id: 5 }];

  //for datefield and setting current day
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const tagRef = useRef<HTMLInputElement | null>(null);

  //for chipdata in tag component
  const [chipData, setChipData] = useState<ChipData[]>([]);

  //styles tag component
  const classes = useStyles();
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  //context for error handling
  const { setMessage, setSeverity, setOpen } = useContext(AlertContext);

  const setError = (e: string) => {
    setOpen(true);
    setSeverity(severityEnum.ERROR);
    setMessage(e);
  };

  useEffect(() => {
    AlbumApi.getAll()
      .then((res) => setAlbums(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    PlaceApi.getAll()
      .then((res) => setPlaces(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    CategoryApi.getAll()
      .then((res) => setCategories(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
  }, []);

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

  const handleMotiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the motive state with the current value of the TextField
    setMotive(event.target.value);
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

  return (
    <div style={{ width: "25%", margin: "0 auto" }}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
          overflow: "hidden",
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
            <TextField
              type="number"
              label="Bildenummer"
              sx={{ width: boxwidth }}
            >
              Bildenummer
            </TextField>
          </div>

          <div className={styles.formTextField}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={motives}
              sx={{ width: boxwidth }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Motiv"
                  value={motive}
                  onChange={handleMotiveChange}
                />
              )}
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
              renderInput={(params) => (
                <TextField {...params} label="Kategori" />
              )}
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
          <div className={styles.formTextField}>
            <Box className={classes.flexContainer}>
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
          </div>
          <div className={styles.formTextField}>
            <TextField
              inputRef={tagRef}
              fullWidth
              variant="standard"
              size="small"
              sx={{ margin: "1rem 0" }}
              margin="none"
              placeholder={"Enter tags"}
              InputProps={{
                startAdornment: (
                  <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }} />
                ),
              }}
              onKeyDown={handleBackspace} // Add this event listener for backspace key
              onKeyPress={handleEnterPress} // Add this event listener for Enter key
            />
          </div>
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
    </div>
  );
};

export default InternSearchInput;
