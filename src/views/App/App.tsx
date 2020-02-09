import React, { FC } from "react";
import Carousel from "../../components/Frontpage/Carousel/Carousel";
import CardInformationSection from "../../components/Frontpage/CardInformationSection/CardInformationSection";
import styles from "./App.module.css";
import { PhotoTagApi } from "../../utils/api/PhotoTagApi";
import { withAuth } from "@okta/okta-react";

const App: FC<{}> = ({ auth }: any) => {
  // Example call to backend
  // TODO: Remove this
  PhotoTagApi.getAll()
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

  const login = async () => {
    auth.login("/");
  };

  const logout = async () => {
    auth.logout("/");
  };

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

export default withAuth(App);
