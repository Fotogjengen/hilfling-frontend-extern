import React, { FC, useState, useMemo } from 'react';
import { PhotographerTag } from 'hilfling-gui/lib';
import styles from './ProfileTags.module.css';

type ColorType = 'red' | 'blue' | 'purple' | 'green' | 'yellow';

const colorList: ColorType[] = ['red', 'blue', 'purple', 'green', 'yellow'];

interface Props {
  tags: string[];
}

const ProfileTags: FC<Props> = ({ tags }: Props) => {
  const PhotographerTags = () =>
    tags.map((tag, i) => (
      <PhotographerTag
        className={styles.tag}
        color={colorList[i % colorList.length]}
        key={tag}
      >
        {tag}
      </PhotographerTag>
    ));

  return <div>{PhotographerTags()}</div>;
};

export default ProfileTags;
