import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiCard.module.css";
import { DefaultProps, EventType } from "../../types";

export interface Props extends DefaultProps {
  /** Children components */
  children?: any;
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
  ...rest
}: Props) => {
  console.log(type);
  return (
    <div
      className={cx(
        {
          [styles.shadow]: shadow,
        },
        styles.card,
        className,
        type ? cx(styles[type]) : cx(rounded && styles.rounded),
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GuiCard;
