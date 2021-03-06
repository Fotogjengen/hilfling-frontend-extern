import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiCarouselItem.module.css";
import { BaseCarouselItem } from "../../types";

interface GuiCarouselItemProps extends BaseCarouselItem {
  height: number;
  width: number;
}

interface GuiCarouselItemsProps {
  items: BaseCarouselItem[];
  height: number;
  width: number;
}

const GuiCarouselItem: FC<GuiCarouselItemProps> = ({
  title,
  image,
  width,
  height,
}: GuiCarouselItemProps) => {
  return (
    <div className={cx(styles.root)}>
      <div className={styles.initialInfoContainer}>
        <img
          style={{ width, height }}
          className={styles.image}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

const GuiCarouselItems = ({
  items,
  height,
  width,
}: GuiCarouselItemsProps): unknown => {
  return items.map((item, index) => (
    <GuiCarouselItem
      image={item.image}
      title={item.title}
      height={height}
      width={width}
      key={index}
    />
  ));
};

export default GuiCarouselItems;
