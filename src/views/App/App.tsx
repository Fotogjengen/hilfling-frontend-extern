import React, { FC } from "react";
import guistyles from "hilfling-gui/lib/styles/utilities.module.css";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Frontpage/Carousel/Carousel";
import CardInformationSection from "../../components/Frontpage/CardInformationSection/CardInformationSection";
import styles from "./App.module.css";
import { Footer } from "hilfling-gui/lib";

const App: FC<{}> = () => {
  return (
    <div>
      <div className={guistyles.container}>
        <Header></Header>
        <div className={styles.contentContainer}>
          <div className={styles.leftSide}>
            <div className="slideshow">
              <Carousel></Carousel>
            </div>
            <div className="arrangements"></div>
          </div>
          <div className={styles.rightSide}>
            <CardInformationSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
