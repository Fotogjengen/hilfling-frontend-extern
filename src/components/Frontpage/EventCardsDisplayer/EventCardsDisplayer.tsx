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
import { EventOwnerDto, MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import { EventOwnerApi } from "../../../utils/api/EventOwnerApi";


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
  const [eventOwners, setEventOwners] = useState<EventOwnerDto[]>([]);

  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => setMotiveResponse(res.data.currentList))
      .catch((e) => console.log(e));
    EventOwnerApi.getAll()
      .then((res) => setEventOwners(res.data.currentList))
      .catch((err) => console.error(err));
  }, []);

  const imageCardsSamf = motiveResponse.map((motiveObject, index) => {
    // TODO: IDK hvordan å løse dette? Muligens heller bruke .filter()
    const samf = motiveObject.eventOwnerDto.name === "Samfundet" ? true : false;
    const id = motiveObject.motiveId.id || "default";
    if (samf) {
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
    }
  });

  const imageCardsIsfit = motiveResponse.map((motiveObject, index) => {
    const samf = motiveObject.eventOwnerDto.name === "ISFIT" ? true : false;
    const id = motiveObject.motiveId.id || "default";
    if (samf) {
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
    }
  });

  const imageCardsUka = motiveResponse.map((motiveObject, index) => {
    const samf = motiveObject.eventOwnerDto.name === "UKA" ? true : false;
    const id = motiveObject.motiveId.id || "default";
    if (samf) {
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
    }
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
