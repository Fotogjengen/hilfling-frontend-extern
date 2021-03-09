<<<<<<< HEAD
import React, { FC, ReactNode } from "react";
=======
import React, { FC } from "react";
>>>>>>> origin/master
import cx from "classnames";
import styles from "./GuiOverflow.module.css";
import { DefaultProps } from "../../../types";

interface Props extends DefaultProps {
<<<<<<< HEAD
  children?: ReactNode;
  overflowTabClass: string;
}

const GuiOverflowMenu2: FC<Props> = ({ overflowTabClass, children }: Props) => {
=======
  children?: any;
  overflowTabClass: string;
}

const GuiOverflowMenu2: FC<Props> = ({
  overflowTabClass,
  children,
  className,
}: Props) => {
>>>>>>> origin/master
  const OverflowTabClass = cx(styles.OverflowTab, {
    [styles.OverflowMenu]: overflowTabClass == "showContent",
  });

  return <div className={OverflowTabClass}>{children}</div>;
};

export default GuiOverflowMenu2;
