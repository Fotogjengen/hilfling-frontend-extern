import React, { FC, useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GuiLogo } from "../../gui-components";
import { Grow, Collapse } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LockIcon from "@mui/icons-material/Lock";
import NoEncryptionGmailerrorredIcon from "@mui/icons-material/NoEncryptionGmailerrorred";
import SearchIcon from "@mui/icons-material/Search";
import { useMsal } from "@azure/msal-react";
import AzureLogin from "../../views/Login/AzureLogin";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

const HeaderComponent: FC = () => {
  const { isAuthenticated, setIsAuthenticated, setPosition } = useContext(
    AuthenticationContext,
  );

  const [i, setI] = useState(0);

  const replace = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const onMenuClick = () => setShowMenu(true);
  const onCloseClick = () => setShowMenu(false);
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
      name: "Søk",
      to: "/search",
      icon: <SearchIcon />,
      noAuth: true,
    },

    ...(isAuthenticated
      ? [
          {
            name: "Intern",
            to: "/intern",
            icon: <AccessibilityNewIcon />,
            noAuth: true,
          },
        ]
      : []),
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
            {isAuthenticated ? <Link to="/intern/">INTERN</Link> : <></>}
            <Link to="/search">SØK</Link>
          </div>
          <div className={styles.loggContainer}>
            <AzureLogin />
            <button
              onClick={() => {
                if (i % 2 === 0) {
                  setIsAuthenticated(true), setPosition("FG"), setI(i + 1);
                } else {
                  setIsAuthenticated(false), setPosition("oo"), setI(i + 1);
                }
              }}
            >
              endre auth
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
