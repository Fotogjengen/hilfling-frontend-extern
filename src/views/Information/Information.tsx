import React, { FC } from "react";
import guistyles from "hilfling-gui/lib/styles/utilities.module.css";
import cx from "classnames";
import { TEXT } from "./information-text";
import styles from "./Information.module.css";

import { ImageLogo, CardTitle } from "hilfling-gui/lib";

const HistoryInformation = (
  <div>
    <h1 className={styles.title}>{TEXT.history.title}</h1>
    <div className={styles.infobobbles}>
      <div className={cx(styles.infobobble, styles.red)}>7. okt 1958</div>
      <div className={cx(styles.infobobble, styles.blue)}>Fast gjeng</div>
      <div className={cx(styles.infobobble, styles.purple)}>12 fotografer</div>
      <div className={cx(styles.infobobble, styles.green)}>3 webutviklere</div>
      <div className={cx(styles.infobobble, styles.yellow)}>Kult</div>
    </div>
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

const KrediteringInformation = (
  <div>
    <h1 className={styles.title}>{TEXT.kreditering.title}</h1>
    <div>{TEXT.kreditering.paragraph1}</div>
    <div className={cx(styles.red, styles.outline)}>
      <span className={styles.outlinetext}>{TEXT.kreditering.outline}</span>
    </div>
    <div>{TEXT.kreditering.paragraph2}</div>
  </div>
);

const Services = (
  <div>
    <h1 className={styles.title}>{TEXT.services.title}</h1>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.services.paragraph1.title}
      capitalized
    />
    <div>{TEXT.services.paragraph1.text1}</div>
    <div className={cx(styles.blue, styles.outline, styles.order)}>
      <div className={cx(styles.outlinetext, styles.orderinfo)}>
        <div>Navn</div>
        <div>Adresse</div>
        <div>Postnummer og sted</div>
        <div>E-post</div>
      </div>
      <div className={cx(styles.outlinetext, styles.orderinfo)}>
        <div>Bilde</div>
        <div>Størrelse</div>
        <div>Antall</div>
        <div>Sendes per post eller hentes</div>
      </div>
    </div>
    <div>{TEXT.services.paragraph1.text2}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.services.paragraph2.title}
      capitalized
    />
    <div>{TEXT.services.paragraph2.text}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.services.paragraph3.title}
      capitalized
    />
    <div>{TEXT.services.paragraph3.text}</div>
    <CardTitle
      className={styles.subtitle}
      title={TEXT.services.paragraph4.title}
      capitalized
    />
    <div>{TEXT.services.paragraph4.text}</div>
    <div className={styles.subparagraphs}>
      <div>
        <div className={styles.subsubtitle}>
          {TEXT.services.paragraph4.subparagraph1.title}
        </div>
        <div>{TEXT.services.paragraph4.subparagraph1.text}</div>
      </div>
      <div>
        <div className={styles.subsubtitle}>
          {TEXT.services.paragraph4.subparagraph2.title}
        </div>
        <div>{TEXT.services.paragraph4.subparagraph2.text}</div>
      </div>
    </div>
  </div>
);

const Information: FC<{}> = () => {
  return (
    <div className={cx(guistyles.contentContainer)}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <ImageLogo size={230}></ImageLogo>
        </div>
        <div className={styles.headertext}>
          <div className={styles.fotogjengen}>fotogjengen</div>
          <div>{TEXT.ingres}</div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.sidemenu}>
          <div>hei</div>
        </div>
        <div className={styles.content}>
          {HistoryInformation}
          {KrediteringInformation}
          {Services}
        </div>
      </div>
    </div>
  );
};

export default Information;
