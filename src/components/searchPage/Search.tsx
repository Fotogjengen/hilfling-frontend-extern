import React, { FC, useState } from "react";
import styles from "./Search.module.css";
import { GuiHeader, GuiHeaderLink } from "../../gui-components";
import { Link } from "react-router-dom";
import { Grid, Icon, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
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
          <TextField fullWidth variant="outlined" onChange={handleChange} >
            <Icon color="primary">add_circle</Icon>
          </TextField>
        </div>
      </Grid>
    </div>
  );
};

export default Search;
