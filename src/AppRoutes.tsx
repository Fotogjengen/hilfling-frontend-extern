import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";
import PhotoUpload from "./views/Intern/PhotoUpload/PhotoUpload";
import Arkivsjef from "./views/Intern/Arkivsjef/ArchiveBoss";
import NotFound from "./views/NotFound/NotFound";
import Search from "./views/Search/Search";
import CsaTester from "./views/CsaTester";
import Motives from "./views/Intern/Motives/Motives";
import LoggInn from "./views/Intern/LoggInn/LoggInn";
import EditMotive from "./views/Intern/EditMotive/EditMotive";
import InternNav from "./views/Intern/InternNav/InternNav";
import Expo from "./views/Intern/Expo/Expo";
import Redirect from "./utils/Redirect/Redirect";
import MotiveHeader from "./components/ImageViewer/MotiveHeader";
import { Box } from "@mui/material";

const AppRoutes: FC = () => {
  return (
    <Box sx={{ m: "1rem" }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/motive/:id" element={<MotiveHeader />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/intern/myprofile" element={<MyProfile />} />
        <Route path="/csa-tester" element={<CsaTester />} />
        <Route path="/intern/last-opp" element={<PhotoUpload />} />
        <Route path="/intern/arkivsjef" element={<Arkivsjef />} />
        <Route path="/intern/motive" element={<Motives />} />
        <Route path="/intern/motive/:id" element={<EditMotive />} />
        <Route path="/intern/expo" element={<Expo />} />
        <Route path="/logg-inn" element={<LoggInn />} />
        <Route path="/intern" element={<InternNav />} />

        <Route path="*" element={<NotFound />} />
        <Route
          path="/samf-wiki"
          element={<Redirect link="https://wiki.samfundet.no/wiki/" />}
        />
        <Route
          path="/fg-wiki"
          element={<Redirect link="https://wiki.samfundet.no/fg/" />}
        />
        <Route
          path="/utlaan"
          element={
            <Redirect link="https://wiki.samfundet.no/fg/Utl%C3%A5nsordning" />
          }
        />
        <Route
          path="/fg-web"
          element={<Redirect link="https://github.com/Fotogjengen/" />}
        />
      </Routes>
    </Box>
  );
};

export default AppRoutes;
