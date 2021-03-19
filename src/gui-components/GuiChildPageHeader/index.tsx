import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiChildPageHeader.module.css";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  title: string;
}

const GuiChildPageHeader: FC<Props> = ({ title, className }: Props) => {
  const style = cx(styles.header, className);
  return (
    <div>
      <h1 className={style}>{title}</h1>
      <div className={styles.underline} />
    </div>
  );
};

export default GuiChildPageHeader;
