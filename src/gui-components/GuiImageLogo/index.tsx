import React, { FC } from "react";
import styles from "./GuiImageLogo.module.css";
import { LogoSvg } from "../Guiicons";
import { DefaultProps } from "../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  /** Size of logo, text scales with logo */
  size: number;
  /** What happens when clicking on logo */
  onClick?: () => void;
}

const GuiImageLogo: FC<Props> = ({
  size,
  onClick,
  className,
  ...rest
}: Props) => {
  return (
    <div
      style={{ height: size }}
      className={cx(styles.logo, className)}
      onClick={onClick}
      {...rest}
    >
      <LogoSvg size={size} />
    </div>
  );
};

export default GuiImageLogo;
