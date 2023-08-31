import React from "react";
import styles from "./InternSearch.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const data = [
  {
    album: "testalbum",
    motiv: "testmotiv",
    dato: "testDAto",
    type: "testType",
    sted: "testSted",
    oppslag: "testOppslag",
    rettighet: "testrettighet",
    scannet: "testscan",
    photo:
      "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
  },
];

const InternSearchGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div className={styles.gridContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5} columns={10}>
            <Grid item xs={1}>
              <Item>Album</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Motiv</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Dato</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Type</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Sted</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Oppslag</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Rettighet</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Skannet</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Miniatyr</Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className={styles.gridContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5} columns={10}>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item xs={1}>
                  <Item>{item.album}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.motiv}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.dato}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.type}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.sted}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.oppslag}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.rettighet}</Item>
                </Grid>
                <Grid item xs={1}>
                  <Item>{item.scannet}</Item>
                </Grid>
                <Item>
                  <img
                    alt="picture"
                    style={{
                      height: "5rem",
                      margin: "0px",
                      display: "flex",
                      width: "3rem",
                      alignContent: "center",
                    }}
                    src={item.photo}
                  />
                </Item>
                <Grid direction="row" item xs={1}>
                  <Item>
                    <Button size="small" variant="contained" sx={{}} fullWidth>
                      Rediger
                    </Button>
                    <Button size="small" variant="contained" sx={{}} fullWidth>
                      Slett
                    </Button>
                  </Item>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default InternSearchGrid;
