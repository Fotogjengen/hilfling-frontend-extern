import React, { FC, SyntheticEvent, useState } from "react";

import { AppBar, Tabs, Tab } from "@mui/material";
import TabPanel from "../../TabPanel/TabPanel";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { EventOwnerDto, MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import { EventOwnerApi } from "../../../utils/api/EventOwnerApi";

import styles from "./EventCardsDisplayer.module.css";

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

  const Cards = (props: { event: string }) => {
    const motiveEventResponse = motiveResponse
      .filter((motiveObject) => {
        return motiveObject.eventOwnerDto.name === props.event;
      })
      .sort((a, b) => {
        const dateA = new Date(a.dateCreated);
        const dateB = new Date(b.dateCreated);
        return dateB.getTime() - dateA.getTime();
      });

    return (
      <div className={styles.cardsContainer}>
        {motiveEventResponse.map((motiveObject, index) => {
          const id = motiveObject.motiveId.id || "default";
          return (
            <Link className={styles.card} key={index} to={`/motive/${id}`}>
              <img
                className={styles.cardImg}
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt="img"
              />

              <div className={styles.cardText}>
                <div className={styles.cardTextTitle}>{motiveObject.title}</div>
                <div>
                  <b>Date:</b>
                  {motiveObject.dateCreated.toString()}
                </div>
                <div>
                  <b>Location:</b>
                  {"Blåfjell"}
                </div>
                <div>
                  <b>Images:</b>
                  {"367"}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
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
        <Cards event={"Samfundet"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cards event={"ISFIT"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Cards event={"UKA"} />
      </TabPanel>
    </>
  );
};

export default EventCardsDisplayer;
