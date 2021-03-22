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
    album.map((Album) => <div key={Album.key}>{Album.name}</div>);

  const mapCategory = () =>
    category.map((Category) => <div key={Category.key}> {Category.name} </div>);

  const mapPlace = () =>
    place.map((Place) => <div key={Place.key}> {Place.name} </div>);

  const mapMedium = () =>
    medium.map((Medium) => <div key={Medium.key}> {Medium.name} </div>);

  return (
    <div className={styles.archiveBoss}>
      <h2> Arkivsjef </h2>
      <ArchiveBossAccordion color="red" name="Album" />
      <ArchiveBossAccordion color="yellow" name="Sted" />
      <ArchiveBossAccordion color="purple" name="Kategori" />
      <ArchiveBossAccordion color="blue" name="Medium" />
    </div>
  );
}

export default ArchiveBoss;
