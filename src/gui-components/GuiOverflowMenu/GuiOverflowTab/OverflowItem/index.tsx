import React, { FC } from "react";
import { DefaultProps } from "../../../../types";
import styles from "./GuiOverflowItem.module.css";

interface Props extends DefaultProps {
  text: string;
  icon: any;
}

const GuiOverflowMenuItem: FC<Props> = ({ text, icon }: Props) => {
  return (
    <div className={styles.OverflowMenuItem}>
      {icon}
      {text}
    </div>
  );
};

export default GuiOverflowMenuItem;
