import * as React from "react";
import styles from "./Header.module.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import LogoSvg from "../../gui-components/Guiicons/LogoSvg";
import { GuiLogo } from "../../gui-components";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const pages = ["Album", "About", "Search"];
const settings = ["Bilder", "About", "Search", "LogInn"];

const HeaderComponent = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const replace = useNavigate();

  return (
    <div className={styles.head}>
      <GuiLogo size={60} onClick={() => replace("/")} />
      <nav className={styles.navContainer}>
        <div className={styles.navList}>
          <Link to="/search">BILDER</Link>
          <Link to="/about">OM OSS</Link>
          <Link to="/intern/last-opp">LAST OPP</Link>
          <Link to="/search">SØK</Link>
        </div>
        <div className={styles.loggContainer}>
          <Typography className={styles.loggButton}>
            {isAuthenticated ? (
              <div onClick={() => logout({ returnTo: window.location.origin })}>
                LOGG UT
              </div>
            ) : (
              <div onClick={() => loginWithRedirect()}>LOGG INN</div>
            )}
          </Typography>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
