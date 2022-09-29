import React, { FC, useEffect, useState } from "react";
import styles from "./Arkivsjef.module.css";
import ArchiveBossAccordion from "../../../components/Arkivsjef/ArchiveBossAccordion/ArchiveBossAccordion";
import Alert from "../../../components/Alert/Alert";
import { Grid, Typography } from "@mui/material";
import { AlbumDto, PlaceDto, CategoryDto } from "../../../../generated";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import ArchiveBossElement from "../../../components/Arkivsjef/ArchiveBossElement/ArchiveBossElement";
import { ArchiveBossContext } from "../../../contexts/ArchiveBossContext";
import ArchiveBossAddElements from "../../../components/Arkivsjef/ArchiveBossAddElements/ArchiveBossAddElements";

const ArchiveBoss: FC = () => {
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [update, setUpdate] = useState(false);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [lastDeletedName, setLastDeletedName] = useState("Deleted");

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
        id={album.albumId.id}
        key={index}
        type="album"
        setOpenAlert={setOpenAlert}
        setLastDeletedName={setLastDeletedName}
      />
    ));
  };

  const mapPlace = (placeCurrentList: PlaceDto[]) => {
    return placeCurrentList.map((place: PlaceDto, index: number) => (
      <ArchiveBossElement
        text={place.name}
        id={place.placeId.id}
        type="place"
        key={index}
        setOpenAlert={setOpenAlert}
        setLastDeletedName={setLastDeletedName}
      />
    ));
  };

  const mapCategory = (categoyCurrentList: CategoryDto[]) => {
    return categoyCurrentList.map((category: CategoryDto, index: number) => (
      <ArchiveBossElement
        text={category.name}
        id={category.categoryId.id}
        type="category"
        key={index}
        setOpenAlert={setOpenAlert}
        setLastDeletedName={setLastDeletedName}
      />
    ));
  };

  return (
    <>
      <Alert
        message={lastDeletedName}
        open={openAlert}
        setOpen={setOpenAlert}
        severity="success"
      />
      <ArchiveBossContext.Provider
        value={{
          setAlbums,
          albums,
          setCategories,
          categories,
          places,
          setPlaces,
          update,
          setUpdate,
        }}
      >
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
                  className={styles.addNewButton}
                >
                  <ArchiveBossAddElements />
                </Grid>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Denne siden er for fotogjengens Arkivsjef. Her kan du legge
                  til, slette, eller endre Album, Kategorier, Steder eller
                  Medium. Vær meget forsiktig med å forandre albumnavn dersom
                  albumet har bilder liggende i seg - det ødelegger
                  mappestrukturen til bildene.
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
      </ArchiveBossContext.Provider>
    </>
  );
};

export default ArchiveBoss;
