import React, { createContext, Dispatch, SetStateAction } from "react";
import { AlbumDto, PlaceDto, CategoryDto } from "../../../../generated";

interface IArchiveBossContext {
  albums: AlbumDto[];
  setAlbums: Dispatch<SetStateAction<AlbumDto[]>>;
  categories: CategoryDto[];
  setCategories: Dispatch<SetStateAction<CategoryDto[]>>;
  places: PlaceDto[];
  setPlaces: Dispatch<SetStateAction<PlaceDto[]>>;
}

const defaultState = {};

export const ArchiveBossContext =
  createContext<Partial<IArchiveBossContext>>(defaultState);
