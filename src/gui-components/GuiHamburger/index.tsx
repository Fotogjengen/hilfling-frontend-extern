import React, { FC, useState } from "react";
import HamburgerMenu, { HamburgerMenuProps } from "react-hamburger-menu";
import styles from "./GuiHamburger.module.css";
import { DefaultProps } from "../../types";
import cx from "classnames";

const GuiHamburger: FC<HamburgerMenuProps & DefaultProps> = ({
  isOpen,
  height,
  width,
  strokeWidth,
  color,
  animationDuration,
  borderRadius,
  menuClicked,
  rotate,
  className,
  ...rest
}) => {
  const [displayCross, setDisplayCross] = useState<boolean>(isOpen);
  const handleClick = () => {
    setDisplayCross(!displayCross);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    menuClicked(); // TODO: Can't fix because of 3rd party library
  };
  return (
    <div className={cx(styles.container, className)} {...rest}>
      <HamburgerMenu
        menuClicked={handleClick}
        isOpen={displayCross}
        color={color}
        height={height}
        width={width}
        strokeWidth={strokeWidth}
        animationDuration={animationDuration}
        borderRadius={borderRadius}
        rotate={rotate}
      />
    </div>
  );
};

export default GuiHamburger;
