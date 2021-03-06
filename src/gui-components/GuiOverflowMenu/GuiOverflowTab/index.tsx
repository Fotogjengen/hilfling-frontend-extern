import React, { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./GuiOverflowTab.module.css";
import { DefaultProps } from "../../../types";

interface Props extends DefaultProps {
  children?: ReactNode;
  overflowTabClass: string;
}

const OverflowMenu2: FC<Props> = ({ overflowTabClass, children }: Props) => {
  const OverflowTabClass = cx(styles.OverflowTab, {
    [styles.OverflowMenu]: overflowTabClass == "showContent",
  });

  return <div className={OverflowTabClass}>{children}</div>;
};

export default OverflowMenu2;
