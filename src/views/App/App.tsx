import React, { FC } from "react";
import Carousel from "../../components/Frontpage/Carousel/Carousel";
import CardInformationSection from "../../components/Frontpage/CardInformationSection/CardInformationSection";
import styles from "./App.module.css";
import EventCardsDisplayer from "../../components/Frontpage/EventCardsDisplayer/EventCardsDisplayer";
// import { withAuth } from "@okta/okta-react";
// import { useAuth } from "../../utils/auth";

const App: FC = (/* { auth } */) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.leftSide}>
        <div className="slideshow">
          <Carousel />
        </div>
        <div className={styles.events}>
          <h2>BILDER FRA:</h2>
          <EventCardsDisplayer />
        </div>
      </div>
      <div className={styles.rightSide}>
        <CardInformationSection />
      </div>
    </div>
  );
};

export default App;
