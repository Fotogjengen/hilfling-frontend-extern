import React, { FC, useState } from "react";
import "./style.css";
import MotiveImage from "./MotiveImage";

const ShowMotive: FC = ({}) => {
  const [images] = useState({
    imageList: [
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
    ],
  });

  const imageItems = images.imageList.map((image) => (
    <MotiveImage id={image._id} image={image.image} key={image._id} />
  ));

  return (
    <div className="backgroundFlex">
      <div className="imageHeader">
        <p className="headerText">GJENGFOTO</p>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 2,
            width: "95%",
          }}
        />
      </div>
      <div className="filterAndImages">
        <div className="imageFilter">
          <h2 className="filterText">______FILTER______</h2>
          <div className="vl" />
        </div>
        <div className="flex">
          {imageItems}
          {/*TODO: remove filling elements, this is a temp fix! This fix ensures that the first image in a row always is at the far left. FInd a better method for doing this  */}
          <div className="filling-empty-space-childs" />
          <div className="filling-empty-space-childs" />
          <div className="filling-empty-space-childs" />
        </div>
      </div>
    </div>
  );
};

export default ShowMotive;
