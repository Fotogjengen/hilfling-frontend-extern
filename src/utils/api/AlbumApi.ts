import { api } from "./api";
import { AlbumDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const AlbumApi = {
  getAll: async function (): Promise<PaginatedResult<AlbumDto>> {
    return api.get("/albums");
  },
};
