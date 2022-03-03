import React, { FC, useEffect, useState } from "react";
import styles from "./Arkivsjef.module.css";
import ArchiveBossAccordion from "../../../components/Arkivsjef/ArchiveBossAccordion/ArchiveBossAccordion";
import { Grid, IconButton, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { AlbumDto, PlaceDto, CategoryDto } from "../../../../generated";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import ArchiveBossElement from "../../../components/Arkivsjef/ArchiveBossElement/ArchiveBossElement";

const ArchiveBoss: FC = () => {
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);

  useEffect(() => {
    AlbumApi.getAll()
      .then((res) => setAlbums(res.data.currentList))
      .catch((e) => console.log(e));
    PlaceApi.getAll()
      .then((res) => setPlaces(res.data.currentList))
      .catch((e) => console.log(e));
    CategoryApi.getAll()
      .then((res) => setCategories(res.data.currentList))
      .catch((e) => console.log(e));
  }, []);

  const mapAlbums = (albumsCurrentList: AlbumDto[]) => {
    return albumsCurrentList.map((album: AlbumDto, index: number) => (
      <ArchiveBossElement
        text={album.title}
        id={album.albumId?.id}
        key={index}
      />
    ));
  };

  const mapPlace = (placeCurrentList: PlaceDto[]) => {
    return placeCurrentList.map((place: PlaceDto, index: number) => (
      <ArchiveBossElement
        text={place.name}
        id={place.placeId?.id}
        key={index}
      />
    ));
  };

  const mapCategory = (categoyCurrentList: CategoryDto[]) => {
    return categoyCurrentList.map((category: CategoryDto, index: number) => (
      <ArchiveBossElement
        text={category.name}
        id={category.categoryId?.id}
        key={index}
      />
    ));
  };

  return (
    <div className={styles.archiveBoss}>
      <h2> Arkivsjef </h2>
      <div className={styles.description}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={2} alignContent="center">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="add">
                <AddCircle className={styles.svgicon} />
              </IconButton>
              <Typography>Legg til ny</Typography>
            </Grid>
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
        {mapAlbums(albums)}
      </ArchiveBossAccordion>
      <ArchiveBossAccordion color="#f3ee78" name="Sted">
        {mapPlace(places)}
      </ArchiveBossAccordion>
      <ArchiveBossAccordion color="#9c77da" name="Kategori">
        {mapCategory(categories)}
      </ArchiveBossAccordion>
    </div>
  );
};

export default ArchiveBoss;
