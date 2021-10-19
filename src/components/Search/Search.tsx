import React, { FC, useState } from "react";
import styles from "./Search.module.css";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

interface Props {
  width: string;
  label?: string;
}

const Search: FC<Props> = ({ width, label }: Props) => {
  const [search_value, setSearchValue] = useState("");
  const [border_color, setBorderColor] = useState("");
  const [display_clear, setDisplayClear] = useState(["", ""]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    displayClear(event);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBorderColor("grey");
    displayClear(event);
  };

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBorderColor("black");
    displayClear(event);
  };

  const displayClear = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    if (event.target.value == "") {
      setDisplayClear(["white", "text"]);
    } else {
      setDisplayClear(["black", "pointer"]);
    }
  };

  const remove = () => {
    setSearchValue("");
    setDisplayClear(["white", "text"]);
  };

  const item = [
    "Oktoberfest",
    "Olympiade",
    "Frisktisk",
    "sssssss",
    "ooola dola",
    "woola da sa",
  ];

  const type1_prop = {
    width: width,
    borderColor: border_color,
  };

  const type2_prop = {
    borderColor: border_color,
  };

  const displayClear_prop = {
    color: display_clear[0],
    cursor: display_clear[1],
  };

  return (
    <div className={styles.container} style={type1_prop}>
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
        <div className={styles.search_symbol} style={type2_prop}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Search;
