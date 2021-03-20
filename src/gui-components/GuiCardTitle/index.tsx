import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiCardTitle.module.css";
import { DefaultProps } from "../../types";
import { Typography } from "@material-ui/core";

interface Props extends DefaultProps {
  /** Title */
  title: string;
  /** If title should be capitalized */
  capitalized?: boolean;
  /** If title should be centerned */
  centered?: boolean;
}

const GuiCardTitle: FC<Props> = ({
  title,
  capitalized,
  centered,
  className,
  ...rest
}: Props) => {
  const classname = cx(
    styles.cardtitle,
    { [styles.capitalized]: capitalized },
    { [styles.centered]: centered },
    className,
  );
  return (
    <Typography component="span" variant="h5" className={classname} {...rest}>
      {title}
    </Typography>
  );
};

export default GuiCardTitle;
