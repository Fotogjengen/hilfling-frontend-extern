import React, { FC } from "react";
import GuiCard from "../GuiCard";
import { DefaultProps } from "../../types";
import { Props as CardProps } from "../GuiCard";
import styles from "./GuiImageCard.module.css";
import cx from "classnames";

type TOP = "top";
type LEFT = "left";

type ImagePlacement = TOP | LEFT;

interface Props extends DefaultProps, CardProps {
  /** image at top or to left */
  placement: ImagePlacement;
  /** image link */
  image: string;
  /** onClick method */
  onClick?: () => void;
  /** what is to be displayed on the card */
  children?: any;
}

const GuiImageCard: FC<Props> = ({
  placement,
  image,
  type,
  rounded,
  children,
  onClick,
}: Props) => {
  return (
    <div
      className={cx({
        [styles.top]: placement === "top",
        [styles.left]: placement === "left",
      })}
      onClick={onClick}
    >
      <img
        className={cx({
          [styles.topsize]: placement === "top",
          [styles.leftsize]: placement === "left",
        })}
        src={image}
      />

      <GuiCard
        shadow={false}
        type={type ? type : undefined}
        rounded={rounded ? rounded : undefined}
        className={styles.card}
      >
        <div>{children}</div>
      </GuiCard>
    </div>
  );
};

export default GuiImageCard;
