import React, { useState } from "react";
import styles from "./InternSearch.module.css";
import InternSearchInput from "./InternSearchInput";
import { Grid, Pagination } from "@mui/material";
import ToggleComponent from "./ToggleComponent";
import InternSearchGrid from "./InternSearchGrid";
import CustomDataGrid from "./CustomTable";

const InternSearchView = () => {
  const [isGrid, setIsGrid] = useState(true);

  const handleChange = () => {
    setIsGrid(!isGrid);
  };
  const [pages, setPages] = React.useState(10);
  return (
    <div className={styles.internSearch}>
      <div className={styles.gridDivContainer}>
        <div className={styles.toggleHeader}>
          <div
            style={{
              display: "flex",
              flex: "1",
            }}
          >
            <div className={styles.pagination}>
              <Pagination count={pages} color="primary" />
            </div>
            <div className={styles.toggleComponent}>
              <ToggleComponent
                value={isGrid ? "Grid" : "List"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <CustomDataGrid />
      </div>
      <InternSearchInput />
    </div>
  );
};

export default InternSearchView;
