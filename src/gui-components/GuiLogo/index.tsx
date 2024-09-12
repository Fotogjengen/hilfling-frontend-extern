import React, { FC } from "react";
import styles from "./GuiLogo.module.css";
import { LogoSvg } from "../Guiicons";
import { DefaultProps } from "../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  /** Size of logo, text scales with logo */
  size: number;
  /** What happens when clicking on logo */
  onClick?: () => void;
}

const GuiLogo: FC<Props> = ({ size, onClick, className, ...rest }: Props) => {
  return (
    <div
      style={{ height: size }}
      className={cx(styles.logo, className)}
      onClick={onClick}
      {...rest}
    >
      <LogoSvg size={size} />
      <h1 style={{ fontSize: size * 0.7 }} className={styles.name}>fotogjengen</h1>
    </div>
  );
};

export default GuiLogo;
