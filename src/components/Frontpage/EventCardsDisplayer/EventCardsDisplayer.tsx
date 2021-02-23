import React, { FC } from "react";
import styles from "./EventCardsDisplayer.module.css";
import {
  GuiCardPreamble,
  GuiCardTitle,
  GuiImageCard,
} from "../../../gui-components";

interface Props {
  title?: string;
  images?: number;
  date?: string;
  location?: string;
  image?: string;
}

const EventCardsDisplayer: FC<Props> = () => {
  const imageCards = [
    "Edgar",
    "Daglighallen",
    "Strossa",
    "Rundhallen",
    "Storsalen",
  ].map((placeName, index) => {
    return (
      <GuiImageCard
        key={`image-card-${index}`}
        placement={"left"}
        type="samfundet"
        image={"https://www.w3schools.com/css/img_lights.jpg"}
      >
        <GuiCardTitle capitalized title={"Temafest: Halloween"} />
        <GuiCardPreamble
          color="red"
          date="12.10.2020"
          images={123}
          location={placeName}
          type={"EventCard"}
        />
      </GuiImageCard>
    );
  });
  return <div className={styles.container}>{imageCards}</div>;
};

export default EventCardsDisplayer;
