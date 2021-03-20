import React, { FC } from "react";
import GuiDotDivider, { ColorType } from "../GuiDotDivider";
import cx from "classnames";
import styles from "./GuiCardPreamble.module.css";
import { DefaultProps, CardType } from "../../types";

interface Props extends DefaultProps {
  /** Number of images in event album */
  images: number;
  /** Date of event e.g.: temafest: halloween */
  date: string;
  /** Type of card */
  type: CardType;
  /** Color of dot divider */
  color: ColorType;
  /** Location of event e.g.: Daglighallen */
  location?: string;
  /** Centered */
  centered?: boolean;
}

const GuiCardPreamble: FC<Props> = ({
  images,
  date,
  type,
  color,
  location,
  centered,
  className,
  ...rest
}: Props) => {
  const centeredText = cx({ [styles.centered]: centered });
  switch (type) {
    case "EventCard":
      return (
        <div className={cx(centeredText, className)} {...rest}>
          {images} bilder
          <GuiDotDivider color={color} />
          {date}
          <GuiDotDivider color={color} />
          {location}
        </div>
      );
    case "GjengfotoCard":
      return (
        <div className={cx(centeredText)} {...rest}>
          {images} bilder
          <GuiDotDivider color={color} />
          {date}
        </div>
      );
    default:
      return <div>error</div>;
  }
};

export default GuiCardPreamble;
