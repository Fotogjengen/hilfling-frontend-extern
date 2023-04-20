import React, { useState } from "react";
import styles from "./InternSearch.module.css";
import InternSearchForm from "./InternSearchForm";
import { Pagination } from "@mui/material";
import ToggleComponent from "./ToggleComponent";

const [isGrid, setIsGrid] = useState(true);

const handleChange = () => {
  setIsGrid(!isGrid);
};

const InternSearchView = () => {
  return (
    <div className={styles.internSearch}>
      <ToggleComponent
        value={isGrid ? "Grid" : "List"}
        onChange={handleChange}
      />
      <Pagination count={10} color="primary" />
      <InternSearchForm />
    </div>
  );
};

export default InternSearchView;
