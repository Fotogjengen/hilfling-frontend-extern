import React from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import styles from "./InternSearch.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, nbNO } from "@mui/x-date-pickers";

const InternSearchForm = () => {
  const boxwidth = 300;
  const motiv = [{ label: "Kult motiv", id: 1 }];
  const album = [{ label: "eksempelalbum", id: 2 }];
  const kategori = [{ label: "eksempelkategori", id: 3 }];
  const sted = [{ label: "eksempelsted", id: 4 }];
  const securityLevel = [{ label: "eksempel", id: 5 }];
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  return (
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
      <div className={styles.formTextField}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Oppslagsbilde" />
          <FormControlLabel control={<Checkbox />} label="Vises på forsiden" />
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
  );
};

export default InternSearchForm;
