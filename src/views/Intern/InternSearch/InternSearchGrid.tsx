import React from "react";
import styles from "./InternSearch.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
          <Grid container spacing={0} columns={10}>
            <Grid item xs>
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
            <Grid item xs={1}>
              <Item>Skannet</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className={styles.gridContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} columns={10}>
            <Grid item xs>
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
            <Grid item>
              <Item>
                <img
                  alt="picture"
                  style={{
                    height: "5rem",
                    margin: "0px",
                    display: "flex",
                    alignContent: "center",
                  }}
                  src="#"
                />
              </Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Skannet</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default InternSearchGrid;
