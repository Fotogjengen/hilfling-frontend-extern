import { createContext, Dispatch, SetStateAction } from "react";
import { AlbumDto, PlaceDto, CategoryDto } from "../../../generated";

interface IArchiveBossContext {
  albums: AlbumDto[];
  setAlbums: Dispatch<SetStateAction<AlbumDto[]>>;
  categories: CategoryDto[];
  setCategories: Dispatch<SetStateAction<CategoryDto[]>>;
  places: PlaceDto[];
  setPlaces: Dispatch<SetStateAction<PlaceDto[]>>;
}

const defaultState = {} as IArchiveBossContext;

export const ArchiveBossContext =
  createContext<IArchiveBossContext>(defaultState);
