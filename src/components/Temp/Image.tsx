import React, { FC } from "react";
import "./style.css";
import { IImageList } from "./MotiveImage";

import leftArrowImg from "./back.png";
interface Props {
  _id: number;
  imageListProp: IImageList[];
  index: number;
  leftArrow: () => void;
}
// Thanks to Gregor Cresnar for the awesome arrow icons
const Image: FC<Props> = ({ imageListProp, index, leftArrow }: Props) => {
  return (
    <div className="bigFlex">
      <div className="leftArrow" onClick={() => leftArrow()}>
        <img src={leftArrowImg} height="60px" width="60px" />
      </div>
      <div className="imageFlex">
        <img src={imageListProp[index].image} height="800px" width="1400px" />
      </div>
    </div>
  );
};

export default Image;
