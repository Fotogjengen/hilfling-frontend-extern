import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiTab.module.css";
import { DefaultProps, EventType } from "../../types";

interface OtherTabProp {
  /** GuiButton color */
  btnColor?: string;
  /** GuiButton border color */
  btnBorderColor?: string;
}

interface Props extends DefaultProps, OtherTabProp {
  /** Content inside */
  children?: any;
  /** Primary button styling */
  type: EventType;
  /** Called when a button is clicked */
  onClick: (type: string) => void;
  /** Is it active? */
  active: boolean;
}

const GuiTab: FC<Props> = ({
  children,
  type,
  active,
  onClick,
  className,
  btnColor,
  btnBorderColor,
  ...rest
}: Props) => {
  const tabClass = cx(
    styles.tab,
    {
      [styles.active]: !active,
    },
    { [styles.samfundet]: type == "samfundet" },
    { [styles.uka]: type == "uka" },
    { [styles.isfit]: type == "isfit" },
    { [styles.annet]: type == "annet" },
    className,
  );
  const otherTabStyle =
    btnBorderColor && btnColor && active
      ? {
          backgroundColor: btnColor,
          borderTopColor: btnBorderColor,
          borderLeftColor: btnBorderColor,
          borderRightColor: btnBorderColor,
        }
      : undefined;

  return (
    <button
      className={tabClass}
      style={otherTabStyle}
      onClick={() => onClick(type)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GuiTab;
