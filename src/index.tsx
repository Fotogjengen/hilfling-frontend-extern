import React, { useState, FC, useEffect } from "react";
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
import { AuthenticationContext } from "./contexts/AuthenticationContext";

const Root: FC = () => {
  // Hooks for the Alert component
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(severityEnum.INFO);
  const [photos, setPhotos] = useState<PhotoDto[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  //Hooks for the Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [position, setPosition] = useState("oo"); //Change maybe? verv?

  useEffect(() => {
    const data = window.localStorage.getItem("FG-WEBSITE");
    if (data !== null) {
      setIsAuthenticated(JSON.parse(data).isAuthenticated);
      setPosition(JSON.parse(data).position);
    }
  }, []);

  useEffect(() => {
    const data = {
      isAuthenticated: isAuthenticated,
      position: position,
    };
    window.localStorage.setItem("FG-WEBSITE", JSON.stringify(data)); //send inn dato ? ; )
  }, [isAuthenticated]);

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
          <AuthenticationContext.Provider
            value={{
              isAuthenticated,
              setIsAuthenticated,
              position,
              setPosition,
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
          </AuthenticationContext.Provider>

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
