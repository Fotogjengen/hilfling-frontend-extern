import React, { FC, SyntheticEvent, useState } from "react";
import {
  GuiCardPreamble,
  GuiCardTitle,
  GuiImageCard,
} from "../../../gui-components";
import { AppBar, Tabs, Tab } from "@mui/material";
import TabPanel from "../../TabPanel/TabPanel";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";

// TODO: this should still be here for when data from database gets collected higher in the component tree.
interface Props {
  title?: string;
  images?: number;
  date?: string;
  location?: string;
  image?: string;
}


const EventCardsDisplayer: FC<Props> = () => {
  const [value, setValue] = useState<number>(0);
  const [motiveResponse, setMotiveResponse] = useState<MotiveDto[]>([]);

  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => setMotiveResponse(res.data.currentList))
      .catch((e) => console.log(e));
  }, []);

  const imageCardsSamf = motiveResponse.map((motiveObject, index) => { 
    const id = motiveObject.motiveId.id || "default";
    return (
      // TODO: Placement, type, location, type and image should be from motiveObject when backend is done
      <Link key={index} to={`/motive/${id}`}>
        <GuiImageCard
          key={`image-card-${index}`}
          placement="left"
          type="samfundet"
          image="https://www.w3schools.com/css/img_lights.jpg"
        >
          <GuiCardTitle capitalized title={motiveObject.title} />
          <GuiCardPreamble
            color="red"
            date={motiveObject.dateCreated.toString()}
            images={69420}
            location="Blåfjell"
            type="EventCard"
          />
        </GuiImageCard>
      </Link>
    );
  });

  const imageCardsIsfit = ["Et flott sted ISFiT liker"].map(
    (placeName, index) => {
      return (
        <Link key={index} to={`/motive/${"isfit-motiv"}`}>
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
        </Link>
      );
    },
  );

  const imageCardsUka = ["Fæffæs lommebok", "BI"].map((placeName, index) => {
    return (
      <Link key={index} to={`/motive/${"UKEN-motiv :)"}`}>
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
      </Link>
    );
  });

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
