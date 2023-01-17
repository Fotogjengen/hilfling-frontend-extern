import React, { useState, FC } from "react";
import { render } from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import guistyles from "./styles/utilities.module.css";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";
import { theme } from "./styles/muiStyles";
import { Auth0Provider } from "@auth0/auth0-react";
import { AlertContext, severityEnum } from "./contexts/AlertContext";
import Alert from "./components/Alert/Alert";

const Root: FC = () => {
  // Hooks for the Alert component
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(severityEnum.INFO);

  return (
    <>
      <Auth0Provider
        domain="carosa.eu.auth0.com"
        clientId="7zfnSz84t1gQLq9D5NxFAbQPijqY1IgK"
        redirectUri={window.location.origin}
      >
        <ThemeProvider theme={theme}>
          <AlertContext.Provider
            value={{
              open,
              setOpen,
              setMessage,
              message,
              setSeverity,
              severity,
            }}
          >
            {open ? (
              <Alert
                open={open}
                setOpen={setOpen}
                message={message}
                severity={severity}
              />
            ) : null}
            <div className={guistyles.container}>
              <div className={"container"}>
                <Router>
                  <HeaderComponent />
                  <AppRoutes />
                </Router>
              </div>
            </div>
            <GuiFooter />
          </AlertContext.Provider>
        </ThemeProvider>
      </Auth0Provider>
    </>
  );
};

render(<Root />, document.getElementById("root"));
