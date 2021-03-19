import React, { FC } from "react";
import styles from "./PhotoGangBanger.module.css";
import { GuiProfileImage } from "../../gui-components";

interface Props {
  image: string;
  name: string;
  position: string;
  email: string;
}

const PhotoGangBanger: FC<Props> = ({
  image,
  name,
  position,
  email,
}: Props) => {
  const onClick = (): void => {
    alert("Hei");
  };

  const mailTo = "mailto:" + email;
  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <GuiProfileImage alt={name} src={image} onClick={onClick} />
      </div>
      <div>
        <p className={styles.profileInformation}>
          {name} <br />
          <i>{position}</i> <br />
          <a href={mailTo}>{email}</a> <br />
        </p>
      </div>
    </div>
  );
};

export default PhotoGangBanger;
