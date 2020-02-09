import React, { FC } from "react";
import PhotoGangBanger from "../../components/About/PhotoGangBanger";
import { activePhotoGangBangers, retiredPhotoGangBangers } from "./mockdata";
import styles from "./About.module.css";

const About: FC<{}> = () => {
  const activeUsers = activePhotoGangBangers; //[TODO]: fetch from API
  const retiredUsers = retiredPhotoGangBangers; //[TODO]: fetch from API

  const activeGangBangers = () =>
    activeUsers.map(user => (
      <PhotoGangBanger
        name={user.name}
        image={user.image}
        position={user.position}
        email={user.email}
        key={user.name}
      />
    ));

  const retiredGangBangers = () =>
    retiredUsers.map(user => (
      <PhotoGangBanger
        name={user.name}
        image={user.image}
        position={user.position}
        email={user.email}
        key={user.name}
      />
    ));

  return (
    <div>
      <h2>Aktive fotogjengere</h2>
      <div className={styles.gangBangers}>{activeGangBangers()}</div>;
      <h2>Pensjonerte fotogjenger</h2>
      <div className={styles.gangBangers}>{retiredGangBangers()}</div>;
    </div>
  );
};

export default About;
