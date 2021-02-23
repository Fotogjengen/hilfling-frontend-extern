import React, { FC } from "react";
import styles from "./Header.module.css";
import { GuiHeader, GuiHeaderLink } from "../../gui-components";

// interface Props {
//   login: () => void;
//   logout: () => void;
//   authenticated: boolean | null;
// }

const HeaderComponent: FC = () => {
  return (
    <div className={styles.header}>
      <GuiHeader>
        <GuiHeaderLink>BILDER</GuiHeaderLink>
        <GuiHeaderLink>OM OSS</GuiHeaderLink>
        <GuiHeaderLink>LOGG INN</GuiHeaderLink>
        {/* {authenticated ? (
          <GuiHeaderLink onClick={logout}>LOGG UT</GuiHeaderLink>
        ) : (
          <GuiHeaderLink onClick={login}>LOGG INN</GuiHeaderLink>
        )} */}
      </GuiHeader>
    </div>
  );
};

export default HeaderComponent;
