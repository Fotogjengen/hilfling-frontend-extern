import React, { FC } from "react";
import {
  arkivsjefAlbum,
  arkivsjefKategori,
  arkivsjefMedium,
  arkivsjefSted,
} from "./mockdata";
import styles from "./Arkivsjef.module.css";
import ArchiveBossAccordion from "../../components/Arkivsjef/ArchiveBossAccordion/ArchiveBossAccordion";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const ArchiveBoss: FC = () => {
  const album = arkivsjefAlbum;
  const category = arkivsjefKategori;
  const medium = arkivsjefMedium;
  const place = arkivsjefSted;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    grid: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  const mapAlbums = () =>
    album.map((Album) => (
      <Grid item xs={6} sm={3} key={Album.key}>
        {Album.name}
      </Grid>
    ));

  const mapCategory = () =>
    category.map((Category) => (
      <Grid item xs={6} sm={3} key={Category.key}>
        {Category.name}
      </Grid>
    ));

  const mapPlace = () =>
    place.map((Place) => (
      <Grid item xs={6} sm={3} key={Place.key}>
        {Place.name}
      </Grid>
    ));

  const mapMedium = () =>
    medium.map((Medium) => (
      <Grid item xs={6} sm={3} key={Medium.key}>
        {Medium.name}
      </Grid>
    ));

  return (
    <div className={styles.archiveBoss}>
      <h2> Arkivsjef </h2>
      <div className={styles.description}>
        <Grid container spacing={5}>
          <Grid item xs={2} className={classes.grid}>
            <IconButton aria-label="add">
              <AddCircleIcon className={styles.svgicon} />
            </IconButton>
            <Typography>Legg til ny</Typography>
          </Grid>

          <Grid item xs={10}>
            <Typography>
              Denne siden er for fotogjengens Arkivsjef. Her kan du legge til,
              slette, eller endre Album, Kategorier, Steder eller Medium. Vær
              meget forsiktig med å forandre albumnavn dersom albumet har bilder
              liggende i seg - det ødelegger mappestrukturen til bildene.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <ArchiveBossAccordion color="#da7777" name="Album">
        {mapAlbums()}
      </ArchiveBossAccordion>
      <ArchiveBossAccordion color="#f3ee78" name="Sted">
        {mapPlace()}
      </ArchiveBossAccordion>
      <ArchiveBossAccordion color="#9c77da" name="Kategori">
        {mapCategory()}
      </ArchiveBossAccordion>
      <ArchiveBossAccordion color="#7793da" name="Medium">
        {mapMedium()}
      </ArchiveBossAccordion>
    </div>
  );
};

export default ArchiveBoss;
