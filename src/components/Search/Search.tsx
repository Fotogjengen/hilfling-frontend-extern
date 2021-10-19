import React, { FC, useState } from "react";
import styles from "./Search.module.css";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";

interface Props {
  width: number;
  label?: string;
}

const Search: FC<Props> = ({ width, label }: Props) => {
  const [search_value, setSearchValue] = useState("");
  const [boxshadow, setboxshadow] = useState("");
  const handleClick = () => {
    setboxshadow("0px 0px 0px 0px black");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const item = [
    "Oktoberfest",
    "Olympiade",
    "Frisktisk",
    "sssssss",
    "ooola dola",
    "woola da sa",
  ];

  const prop_width = {
    width: width,
  };

  return (
    <div className={styles.container} style={prop_width}>
      <div className={styles.inputbox} style={prop_width}>
        <input
          onClick={handleClick}
          type="text"
          placeholder={label}
          value={search_value}
          className={styles.input}
          onChange={(e) => onChange(e)}
        />
        <div className={styles.search_symbol}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Search;
