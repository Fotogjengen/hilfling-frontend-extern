import React, { FC, useState } from "react";
import styles from "./Search.module.css";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
interface Props {
  widthProp: string;
  scale?: string;
  label?: string;
}

const Search: FC<Props> = ({ widthProp, scale = "1", label }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [standarColor, setStandarColor] = useState("");
  const [borderColor, setBorderColor] = useState("transparent");
  const [clearDisplayValue, setClearDisplay] = useState("none");
  const [standarWidth, setStandarWidth] = useState("0px");
  const [searchWidth, setSearchWidth] = useState("0%");
  const [open, setOpen] = useState(false);
  const containerScale = scale;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    changeClearVisibility(event);
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStandarColor("var(--primary-color)");
    changeClearVisibility(event);
  };

  const changeClearVisibility = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.value == "") {
      setClearDisplay("none");
    } else {
      setClearDisplay("flex");
    }
  };

  const removeInput = () => {
    setSearchValue("");
    setClearDisplay("none");
  };

  const openSearch = () => {
    setStandarWidth(widthProp);
    setBorderColor("var(--primary-focus-color)");
    setSearchWidth("100%");
    setOpen(true);
  };

  /* const closeSearch = () => {
    setClearDisplay("none");
    setBorderColor("transparent");
    setStandarWidth("0px");
    setSearchWidth("0%");
    setOpen(false);
  }; */

  const handleSearchIconClick = () => {
    if (open == false) {
      openSearch();
    } else if (open == true) {
      console.log("searching..");
    }
  };

  const containerProp = {
    width: standarWidth,
    borderColor: borderColor,
    transform: "scale(" + containerScale + ")",
  };

  const ClearProp = {
    display: clearDisplayValue,
  };

  const inputProp = {
    width: searchWidth,
    opacity: searchWidth,
  };

  const searchIconProp = {
    color: standarColor,
  };

  return (
    <div className={styles.container} style={containerProp}>
      <input
        onBlur={(e) => handleInputBlur(e)}
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder={label}
        value={searchValue}
        className={styles.input}
        style={inputProp}
        autoFocus
      />
      <div className={styles.remove} onClick={removeInput}>
        <ClearIcon style={ClearProp} />
      </div>
      <div className={styles.searchBox}>
        <div>
          <SearchIcon
            style={searchIconProp}
            className={styles.searchIcon}
            onClick={handleSearchIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
