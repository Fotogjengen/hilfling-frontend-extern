import React, { FC } from "react";
import {
  arkivsjefAlbum,
  arkivsjefKategori,
  arkivsjefMedium,
  arkivsjefSted,
} from "./mockdata";
import styles from "./Arkivsjef.module.css";
import ArchiveBossAccordion from "../../components/Arkivsjef/ArchiveBossAccordion/ArchiveBossAccordion";

const ArchiveBoss: FC = () => {
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
      <ArchiveBossAccordion color="#da7777" name="Album" />
      <ArchiveBossAccordion color="#f3ee78" name="Sted" />
      <ArchiveBossAccordion color="#9c77da" name="Kategori" />
      <ArchiveBossAccordion color="#7793da" name="Medium" />
    </div>
  );
};

export default ArchiveBoss;
