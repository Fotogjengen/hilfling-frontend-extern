import React, { FC, ReactNode } from "react";
import styles from "./GuiHeader.module.css";
import GuiLogo from "../GuiLogo";
import GuiHamburger from "../GuiHamburger";
import { DefaultProps } from "../../types";
import cx from "classnames";
import { Link } from "react-router-dom";

interface Props extends DefaultProps {
  /** Elements in the header, after hamburger meny */
  children?: ReactNode;
}

const GuiHeader: FC<Props> = ({ children, className, ...rest }: Props) => (
  <div className={styles.container}>
    <Link to="/" style={{color: "#1b1b1b"}}>
      <GuiLogo size={60} />
    </Link>
    <div className={cx(styles.childrenContainer, className)} {...rest}>
      <GuiHamburger
        menuClicked={() => console.log("click")}
        color="black"
        isOpen={false}
        width={30}
        height={20}
        strokeWidth={3}
      />
      {children}
    </div>
  </div>
);

export default GuiHeader;
