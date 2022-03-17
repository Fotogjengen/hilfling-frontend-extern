import { api } from "./api";
import { PlaceDto } from "../../../generated";
import { DeletedResult, PaginatedResult } from "./types";

export const PlaceApi = {
  getAll: async function (): Promise<PaginatedResult<PlaceDto>> {
    return api.get("/places");
  },
  deleteById: async function (id: string): Promise<DeletedResult> {
    return api.delete(`/places/${id}`);
  },
};
