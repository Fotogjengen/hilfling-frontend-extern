import React, { FC, ReactNode } from "react";
import styles from "./GuiHeader.module.css";
import { DefaultProps } from "../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  /** Elements in the header, after hamburger meny */
  children?: ReactNode;
  float?: "left" | "right";
}

const GuiHeader: FC<Props> = ({
  children,
  float = "left",
  className,
  ...rest
}: Props) => (
  <div
    className={cx(styles.childrenContainer, className, {
      left: float === "left",
      right: float === "right",
    })}
    {...rest}
  >
    {children}
  </div>
);

export default GuiHeader;
