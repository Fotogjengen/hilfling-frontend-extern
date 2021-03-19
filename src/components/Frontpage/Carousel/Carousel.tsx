import React, { FC, Fragment, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import {
  GuiCarouselItems,
  GuiCarousel as CarouselComponent,
} from "../../../gui-components";
import { BaseCarouselItem } from "../../../types";
import Slider from "react-slick";

const Carousel: FC<Record<string, never>> = () => {
  const [items, setItems] = useState<BaseCarouselItem[]>([]);

  useEffect(() => {
    setItems([
      {
        title: "hei",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGfL49kTB0zjHmH-pV8rK8-QWcRawdK7qASmj32j1BnWZl2UO&s",
      },
      {
        title: "hei2",
        image:
          "http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png",
      },
    ]);
  }, []);

  const settings = {
    dots: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGfL49kTB0zjHmH-pV8rK8-QWcRawdK7qASmj32j1BnWZl2UO&s"
          alt="wow"
        />
      </div>
      <div>
        <img
          src="http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png"
          alt="woow"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
