import React, { FC, useState, useEffect } from "react";
import styles from "./imageStyle.module.css";
import MotiveImage from "./MotiveImage";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { MotiveDto, PhotoDto } from "../../../generated";
import { createImgUrl } from "../../utils/createImgUrl/createImgUrl";

interface Props {
    photos:PhotoDto[]
    motive:MotiveDto 
}

const ShowMotive: FC<Props> = ({photos, motive}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const updateIndex = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const imageItems = photos.map((image: PhotoDto, index: number) => {
    return (
      <MotiveImage
        id={image.photoId.id}
        image={createImgUrl(image)}
        key={index}
        imageListProp={photos}
        index={index}
        updateIndex={() => updateIndex(index)}
        title={image.motive.title}
      />
    );
  });

  return (
    <>
      <div className={styles.backgroundFlex}>
        <div className={styles.imageHeader}>
          <p className={styles.headerText}>
            {motive.title}
            </p>
          <hr className={styles.hr} />
        </div>
        <div className={styles.filterAndImages}>
          <div className={styles.flex}>
            {imageItems}
            {/*TODO: remove filling elements, this is a temp fix! This fix ensures that the first image in a row always is at the far left. FInd a better method for doing this  */}
            <div className={styles.fillingEmptySpaceChilds} />
            <div className={styles.fillingEmptySpaceChilds} />
            <div className={styles.fillingEmptySpaceChilds} />
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={createImgUrl(photos[photoIndex])}
          nextSrc={
            createImgUrl(photos[(photoIndex + 1) % photos.length])
          }
          prevSrc={
            createImgUrl(photos[
              (photoIndex + photos.length - 1) % photos.length
            ])
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + photos.length - 1) % photos.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </>
  );
};

export default ShowMotive;
