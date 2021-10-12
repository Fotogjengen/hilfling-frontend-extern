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
    setSearchValue("");
    setboxshadow("0px 0px 0px 0px black");
  };
  const prop_style = {
    width: width,
    boxshadow: boxshadow,
  };

  return (
    <div className={styles.container}>
      <input
        onClick={handleClick}
        type="text"
        placeholder={label}
        value={search_value}
        className={styles.input}
        style={prop_style}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={styles.search_symbol}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Search;
