import React, { FC } from "react";
import guistyles from "hilfling-gui/lib/styles/utilities.module.css";
import cx from "classnames";
import { TEXT } from "./information-text";
import styles from "./Information.module.css";

import { Logo, CardTitle } from "hilfling-gui/lib";

const HistoryInformation = (
  <div>
    <div>{TEXT.history.ingres}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.history.paragraph1.title}
      capitalized
    />
    <div>{TEXT.history.paragraph1.text}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.history.paragraph2.title}
      capitalized
    />
    <div>{TEXT.history.paragraph2.text}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.history.paragraph3.title}
      capitalized
    />
    <div>{TEXT.history.paragraph3.text}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.history.paragraph4.title}
      capitalized
    />
    <div>{TEXT.history.paragraph4.text}</div>
  </div>
);

const Information: FC<{}> = () => {
  return (
    <div className={cx(guistyles.contentContainer)}>
      <div className={styles.header}>
        <Logo size={200}></Logo>
        {TEXT.ingres}
      </div>
      <div className={styles.information}>
        <div className={styles.sidemenu}>
          <div>hei</div>
        </div>
        <div className={styles.content}>
          <h1>{TEXT.history.title}</h1>
          {HistoryInformation}
        </div>
      </div>
    </div>
  );
};

export default Information;
