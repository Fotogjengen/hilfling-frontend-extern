import React, { FC } from "react";
import guistyles from "hilfling-gui/lib/styles/utilities.module.css";
// import ProfileTags from "../../components/MyProfile/ProfileTags/ProfileTags";
import { tags, User } from "../mockdata";
import { ProfileImage } from "hilfling-gui/lib";
import styles from "./MyProfileSetting.module.css";
import cx from "classnames";
import ProfileCard from "../../../components/MyProfile/ProfileCard/ProfileCard";

const MyProfileSetting: FC<{}> = () => {
  const myTags = tags; //TODO: FETCH FROM API
  const user = User; //TODO: FETCH FROM API
  return (
    <div className={cx(guistyles.contentContainer, styles.profileContainer)}>
      <div>
        <div className={styles.profileImage}>
          <ProfileImage
            alt={user[0].name}
            src={user[0].image}
            onClick={() => console.log("hei")}
          />
        </div>
        <div className={styles.profileCard}>
          <ProfileCard
            username={user[0].username}
            email={user[0].email}
            fgEmail={user[0].fgEmail}
          ></ProfileCard>
        </div>
      </div>
      <div className={styles.nameAndTagContainer}>
        <div>
          <h1 className={styles.profileName}>{user[0].name}</h1>
        </div>
        {/* <ProfileTags tags={myTags}></ProfileTags> */}
      </div>
    </div>
  );
};

export default MyProfileSetting;
