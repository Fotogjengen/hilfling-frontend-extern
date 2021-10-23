import React, { FC, useState } from "react";
import styles from "./Search.module.css";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
interface Props {
  width: string;
  scale?: string;
  label?: string;
}

const Search: FC<Props> = ({ width, scale = "1", label }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [standarColor, setStandarColor] = useState("");
  const [clearDisplayValue, setClearDisplay] = useState("none");
  const containerScale = scale;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    changeClearVisibility(event);
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStandarColor("var(--primary-color)");
    changeClearVisibility(event);
  };

  const handleInputFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStandarColor("var(--primary-focus-color)");
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

  const remove = () => {
    setSearchValue("");
    setClearDisplay("none");
  };

  const containerProp = {
    width: width,
    borderColor: standarColor,
    transform: "scale(" + containerScale + ")",
  };

  const displayClearProp = {
    display: clearDisplayValue,
    color: standarColor,
  };

  const searchIconProp = {
    color: standarColor,
  };

  return (
    <div className={styles.container} style={containerProp}>
      <div className={styles.inputBox}>
        <input
          onFocus={(e) => handleInputFocus(e)}
          onBlur={(e) => handleInputBlur(e)}
          type="text"
          placeholder={label}
          value={searchValue}
          className={styles.input}
          onChange={(e) => handleInputChange(e)}
        />
        <div className={styles.remove} onClick={remove}>
          <ClearIcon style={displayClearProp} />
        </div>
        <div className={styles.searchBox}>
          <div>
            <SearchIcon style={searchIconProp} className={styles.searchIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
