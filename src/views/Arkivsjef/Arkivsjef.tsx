import React from "react";
import {
  arkivsjefAlbum,
  arkivsjefKategori,
  arkivsjefMedium,
  arkivsjefSted,
} from "./mockdata";
import styles from "./Arkivsjef.module.css";
import ArchiveBossAccordion from "../../components/Arkivsjef/ArchiveBossAccordion/ArchiveBossAccordion";

function ArchiveBoss() {
  const album = arkivsjefAlbum;
  const category = arkivsjefKategori;
  const medium = arkivsjefMedium;
  const place = arkivsjefSted;

  const mapAlbums = () =>
    album.map((Album) => (
      <div className={styles.items} key={Album.key}>
        - {Album.name}
      </div>
    ));

  const mapCategory = () =>
    category.map((Category) => <div key={Category.key}> {Category.name} </div>);

  const mapPlace = () =>
    place.map((Place) => <div key={Place.key}> {Place.name} </div>);

  const mapMedium = () =>
    medium.map((Medium) => <div key={Medium.key}> {Medium.name} </div>);

  return (
    <div className={styles.archiveBoss}>
      <h2> Arkivsjef </h2>
      <ArchiveBossAccordion
        color={styles.red}
        name="Album"
        contents={mapAlbums}
      />
      <ArchiveBossAccordion
        color={styles.red}
        name="Sted"
        contents={mapPlace}
      />
      <ArchiveBossAccordion
        color={styles.red}
        name="Kategori"
        contents={mapCategory}
      />
      <ArchiveBossAccordion
        color={styles.red}
        name="Medium"
        contents={mapMedium}
      />
    </div>
  );
}

export default ArchiveBoss;
