import React from "react";
import styles from "./InternSearch.module.css";
import InternSearchForm from "./InternSearchForm";

const InternSearchView = () => {
  return (
    <div className={styles.internSearch}>
      <InternSearchForm />
    </div>
  );
};

export default InternSearchView;
