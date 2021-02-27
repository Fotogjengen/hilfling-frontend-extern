import React, { ChangeEvent, FC, useState } from "react";
import {
  GuiCardPreamble,
  GuiCardTitle,
  GuiImageCard,
} from "../../../gui-components";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import TabPanel from "../../TabPanel/TabPanel";

interface Props {
  title?: string;
  images?: number;
  date?: string;
  location?: string;
  image?: string;
}

const EventCardsDisplayer: FC<Props> = () => {
  const [value, setValue] = useState<number>(0);

  const imageCardsSamf = [
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

  const imageCardsIsfit = ["Et flott sted ISFiT liker"].map(
    (placeName, index) => {
      return (
        <GuiImageCard
          key={`image-card-${index}`}
          placement={"left"}
          type="samfundet"
          image={"https://www.w3schools.com/css/img_lights.jpg"}
        >
          <GuiCardTitle capitalized title={"Temafest: Gjøre verden bedre"} />
          <GuiCardPreamble
            color="red"
            date="12.10.2020"
            images={123}
            location={placeName}
            type={"EventCard"}
          />
        </GuiImageCard>
      );
    },
  );

  const imageCardsUka = ["Fæffæs lommebok", "BI"].map((placeName, index) => {
    return (
      <GuiImageCard
        key={`image-card-${index}`}
        placement={"left"}
        type="samfundet"
        image={"https://www.w3schools.com/css/img_lights.jpg"}
      >
        <GuiCardTitle capitalized title={"Temafest: Tjene $$$"} />
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

  const handleChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="event card tabs"
        >
          <Tab label="SAMFUNDET" />
          <Tab label="ISFIT" />
          <Tab label="UKA" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {imageCardsSamf}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {imageCardsIsfit}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {imageCardsUka}
      </TabPanel>
    </>
  );
};

export default EventCardsDisplayer;
