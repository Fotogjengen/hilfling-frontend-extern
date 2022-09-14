import React from "react";
import styles from "./InternNav.module.css";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import InventoryIcon from "@mui/icons-material/Inventory";
import UploadIcon from "@mui/icons-material/Upload";
import { Link } from "react-router-dom";

const InternNav = () => {
  const internLinks = [
    {
      name: "Internsøk",
      to: "/søk",
      icon: <ImageSearchIcon style={{ fontSize: 100 }} />,
    },
    {
      name: "Last opp",
      to: "/intern/last-opp",
      icon: <UploadIcon style={{ fontSize: 100 }} />,
    },
    {
      name: "Arkiv",
      to: "/intern/arkivsjef",
      icon: <InventoryIcon style={{ fontSize: 100 }} />,
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
