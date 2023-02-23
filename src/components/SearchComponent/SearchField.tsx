import React, { FC, useEffect, useMemo, useState } from "react";
import { Container, Grid, IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { SearchSuggestionsApi } from "../../utils/api/searchSuggestionsApi";

const SearchField: FC = () => {

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
    .catch((e) => console.log(e));
    if(search.length === 0){
      setSuggestions([]);
    }
  },[search]);

  const suggestionBoxes = useMemo(() => {
    return suggestions.map((s, key) => (
      <MenuItem value={s} key={key} color="" onClick={() => handleSearch(s)}>
      {s}
      </MenuItem>
    ))
  },[suggestions])

  const handleSearch = (s: string) => {
    return s;
  }

  return (
    <>
    <Container>
      <Grid container spacing={2} >
          <TextField label={placeholder} fullWidth variant="outlined" onChange={handleChange} InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}/>
          <div>
          {suggestionBoxes}
          </div>
      </Grid>
    </Container>
  </>
  );
};

export default SearchField;
