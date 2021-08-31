import React, { FC } from "react";
import { IResponseObject } from "./ShowMotive";

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
  console.log(index);
  return (
    <>
      <div className="motiveImage" onClick={() => updateIndex(index)}>
        <img src={image} height="200px" width="300px" />
        <div className="imageContainer">
          <p className={"imageTitle"}>{title}</p>
          <p className={"imageTitle"}>31.08.21</p>
        </div>
      </div>
    </>
  );
};

export default MotiveImage;
