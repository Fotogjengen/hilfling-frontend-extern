import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";
import showMotive from "./components/ImageViewer/ShowMotive";
import PhotoUpload from "./views/Intern/PhotoUpload/PhotoUpload";
import Arkivsjef from "./views/Intern/Arkivsjef/ArchiveBoss";
import NotFound from "./views/NotFound/NotFound";
import Search from "./components/searchPage/Search";
import ProtectedRoute from "./utils/auth/ProtectedRoute";
import CsaTester from "./views/CsaTester";

const AppRoutes: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={App} />
          <Route path="/motive" element={showMotive} />
          <Route path="/motive/:id" element={showMotive} />
          <Route path="/about" element={About} />
          <Route path="/search" element={Search} />
          <Route path="/search/:term" element={Search} />
          <Route path="/myprofile" element={MyProfile} />
          <Route path="/csa-tester" element={CsaTester} />
          <ProtectedRoute path="/intern/last-opp" element={PhotoUpload} />
          <ProtectedRoute path="/intern/arkivsjef" element={Arkivsjef} />
          <Route element={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
