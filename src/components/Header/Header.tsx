import React, { FC } from "react";
import styles from "./Header.module.css";
import { GuiHeader, GuiHeaderLink } from "../../gui-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import GuiLogo from "../../gui-components/GuiLogo";

// interface Props {
//   login: () => void;
//   logout: () => void;
//   authenticated: boolean | null;
// }

const HeaderComponent: FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className={styles.header}>
      <Link to="/" style={{ color: "#1b1b1b" }}>
        <GuiLogo size={60} />
      </Link>
      <div className={styles.linkContainer}>
        <GuiHeader>
          <Link component={GuiHeaderLink} to="/photos">
            BILDER
          </Link>
          <Link component={GuiHeaderLink} to="/about">
            OM OSS
          </Link>

          <Link component={GuiHeaderLink} to="/intern/last-opp">
            LAST OPP
          </Link>

          {/* {authenticated ? (
          <GuiHeaderLink onClick={logout}>LOGG UT</GuiHeaderLink>
        ) : (
          <GuiHeaderLink onClick={login}>LOGG INN</GuiHeaderLink>
        )} */}
        </GuiHeader>
        <GuiHeader float="right">
          {isAuthenticated ? <Button
              sx={{
                color: "black",
                fontSize: "1.7rem",
                "&:hover": {
                  background: "none",
                },
              }}
              variant="text"
              onClick={() => logout({ returnTo: window.location.origin })}
          >
            LOGG UT
          </Button> : <Button
              sx={{
                color: "black",
                fontSize: "1.7rem",
                "&:hover": {
                  background: "none",
                },
              }}
              variant="text"
              onClick={() => loginWithRedirect()}
          >
            LOGG INN
          </Button>}
        </GuiHeader>
      </div>
    </div>
  );
};

export default HeaderComponent;
