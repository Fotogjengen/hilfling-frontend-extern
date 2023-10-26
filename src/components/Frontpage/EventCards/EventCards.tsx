import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./EventCards.module.css";
import { MotiveDto } from "../../../../generated";

interface Props {
  event: string;
  motiveResponse: MotiveDto[];
}

const EventCards: FC<Props> = ({ event, motiveResponse }) => {
  const motiveEventResponse = motiveResponse
    .filter((motiveObject) => {
      return motiveObject.eventOwnerDto.name === event;
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateCreated);
      const dateB = new Date(b.dateCreated);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className={styles.cardsContainer}>
      {motiveEventResponse.map((motiveObject) => {
        const id = motiveObject.motiveId.id || "default";
        return (
          <Link
            className={styles.card}
            key={`motive-card-${id}`}
            to={`/motive/${id}`}
          >
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

export default EventCards;
