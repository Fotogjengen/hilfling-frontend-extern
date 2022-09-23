import React, { FC, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import {
  GuiCarouselItems,
  GuiCarousel as CarouselComponent,
} from "../../../gui-components";
import { BaseCarouselItem } from "../../../types";

const CarouselGammel: FC<Record<string, never>> = () => {
  const [items, setItems] = useState<BaseCarouselItem[]>([]);

  useEffect(() => {
    setItems([
      {
        title: "hei",
        image:
          "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      },
      {
        title: "hei2",
        image:
          "http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png",
      },
      {
        title: "hei3",
        image:
          "https://s1.1zoom.me/big0/752/Starfish_Shells_Summer_Glasses_Sand_569727_1280x853.jpg",
      },
    ]);
  }, []);
  return (
    <div className={styles.fitToCard}>
      <CarouselComponent delay={5000} height={500} width={900}>
        {GuiCarouselItems({ width: 900, height: 500, items })}
      </CarouselComponent>
    </div>
  );
};

export default CarouselGammel;
