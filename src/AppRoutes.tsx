import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./views/App/App";
import About from "./views/About/About";
import MyProfile from "./views/MyProfile/MyProfile";
import ShowMotive from "./components/ImageViewer/ShowMotive";
import PhotoUpload from "./views/Intern/PhotoUpload/PhotoUpload";
import Arkivsjef from "./views/Intern/Arkivsjef/ArchiveBoss";
import NotFound from "./views/NotFound/NotFound";
import Search from "./components/searchPage/Search";
import CsaTester from "./views/CsaTester";

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/motive" element={<ShowMotive />} />
        <Route path="/motive/:id" element={<ShowMotive />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/csa-tester" element={<CsaTester />} />
        <Route path="/intern/last-opp" element={<PhotoUpload />} />
        <Route path="/intern/arkivsjef" element={<Arkivsjef />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
