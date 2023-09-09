import React, { useState, FC } from "react";
import { render } from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { GuiFooter } from "./gui-components";
import HeaderComponent from "./components/Header/Header";
import { theme } from "./styles/muiStyles";
import { Auth0Provider } from "@auth0/auth0-react";
import { AlertContext, severityEnum } from "./contexts/AlertContext";
import { ImageContext } from "./contexts/ImageContext";
import Alert from "./components/Alert/Alert";
import Lightbox from "react-image-lightbox";
import { PhotoDto } from "../generated";
import { createImgUrl } from "./utils/createImgUrl/createImgUrl";

const Root: FC = () => {
  // Hooks for the Alert component
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(severityEnum.INFO);
  const [photos, setPhotos] = useState<PhotoDto[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <Auth0Provider
        domain="carosa.eu.auth0.com"
        clientId="7zfnSz84t1gQLq9D5NxFAbQPijqY1IgK"
        redirectUri={window.location.origin}
      >
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
            {isOpen && (
              <Lightbox
                mainSrc={createImgUrl(photos[photoIndex])}
                nextSrc={createImgUrl(photos[(photoIndex + 1) % photos.length])}
                prevSrc={createImgUrl(
                  photos[(photoIndex + photos.length - 1) % photos.length],
                )}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + photos.length - 1) % photos.length,
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % photos.length)
                }
              />
            )}
          </ImageContext.Provider>
        </ThemeProvider>
      </Auth0Provider>
    </>
  );
};

render(<Root />, document.getElementById("root"));
