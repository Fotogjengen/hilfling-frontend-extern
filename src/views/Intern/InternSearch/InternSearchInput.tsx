import React from "react";
import { useState, useRef } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./InternSearch.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, nbNO } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Cancel } from "@mui/icons-material";

const Tags = ({ data, handleDelete }: { data: any; handleDelete: any }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

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

  const handleDelete = (value: string) => {
    const newTags = tags.filter((tag) => tag !== value);
    setTags(newTags);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagRef.current) {
      const newTag = tagRef.current.value;
      if (newTag.trim() !== "") {
        setTags([...tags, newTag]);
        tagRef.current.value = "";
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
                  {tags.map((data, index) => {
                    return (
                      <Tags
                        data={data}
                        handleDelete={handleDelete}
                        key={index}
                      />
                    );
                  })}
                </Box>
              ),
            }}
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
    </Box>
  );
};

export default InternSearchInput;
