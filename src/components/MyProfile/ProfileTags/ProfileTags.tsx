<<<<<<< HEAD
import React, { FC, ReactNode } from "react";
=======
import React, { FC } from "react";
>>>>>>> origin/master
import styles from "./ProfileTags.module.css";
import { GuiPhotographerTag } from "../../../gui-components";

type ColorType = "red" | "blue" | "purple" | "green" | "yellow";

const colorList: ColorType[] = ["red", "blue", "purple", "green", "yellow"];

interface Props {
  tags: string[];
}

const ProfileTags: FC<Props> = ({ tags }: Props) => {
  const PhotographerTags = (): ReactNode =>
    tags.map((tag, i) => (
      <GuiPhotographerTag
        className={styles.tag}
        color={colorList[i % colorList.length]}
        key={tag}
      >
        {tag}
      </GuiPhotographerTag>
    ));

  return <div>{PhotographerTags()}</div>;
};

export default ProfileTags;
