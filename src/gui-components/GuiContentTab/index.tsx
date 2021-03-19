import React, { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./GuiContentTab.module.css";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  contentTabClass: string;
  name: string;
  //hva skal dukke opp dersom man trykker på
  children?: ReactNode;
}

const GuiContentTab: FC<Props> = ({ contentTabClass, children }: Props) => {
  const ContentTabClass = cx(styles.ContentTab, {
    [styles.column]: contentTabClass == "column",
    [styles.hide]: contentTabClass == "hideContent",
    [styles.ContentTab]: contentTabClass == "ContentTab",
  });

  return <div className={ContentTabClass}>{children}</div>;
};

export default GuiContentTab;
