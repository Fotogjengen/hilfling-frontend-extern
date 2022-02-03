import React, { FC, useEffect, useMemo, useState } from "react";
import styles from "./Search.module.css";
import { GuiHeader, GuiHeaderLink } from "../../gui-components";
import { Link } from "react-router-dom";
import { Grid, Icon, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { SearchSuggestionsApi } from "../../utils/api/searchSuggestionsApi";

// interface Props {
//   login: () => void;
//   logout: () => void;
//   authenticated: boolean | null;
// }

const Search = () => {

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const placeholder = useMemo(() => {

    const placeholders = ["Søk etter gårsdagens konsertopplevelse 🤘", 
    "Finn bilder av deg selv i stigende promille 🍻",
    "Søk etter gamle minner 🍁",
    "Søk etter fotogjengens beste bilder 📸",
    "Finn bilder av crushet ditt 👀"];

    const random = Math.floor(Math.random() * placeholders.length);

    return placeholders[random];

  },[])

  useEffect(() => {
    SearchSuggestionsApi.get(search)
    .then((res) => setSuggestions(res))
    .catch((e) => console.log(e));;
  },[search]);

  const suggestionBoxes = useMemo(() => {
    return suggestions.map((s, key) => (
      <div className={styles.suggestions} key={key}>
        {s}
      </div>
    ))
  },[suggestions])

  return (
    <div className={styles.header}>
      <Grid>
        <div>
          <TextField label={placeholder} fullWidth variant="outlined" onChange={handleChange} InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}/>
          <div className="suggestionBox">
            {suggestionBoxes}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Search;
