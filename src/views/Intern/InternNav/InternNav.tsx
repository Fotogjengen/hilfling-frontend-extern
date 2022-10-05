import React from "react";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import InventoryIcon from "@mui/icons-material/Inventory";
import UploadIcon from "@mui/icons-material/Upload";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ComputerIcon from "@mui/icons-material/Computer";
import { Link } from "react-router-dom";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Container, Grid, Paper, Typography } from "@mui/material";

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
      to: "/intern/motive",
      icon: <SportsKabaddiIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Profile",
      to: "/intern/myprofile",
      icon: <AccountBoxIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Samf wiki",
      to: "/samf-wiki",
      icon: <LibraryBooksIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Fg wiki",
      to: "/fg-wiki",
      icon: <CameraAltIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Utlån",
      to: "/utlaan",
      icon: <CameraswitchIcon style={{ fontSize: iconSize }} />,
    },
    {
      name: "Fg web",
      to: "/fg-web",
      icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {internLinks.map((link, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Link to={link.to}>
              <Item>
                <Typography>{link.name}</Typography>
                {link.icon}
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InternNav;
