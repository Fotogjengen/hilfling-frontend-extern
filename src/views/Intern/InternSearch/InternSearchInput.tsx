import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import styles from "./InternSearch.module.css";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/lab";

const InternSearchForm = () => {
  const motiv = [{ label: "Kult motiv", id: 1 }];
  const album = [{ label: "eksempelalbum", id: 2 }];
  const kategori = [{ label: "eksempelkategori", id: 3 }];
  const sted = [{ label: "eksempelsted", id: 4 }];
  const securityLevel = [{ label: "eksempel", id: 5 }];
  const [dateRange, setDateRange] = useState<DateRange<dayjs.Dayjs>>([
    null,
    null,
  ]);

  return (
    <div>
      <div className={styles.formTextField}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={album}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Album" />}
        />
      </div>
      <div className={styles.formTextField}>
        <TextField type="number" label="Side" sx={{ width: 300 }}>
          Side
        </TextField>
      </div>

      <div className={styles.formTextField}>
        <TextField type="number" label="Bildenummer" sx={{ width: 300 }}>
          Bildenummer
        </TextField>
      </div>

      <div className={styles.formTextField}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={motiv}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Motiv" />}
        />
      </div>

      <div className={styles.formTextField}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
            defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
            value={dateRange}
            sx={{ width: 300 }}
            onChange={(
              newDateRange: React.SetStateAction<DateRange<dayjs.Dayjs>>,
            ) => setDateRange(newDateRange)}
          />
        </LocalizationProvider>
      </div>

      <div className={styles.formTextField}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={kategori}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Kategori" />}
        />
      </div>
      <div className={styles.formTextField}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sted}
          sx={{ width: 300 }}
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
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Sikkerhetsnivå" />
          )}
        />
      </div>
      <div className={styles.formTextField}>
        <Button variant="outlined" sx={{ width: 300 }}>
          Søk
        </Button>
      </div>
    </div>
  );
};

export default InternSearchForm;
