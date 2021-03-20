import React, { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./GuiCard.module.css";
import { DefaultProps, EventType } from "../../types";

export interface Props extends DefaultProps {
  /** Children components */
  children?: ReactNode;
  /** Specifies type of event card */
  type?: EventType;
  /** Rounded corners */
  rounded?: boolean;
  /** Shadow */
  shadow?: boolean;
  /** onClick method */
  onClick?: () => void;
}

const GuiCard: FC<Props> = ({
  children,
  type,
  rounded = false,
  className,
  shadow = true,
  onClick,
}: Props) => {
  console.log(type);
  return (
    <span
      className={cx(
        {
          [styles.shadow]: shadow,
        },
        styles.div,
        styles.card,
        className,
        type ? cx(styles[type]) : cx(rounded && styles.rounded),
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default GuiCard;
