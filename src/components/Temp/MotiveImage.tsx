import React, { FC } from "react";
import { IResponseObject } from "./ShowMotive";

import styles from "./imageStyle.module.css";

export interface IImageList {
  _id: number;
  image: string;
}

interface Props {
  id: number;
  image: string;
  imageListProp: IResponseObject[];
  index: number;
  updateIndex: (index: number) => void;
  title: string;
}

const MotiveImage: FC<Props> = ({
  image,
  index,
  updateIndex,
  title,
}: Props) => {
  return (
    <>
      <div className={styles.motiveImage} onClick={() => updateIndex(index)}>
        <img src={image} height="200px" width="300px" />
        <div className={styles.imageContainer}>
          <p className={styles.imageTitle}>{title}</p>
          <p className={styles.imageTitle}>31.08.21</p>
        </div>
      </div>
    </>
  );
};

export default MotiveImage;
