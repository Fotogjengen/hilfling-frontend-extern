import * as React from "react";
import styles from "./Header.module.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import { GuiLogo } from "../../gui-components";
import { Slide, Grow, Typography, Box, Collapse } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import ImageIcon from "@mui/icons-material/Image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import UploadIcon from "@mui/icons-material/Upload";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LockIcon from "@mui/icons-material/Lock";
import NoEncryptionGmailerrorredIcon from "@mui/icons-material/NoEncryptionGmailerrorred";

const HeaderComponent = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const replace = useNavigate();

  const [showMenu, setShowMenu] = React.useState(false);
  const onMenuClick = () => setShowMenu(true);
  const onCloseClick = () => setShowMenu(false);

  const isMobile = useMediaQuery({ query: `(max-width: 50rem)` });

  const handleResize = () => setShowMenu(false);

  window.addEventListener("resize", handleResize);

  const menuLinks = [
    {
      name: "Bilder",
      to: "/search",
      icon: <ImageIcon />,
      noAuth: true,
    },
    {
      name: "Om oss",
      to: "/about",
      icon: <InfoIcon />,
      noAuth: true,
    },
    {
      name: "Last opp",
      to: "/intern/last-opp",
      icon: <UploadIcon />,
      noAuth: isAuthenticated,
    },
    {
      name: "Søk",
      to: "/search",
      icon: <ImageSearchIcon />,
      noAuth: true,
    },
    {
      name: "Logg inn",
      to: "/logg-inn",
      icon: <LockIcon />,
      noAuth: !isAuthenticated,
    },
    {
      name: "Logg ut",
      to: "/logg-inn",
      icon: <NoEncryptionGmailerrorredIcon />,
      noAuth: isAuthenticated,
    },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navHead}>
          <GuiLogo size={50} onClick={() => replace("/")} />
          <div className={styles.hamburger}>
            {showMenu ? (
              <CloseIcon onClick={() => onCloseClick()} fontSize="large" />
            ) : (
              <MenuIcon onClick={() => onMenuClick()} fontSize="large" />
            )}
          </div>
        </div>
        <Collapse in={showMenu} className={styles.navMenuList}>
          <>
            {menuLinks.map((link, index) => {
              if (link.noAuth) {
                return (
                  <Grow
                    key={index}
                    in={showMenu}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(showMenu ? { timeout: index * 500 + 500 } : {})}
                  >
                    <Link className={styles.menuLink} to={link.to}>
                      {link.name} {link.icon}
                    </Link>
                  </Grow>
                );
              }
            })}
          </>
        </Collapse>
        <div className={styles.navContainer}>
          <div className={styles.navList}>
            <Link to="/search">BILDER</Link>
            <Link to="/about">OM OSS</Link>
            {isAuthenticated && <Link to="/intern/last-opp">LAST OPP</Link>}

            <Link to="/search">SØK</Link>
          </div>
          <div className={styles.loggContainer}>
            {isAuthenticated ? (
              <Link to="/logg-inn"> LOGG UT </Link>
            ) : (
              <Link to="/logg-inn"> LOGG INN </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
