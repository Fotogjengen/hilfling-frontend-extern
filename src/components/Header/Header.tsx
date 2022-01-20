import React, { FC } from "react";
import styles from "./Header.module.css";
import { GuiHeader } from "../../gui-components";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import GuiLogo from "../../gui-components/GuiLogo";

const HeaderComponent: FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { replace } = useHistory();

  return (
    <div className={styles.header}>
      <div style={{ color: "#1b1b1b" }}>
        <GuiLogo size={60} onClick={() => replace("/")} />
      </div>
      <div className={styles.linkContainer}>
        <GuiHeader>
          <div
            className={styles.headerTextElement}
            onClick={() => replace("/photos")}
          >
            BILDER
          </div>
          <div
            className={styles.headerTextElement}
            onClick={() => replace("/about")}
          >
            OM OSS
          </div>

          <div
            className={styles.headerTextElement}
            onClick={() => replace("/intern/last-opp")}
          >
            LAST OPP
          </div>

          {/* {authenticated ? (
          <GuiHeaderLink onClick={logout}>LOGG UT</GuiHeaderLink>
        ) : (
          <GuiHeaderLink onClick={login}>LOGG INN</GuiHeaderLink>
        )} */}
        </GuiHeader>
        <GuiHeader float="right">
          {isAuthenticated ? (
            <div
              className={styles.headerTextElement}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              LOGG UT
            </div>
          ) : (
            <div
              className={styles.headerTextElement}
              onClick={() => loginWithRedirect()}
            >
              LOGG INN
            </div>
          )}
        </GuiHeader>
      </div>
    </div>
  );
};

export default HeaderComponent;
