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
  const [search_value, setSearchValue] = useState("");
  const [standar_color, setStandarColor] = useState("");
  const [display_clear, setDisplayClear] = useState("none");
  const container_scale = scale;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    displayClear(event);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStandarColor("var(--primary-color)");
    displayClear(event);
  };

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStandarColor("var(--primary-focus-color)");
    displayClear(event);
  };

  const displayClear = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value == "") {
      setDisplayClear("none");
    } else {
      setDisplayClear("flex");
    }
  };

  const remove = () => {
    setSearchValue("");
    setDisplayClear("none");
  };

  const container_prop = {
    width: width,
    borderColor: standar_color,
    transform: "scale(" + container_scale + ")",
  };

  const displayClear_prop = {
    display: display_clear,
    color: standar_color,
  };

  const search_icon_prop = {
    color: standar_color,
  };

  return (
    <div className={styles.container} style={container_prop}>
      <div className={styles.inputbox}>
        <input
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
          type="text"
          placeholder={label}
          value={search_value}
          className={styles.input}
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.remove} onClick={remove}>
          <ClearIcon style={displayClear_prop} />
        </div>
        <div className={styles.search_box}>
          <div>
            <SearchIcon
              style={search_icon_prop}
              className={styles.search_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
