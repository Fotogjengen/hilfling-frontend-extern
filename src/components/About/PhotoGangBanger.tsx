import React, { FC } from 'react';
import { ProfileImage } from 'hilfling-gui/lib';
import styles from './PhotoGangBanger.module.css';

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
  const mailTo = 'mailto:' + email;
  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <ProfileImage alt={name} src={image} onClick={() => alert('hei')} />
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
