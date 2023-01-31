import React, { FC } from "react";
import styles from "./App.module.css";
import EventCardsDisplayer from "../../components/Frontpage/EventCardsDisplayer/EventCardsDisplayer";
import CardInformationFotogjengen from "../../components/Frontpage/CardInformationFotogjengen/CardInformationFotogjengen";
import CardInformationAnmoding from "../../components/Frontpage/CardInformationAnmoding/CardInformationAnmoding";
import Carousel from "../../components/Frontpage/Carousel/Carousel";
import { InstagramEmbed } from "react-social-media-embed";
import { Paper } from "@mui/material";
// import { withAuth } from "@okta/okta-react";
// import { useAuth } from "../../utils/auth";

const App: FC = (/* { auth } */) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.leftSide}>
        <div className={styles.CaroContainer}>
          <Carousel />
        </div>
        <div className={styles.events}>
          <h2>BILDER FRA:</h2>
          <EventCardsDisplayer />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.fotogjengen}>
          <CardInformationFotogjengen />
        </div>
        <div className={styles.anmoding}>
          <CardInformationAnmoding />
        </div>
        <div className={styles.insta}>
          <InstagramEmbed url="https://www.instagram.com/p/CnxCRELoOaq/?utm_source=ig_web_copy_link" />
        </div>
        <div className={styles.insta}>
          <InstagramEmbed url="https://www.instagram.com/p/CVDmAihsTuj/?utm_source=ig_web_copy_link" />
        </div>
      </div>
    </div>
  );
};

export default App;
