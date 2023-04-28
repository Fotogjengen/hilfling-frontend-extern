import React, { useState } from "react";
import styles from "./InternSearch.module.css";
import InternSearchInput from "./InternSearchInput";
import { Pagination } from "@mui/material";
import ToggleComponent from "./ToggleComponent";
import InternSearchGrid from "./InternSearchGrid";

const InternSearchView = () => {
  const [isGrid, setIsGrid] = useState(true);

  const handleChange = () => {
    setIsGrid(!isGrid);
  };
  return (
    <div className={styles.internSearch}>
      <div className={styles.gridAndToggleContainer}>
        <div style={{ float: "right" }}>
          <ToggleComponent
            value={isGrid ? "Grid" : "List"}
            onChange={handleChange}
          />
        </div>
        <InternSearchGrid />
      </div>
      <Pagination count={10} color="primary" />
      <InternSearchInput />
    </div>
  );
};

export default InternSearchView;
