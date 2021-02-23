import React, { FC } from "react";
import styles from "./EventCardsDisplayer.module.css";
import {
  GuiCardPreamble,
  GuiCardTitle,
  GuiImageCard,
} from "../../../gui-components";

type UKA = "uka";
type SAMFUNDET = "samfundet";
type ISFIT = "isfit";
type ANNET = "annet";

type EventType = UKA | SAMFUNDET | ISFIT | ANNET;

interface Props {
  title?: string;
  images?: number;
  date?: string;
  location?: string;
  image?: string;
}

const EventCardsDisplayer: FC<Props> = ({
  title,
  images,
  date,
  location,
  image,
}: Props) => {
  return (
    <div className={styles.container}>
      <GuiImageCard
        placement={"left"}
        type="samfundet"
        image={"https://www.w3schools.com/css/img_lights.jpg"}
      >
        <GuiCardTitle capitalized title={"Temafest: Halloween"} />
        <GuiCardPreamble
          color="red"
          date="12.10.2020"
          images={123}
          location={"Daglighallen"}
          type={"EventCard"}
        />
      </GuiImageCard>
      <GuiImageCard
        placement={"left"}
        type="samfundet"
        image={"https://www.w3schools.com/css/img_lights.jpg"}
      >
        <GuiCardTitle capitalized title={"Temafest: Halloween"} />
        <GuiCardPreamble
          color="red"
          date="12.10.2020"
          images={123}
          location={"Daglighallen"}
          type={"EventCard"}
        />
      </GuiImageCard>
      <GuiImageCard
        placement={"left"}
        type={"samfundet"}
        image={"https://www.w3schools.com/css/img_lights.jpg"}
      >
        <GuiCardTitle capitalized title={"Temafest: Halloween"} />
        <GuiCardPreamble
          color="red"
          date="12.10.2020"
          images={123}
          location={"Daglighallen"}
          type={"EventCard"}
        />
      </GuiImageCard>
      <GuiImageCard
        placement={"left"}
        type="samfundet"
        image={"https://www.w3schools.com/css/img_lights.jpg"}
      >
        <GuiCardTitle capitalized title={"Temafest: Halloween"} />
        <GuiCardPreamble
          color="red"
          date="12.10.2020"
          images={123}
          location={"Daglighallen"}
          type={"EventCard"}
        />
      </GuiImageCard>
    </div>
  );
};

export default EventCardsDisplayer;
