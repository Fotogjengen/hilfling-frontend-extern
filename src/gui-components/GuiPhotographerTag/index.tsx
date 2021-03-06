import React, { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./GuiPhotographerTag.module.css";
import { DefaultProps } from "../../types";

type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props extends DefaultProps {
  /** Text inside tag */
  children?: ReactNode;
  /** Color of tag */
  color: ColorType;
}

const GuiPhotographerTag: FC<Props> = ({
  children,
  color,
  className,
  ...rest
}: Props) => {
  return (
    <div className={cx(styles[color], styles.tag, className)} {...rest}>
      {children}
    </div>
  );
};

export default GuiPhotographerTag;
