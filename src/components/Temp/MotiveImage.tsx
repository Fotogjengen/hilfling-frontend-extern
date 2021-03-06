import React, { FC } from "react";
import "./style.css";
interface Props {
  id: number;
  image: string;
}

const MotiveImage: FC<Props> = ({ image }: Props) => {
  return (
    <div className="motiveImage">
      <img src={image} height="200px" width="300px" />
      <p>Test</p>
    </div>
  );
};

export default MotiveImage;
