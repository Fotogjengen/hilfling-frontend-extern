import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiOverflow.module.css";
import { DefaultProps } from "../../../types";

interface Props extends DefaultProps {
  children?: any;
  overflowTabClass: string;
}

const GuiOverflowMenu2: FC<Props> = ({
  overflowTabClass,
  children,
  className,
}: Props) => {
  const OverflowTabClass = cx(styles.OverflowTab, {
    [styles.OverflowMenu]: overflowTabClass == "showContent",
  });

  return <div className={OverflowTabClass}>{children}</div>;
};

export default GuiOverflowMenu2;
