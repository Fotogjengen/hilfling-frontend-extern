import React from "react";
import styles from "./InternNav.module.css";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import InventoryIcon from "@mui/icons-material/Inventory";
import UploadIcon from "@mui/icons-material/Upload";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Link } from "react-router-dom";

const InternNav = () => {
  const iconSize = 100;
  const internLinks = [
    {
      name: "Internsøk",
      to: "/søk",
      icon: <ImageSearchIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Last opp",
      to: "/intern/last-opp",
      icon: <UploadIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Arkiv",
      to: "/intern/arkivsjef",
      icon: <InventoryIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Motiv",
      to: "/intern/arkivsjef",
      icon: <SportsKabaddiIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Profile",
      to: "/intern/myprofile",
      icon: <AccountBoxIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Blank",
      to: "/nopage",
      icon: <CheckBoxOutlineBlankIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Blank",
      to: "/nopage",
      icon: <CheckBoxOutlineBlankIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Blank",
      to: "/nopage",
      icon: <CheckBoxOutlineBlankIcon style={{ fontSize: iconSize }} />,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div>Hei bitch hva vild du?</div>
        <div className={styles.linkContainer}>
          {internLinks.map((link, index) => (
            <Link className={styles.linkBox} key={index} to={link.to}>
              {link.name}
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default InternNav;
