import React, { FC, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { PhotoDto } from "../../../generated";
import { createImgUrl } from "../../utils/createImgUrl/createImgUrl";
import { Grid } from "@mui/material";
import MotiveImage from "../ImageViewer/MotiveImage";

interface Props {
  photos: PhotoDto[];
}

const MotiveView: FC<Props> = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const updateIndex = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const imageItems = photos.map((image: PhotoDto, index: number) => {
    const key = `motive-image${index}`;
    return (
      <Grid item key={key}>
        <MotiveImage
          id={image.photoId.id}
          image={createImgUrl(image)}
          imageListProp={photos}
          index={index}
          updateIndex={() => updateIndex(index)}
          title={image.motive.title}
        />
      </Grid>
    );
  });

  return (
    <>
      <Grid container spacing={2}>
        {imageItems}
      </Grid>
      {isOpen && (
        <Lightbox
          mainSrc={createImgUrl(photos[photoIndex])}
          nextSrc={createImgUrl(photos[(photoIndex + 1) % photos.length])}
          prevSrc={createImgUrl(
            photos[(photoIndex + photos.length - 1) % photos.length],
          )}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </>
  );
};

export default MotiveView;
