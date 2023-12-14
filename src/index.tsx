import React, { useState, FC } from "react";
import { render } from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";
import { theme } from "./styles/muiStyles";
import { AlertContext, severityEnum } from "./contexts/AlertContext";
import { ImageContext } from "./contexts/ImageContext";
import Alert from "./components/Alert/Alert";
import Lightbox from "react-image-lightbox";
import { PhotoDto } from "../generated";
import { createImgUrl } from "./utils/createImgUrl/createImgUrl";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { azureConfig } from "./azureconfig";
import { AuthenticationResult } from "@azure/msal-common";

const Root: FC = () => {
  //Msal should be instanciated outside component tree to prevent it from being re-instanciated on re-renders
  const msalInstance = new PublicClientApplication(azureConfig);

  // Default for using the first account if no account is active on page load.
  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    // Set the active account using the first account in the list
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  //listen for sign-in event and set active account
  msalInstance.addEventCallback((event) => {
    const payload = event.payload as AuthenticationResult;
    if (event.eventType === EventType.LOGIN_SUCCESS && payload.account) {
      const account = payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  // Hooks for the Alert component
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(severityEnum.INFO);
  const [photos, setPhotos] = useState<PhotoDto[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ImageContext.Provider
          value={{
            isOpen,
            setIsOpen,
            photoIndex,
            setPhotoIndex,
            photos,
            setPhotos,
          }}
        >
          <MsalProvider instance={msalInstance}>
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
              <Box sx={{ m: "2rem" }}>
                <Router>
                  <HeaderComponent />
                  <AppRoutes />
                </Router>
              </Box>
              <GuiFooter />
            </AlertContext.Provider>
          </MsalProvider>

          {isOpen && (
            <Lightbox
              mainSrc={createImgUrl(photos[photoIndex])}
              nextSrc={createImgUrl(photos[(photoIndex + 1) % photos.length])}
              prevSrc={createImgUrl(
                photos[(photoIndex + photos.length - 1) % photos.length],
              )}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % photos.length)
              }
            />
          )}
        </ImageContext.Provider>
      </ThemeProvider>
    </>
  );
};

render(<Root />, document.getElementById("root"));
