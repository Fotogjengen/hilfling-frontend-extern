import React, { FC, useEffect, useState } from "react";
import styles from "./Arkivsjef.module.css";
import ArchiveBossAccordion from "../../../components/Arkivsjef/ArchiveBossAccordion/ArchiveBossAccordion";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { AlbumDto, PlaceDto, CategoryDto } from "../../../../generated";
import Typography from "@material-ui/core/Typography";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import ArchiveBossElement from "../../../components/Arkivsjef/ArchiveBossElement/ArchiveBossElement";

//TODO: Create handleDelete and handleChange function for the archiveBossOverflowMenu

const ArchiveBoss: FC = () => {
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([])

  useEffect(() => {
    AlbumApi.getAll().then((res) => setAlbums(res.data.currentList)).catch((e) => console.log(e));
    PlaceApi.getAll().then((res)=> setPlaces(res.data.currentList)).catch((e) => console.log(e));
    CategoryApi.getAll().then((res)=> setCategories(res.data.currentList)).catch((e) => console.log(e));
  }, []);


  const mapAlbums = (albums: AlbumDto[]) => {
    return albums.map((album: AlbumDto, index: number) => (
      <ArchiveBossElement text={album.title} key={index}/>
    ));
  };

  const mapCurrentList = (dtoList: PlaceDto[] | CategoryDto[]) => {
    return dtoList.map((dto: PlaceDto | CategoryDto, index: number) => (
      <ArchiveBossElement text={dto.name} key={index}/>
    ));
  }

  return (
    <div className={styles.archiveBoss}>
      <h2> Arkivsjef </h2>
      <div className={styles.description}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={2}
            alignContent="center"
            direction="row"
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <IconButton aria-label="add">
                <AddCircleIcon className={styles.svgicon} />
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
        {mapCurrentList(places)}
      </ArchiveBossAccordion>
      <ArchiveBossAccordion color="#9c77da" name="Kategori">
        {mapCurrentList(categories)}
      </ArchiveBossAccordion>
    </div>
  );
};

export default ArchiveBoss;
