import { Grid } from "@mui/material";
import React, { FC } from "react";
import Search from "./Search";
import SearchFilter from "./SearchFilter";

import styles from "./Search.module.css";


const SearchPage: FC = () => {


  return (
    <Grid container >
      <Grid item spacing={8}>
        <div className={styles.test}>
          <Search />
        </div>
      </Grid>
      <Grid item spacing={1}>
        <div className={styles.test}>
          <SearchFilter />
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
