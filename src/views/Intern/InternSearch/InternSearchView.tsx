import React, { useState } from "react";
import styles from "./InternSearch.module.css";
import InternSearchInput from "./InternSearchInput";
import CustomDataGrid from "./CustomTable";

const InternSearchView = () => {
  return (
    <div className={styles.internSearch}>
      <div className={styles.gridDivContainer}>
        <CustomDataGrid />
      </div>
      <InternSearchInput />
    </div>
  );
};

export default InternSearchView;
