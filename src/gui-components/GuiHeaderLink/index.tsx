import React, { FC, ForwardedRef, forwardRef } from "react";
import styles from "./GuiHeaderLink.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";
import { LinkProps } from "react-router-dom";

export interface Props extends DefaultProps {
  /** Content inside tags */
  children: any;
  /** Function that gets called when clicked */
  onClick?: () => void;
}

const GuiHeaderLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref: ForwardedRef<HTMLAnchorElement>) => (
    <div className={styles.container}>
      <a ref={ref} {...props} className={cx(styles.headerTextElement)}>
        {props.children}
      </a>
    </div>
  ),
);
GuiHeaderLink.displayName = "GuiHeaderLink";

export default GuiHeaderLink;
