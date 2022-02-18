import React, { FC, useState, useEffect } from "react";
import styles from "./imageStyle.module.css";
import MotiveImage from "./MotiveImage";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { MotiveDto, PhotoDto } from "../../../generated";
import { useParams } from "react-router-dom";
import { MotiveApi } from "../../utils/api/MotiveApi";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { createImgUrl } from "../../utils/createImgUrl/createImgUrl";

const ShowMotive: FC = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [motiveResponse, setMotiveResponse] = useState<MotiveDto>(
    {} as MotiveDto,
  );

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {id} = useParams<{id: string}>();

  const updateIndex = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const imageItems = photoResponse.map((image: PhotoDto, index: number) => {
    return (
      <MotiveImage
        id={image.photoId.id}
        image={createImgUrl(image)}
        key={index}
        imageListProp={photoResponse}
        index={index}
        updateIndex={() => updateIndex(index)}
        title={image.motive.title}
      />
    );
  });

  useEffect(() => {
    // TODO: Fix response type
    if (id) {
      MotiveApi.getById(id)
      .then((res) => setMotiveResponse(res))
      .catch((e) => console.log(e));
      PhotoApi.getAllByMotiveId(id)
      .then((res) => setPhotoResponse(res))
      .catch((e) => console.log(e));
    }
  }, []);

  return (
    <>
      <div className={styles.backgroundFlex}>
        <div className={styles.imageHeader}>
          <p className={styles.headerText}>{motiveResponse.title}</p>
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
          mainSrc={createImgUrl(photoResponse[photoIndex])}
          nextSrc={
            createImgUrl(photoResponse[(photoIndex + 1) % photoResponse.length])
          }
          prevSrc={
            createImgUrl(photoResponse[
              (photoIndex + images.length - 1) % photoResponse.length
            ])
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + photoResponse.length - 1) % photoResponse.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photoResponse.length)
          }
        />
      )}
    </>
  );
};

export default ShowMotive;
