import { Place } from "../../interfaces/Place";
import { Album } from "../../interfaces/Album";
import { Category } from "../../interfaces/Category";

interface ArkivsjefAlbum {
  key: string;
  name: string;
  description: string;
}
interface ArkivsjefKategori {
  key: string;
  name: string;
}
interface ArkivsjefSted {
  key: number;
  name: string;
}
interface ArkivsjefMedium {
  key: number;
  name: string;
}
export const arkivsjefMedium: ArkivsjefMedium[] = [
  {
    key: 1,
    name: "16mm",
  },
  {
    key: 2,
    name: "Analog farge",
  },
  {
    key: 3,
    name: "Skanning, repro",
  },
  {
    key: 4,
    name: "Digitalt",
  },
  {
    key: 5,
    name: "Analog svart/hvitt",
  },
  {
    key: 6,
    name: "Dias",
  },
  {
    key: 7,
    name: "Papirkopi",
  },
];

export const arkivsjefSted: ArkivsjefSted[] = [
  {
    key: 1,
    name: "Knaus",
  },
  {
    key: 2,
    name: "Edgar",
  },
  {
    key: 3,
    name: "Bodegaen",
  },
  {
    key: 4,
    name: "Utenfor huset",
  },
  {
    key: 5,
    name: "Gjengareal",
  },
  {
    key: 6,
    name: "Strossa",
  },
  {
    key: 7,
    name: "Selskapssiden",
  },
  {
    key: 8,
    name: "Daglighallen",
  },
  {
    key: 9,
    name: "Ryttergangen",
  },
  {
    key: 10,
    name: "Biblioteket",
  },
  {
    key: 11,
    name: "Toalettet",
  },
];

export const arkivsjefKategori: ArkivsjefKategori[] = [
  {
    key: "1",
    name: "Interiør",
  },
  {
    key: "2",
    name: "Eksteriør",
  },
  {
    key: "3",
    name: "Miljøbilder",
  },
  {
    key: "4",
    name: "Teater",
  },
  {
    key: "5",
    name: "Studio",
  },
  {
    key: "6",
    name: "Andre Møter",
  },
  {
    key: "7",
    name: "Portrett",
  },
  {
    key: "8",
    name: "Repro",
  },
  {
    key: "9",
    name: "Kunst",
  },
  {
    key: "10",
    name: "Studiobilde",
  },
];

export const arkivsjefAlbum: ArkivsjefAlbum[] = [
  {
    key: "1",
    name: "DIGFK",
    description: "Høst 2014",
  },
  {
    key: "2",
    name: "DIGFQ",
    description: "Høsten 2016 Digitalt",
  },
  {
    key: "3",
    name: "DIGFL",
    description: "Vår 2015",
  },
  {
    key: "4",
    name: "DIGFR",
    description: "ISFiT 2017 Digitalt",
  },
  {
    key: "5",
    name: "DIGFM",
    description: "ISFiT 2015",
  },
  {
    key: "6",
    name: "DIGFS",
    description: "Vår 2017",
  },
  {
    key: "7",
    name: "DIGFN",
    description: "Høst 2015",
  },
];
