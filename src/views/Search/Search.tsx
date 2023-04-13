import React from "react";
import SearchField from "../../components/SearchComponent/SearchField";
import SearchPhotoGrid from "./SearchPhotoGrid";
import styles from "./Searchbar.module.css";

const Search = () => {
  return (
    <div className={styles.backgroundFlex}>
      <div className={styles.searchbar}>
        <SearchField />
      </div>
      <div className={styles.imageHeader}>
        <hr className={styles.hr} />
      </div>
      <SearchPhotoGrid />
    </div>
  );
};

export default Search;
