import React, { FC, SyntheticEvent, useState } from "react";

import { AppBar, Tabs, Tab } from "@mui/material";
import TabPanel from "../../TabPanel/TabPanel";
import { useEffect } from "react";

import { MotiveApi } from "../../../utils/api/MotiveApi";
import { EventOwnerApi } from "../../../utils/api/EventOwnerApi";
import { EventOwnerDto, MotiveDto } from "../../../../generated";

import EventCards from "../EventCards/EventCards";

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
  const [, setEventOwners] = useState<EventOwnerDto[]>([]);

  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => setMotiveResponse(res.data.currentList))
      .catch((e) => console.log(e));
    EventOwnerApi.getAll()
      .then((res) => setEventOwners(res.data.currentList))
      .catch((err) => console.error(err));
  }, []);

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
        <EventCards event={"Samfundet"} motiveResponse={motiveResponse} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EventCards event={"Samfundet"} motiveResponse={motiveResponse} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EventCards event={"Samfundet"} motiveResponse={motiveResponse} />
      </TabPanel>
    </>
  );
};

export default EventCardsDisplayer;
