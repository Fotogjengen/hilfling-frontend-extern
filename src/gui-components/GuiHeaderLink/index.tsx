import React, { FC } from "react";
import styles from "./GuiHeaderLink.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

export interface Props extends DefaultProps {
  /** Content inside tags */
  children: any;
  /** Function that gets called when clicked */
  onClick?: () => void;
}

const GuiHeaderLink: FC<Props> = ({
  children,
  onClick,
  className,
  ...rest
}: Props) => (
  <div className={styles.container}>
    <p
      className={cx(styles.headerTextElement, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </p>
  </div>
);

export default GuiHeaderLink;
