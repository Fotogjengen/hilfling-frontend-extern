import { api } from "./api";
import { PlaceDto } from "../../../generated";
import { PaginatedResult } from "./types";
import { DeletedResult } from "./AlbumApi";

export const PlaceApi = {
  getAll: async function (): Promise<PaginatedResult<PlaceDto>> {
    return api.get("/places");
  },
  deleteById: async function (id: string): Promise<DeletedResult> {
    return api.delete(`/places/${id}`);
  },
};
