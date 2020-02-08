import React, { FC } from "react";
import guistyles from "hilfling-gui/lib/styles/utilities.module.css";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Frontpage/Carousel/Carousel";
import CardInformationSection from "../../components/Frontpage/CardInformationSection/CardInformationSection";
import styles from "./App.module.css";
import { Footer } from "hilfling-gui/lib";
// import { withAuth } from "@okta/okta-react";
// import { useAuth } from "../../utils/auth";

const App: FC<{}> = () => {
  //const App: FC<{}> = ({ auth }: any) => {
  //   const { authenticated } = useAuth(auth);

  //   const login = async () => {
  //     auth.login("/");
  //   };

  //   const logout = async () => {
  //     auth.logout("/");
  //   };

  return (
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
  );
};

// export default withAuth(App);
export default App;
