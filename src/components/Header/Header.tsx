import React, { FC } from "react";
import styles from "./Header.module.css";
import { Header, HeaderLink } from "hilfling-gui/lib";

const App: FC<{}> = () => {
  return (
    <div className={styles.header}>
      <Header>
        <HeaderLink>BILDER</HeaderLink>
        <HeaderLink>OM OSS</HeaderLink>
        <HeaderLink>LOGG INN</HeaderLink>
      </Header>
    </div>
  );
};

export default App;
