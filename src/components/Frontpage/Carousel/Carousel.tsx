import React, { FC, useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { PhotoDto } from "../../../../generated";
import { PhotoCarouselApi } from "../../../utils/api/PhotoCarouselApi";

const Carousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideGoRight, setSlideGoRight] = useState(true);

  const [carouselPhotos, setCarouselPhotos] = useState<PhotoDto[]>([]);

  const onArrowRightClick = () => {
    if (currentSlide >= carouselPhotos.length) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    setSlideGoRight(true);
  };

  const onArrowLeftClick = () => {
    if (currentSlide <= 1) {
      setCurrentSlide(carouselPhotos.length);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    setSlideGoRight(false);
  };

  useEffect(() => {
    if (slideGoRight) {
      const timer = setTimeout(() => onArrowRightClick(), 30000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => onArrowLeftClick(), 30000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  useEffect(() => {
    PhotoCarouselApi.getAllCarouselPhotos()
      .then((res) => {
        setCarouselPhotos(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        {carouselPhotos.map((img, index) => {
          return (
            <img
              key={index}
              className={styles.img}
              style={{
                opacity: currentSlide - 1 == index ? "1" : "0",
                transition: "opacity 1.5s ease-out",
              }}
              src={img.mediumUrl}
              alt={img.motive.title}
            />
          );
        })}

        <div className={styles.arrows}>
          <ArrowBackIosNewRoundedIcon
            style={{ fontSize: 40 }}
            onClick={() => onArrowLeftClick()}
          />
          <ArrowForwardIosRoundedIcon
            style={{ fontSize: 40 }}
            onClick={() => onArrowRightClick()}
          />
        </div>
      </div>
    </>
  );
};
export default Carousel;
