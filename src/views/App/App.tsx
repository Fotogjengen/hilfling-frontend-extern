import React, { FC } from "react";
import styles from "hilfling-gui/lib/styles/utilities.module.css";
import Header from "../../components/Header/Header";

const App: FC<{}> = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className="content-container">
        <div className="left-side">
          <div className="slideshow"></div>
          <div className="arrangements"></div>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
};

export default App;
