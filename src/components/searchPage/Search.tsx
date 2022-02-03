import React, { FC, useState } from "react";
import styles from "./Search.module.css";
import { GuiHeader, GuiHeaderLink } from "../../gui-components";
import { Link } from "react-router-dom";
import { Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";

// interface Props {
//   login: () => void;
//   logout: () => void;
//   authenticated: boolean | null;
// }

const Search = () => {

  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <div className={styles.header}>
      <Grid>
        <div>
          <TextField size="medium" variant="outlined" onChange={handleChange}/>
        </div>
      </Grid>
    </div>
  );
};

export default Search;
