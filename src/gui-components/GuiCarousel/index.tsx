import React, { FC, useEffect, useState } from "react";
import styles from "./GuiCarousel.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";
import { ReactNodeArray } from "react";

interface GuiCarouselProps extends DefaultProps {
  children: ReactNodeArray;
  delay: number;
  width?: number;
  height?: number;
  bottomNavigation?: boolean;
  bottomNavigationOpacity?: number;
  inactiveImageButtonColor?: string;
  activeImageButtonColor?: string;
  onClick?: (activeItem: number) => void;
}

const GuiCarousel: FC<GuiCarouselProps> = ({
  children,
  delay,
  height = 600,
  width = 900,
  inactiveImageButtonColor = "white",
  activeImageButtonColor = "black",
  bottomNavigationOpacity = 70,
  bottomNavigation = true,
  onClick,
  ...rest
}: GuiCarouselProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const numVisibleItems = 1;

  const changeActiveItem = (clicked?: number) => {
    if (clicked) {
      setActiveItem(clicked);
      return;
    }
    setActiveItem(activeItem + 1 < children.length ? activeItem + 1 : 0);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => changeActiveItem(), delay);
    return () => clearTimeout(timeoutID);
  }, [activeItem]);

  const renderCarouselItem = () => {
    return children.map((child, i) => (
      <div className={cx(styles.carouselItemWrapper, styles.size1)} key={i}>
        {child}
      </div>
    ));
  };

  const renderCarouselButtons = () => {
    const originLeft = 50 - children.length;
    return children.map((_, i) => (
      <div
        onClick={() => changeActiveItem(i)}
        className={styles.imageLink}
        key={i}
        style={{
          left: `${originLeft + 2 * i}%`,
          opacity: `${bottomNavigationOpacity}%`,
          background:
            activeItem === i
              ? activeImageButtonColor
              : inactiveImageButtonColor,
        }}
      />
    ));
  };

  return (
    <div
      className={styles.root}
      style={{ height, width }}
      onClick={() => onClick && onClick(activeItem)}
      {...rest}
    >
      <div
        style={{
          transform: `translateX(${(-activeItem * 100) / numVisibleItems}%)`,
          transition: `transform .3s`,
        }}
        className={styles.container}
      >
        {renderCarouselItem()}
      </div>
      {bottomNavigation && renderCarouselButtons()}
    </div>
  );
};

export default GuiCarousel;
