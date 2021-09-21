import React, { FC } from "react";
import guistyles from "../../styles/utilities.module.css";
import { tags, User } from "./mockdata";
import ProfileTags from "../../components/MyProfile/ProfileTags/ProfileTags";
import styles from "./EditMyProfile.module.css";
import cx from "classnames";
import ProfileCard from "../../components/MyProfile/ProfileCard/ProfileCard";
import { GuiProfileImage } from "../../gui-components";

const MyProfile: FC = () => {
  const myTags = tags; //TODO: FETCH FROM API
  const user = User; //TODO: FETCH FROM API
  return (
    <div className={cx(guistyles.contentContainer, styles.profileContainer)}>
      <div>
        <div className={styles.profileImage}>
          <GuiProfileImage
            alt={user[0].name}
            src={user[0].image}
            onClick={(): void => console.log("hei")}
          />
        </div>
        <div className={styles.profileCard}>
          <ProfileCard
            username={user[0].username}
            email={user[0].email}
            fgEmail={user[0].fgEmail}
          />
        </div>
      </div>
      <div className={styles.nameAndTagContainer}>
        <div>
          <h1 className={styles.profileName}>{user[0].name}</h1>
        </div>
        <ProfileTags tags={myTags} />
      </div>
    </div>
  );
};

export default MyProfile;
