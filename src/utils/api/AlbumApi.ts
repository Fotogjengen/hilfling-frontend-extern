import { api } from "./api";
import { AlbumDto } from "../../../generated";
import { PaginatedResult } from "./types";


export type DeletedResult = {
  config: object;
  headers: object;
  request: any;
  status: number;
  statusText: string;
  data: number;
};

export const AlbumApi = {
  getAll: async function (): Promise<PaginatedResult<AlbumDto>> {
    return api.get("/albums");
  },
  deleteById: async function (id: string): Promise<DeletedResult> {
    return api
      .delete(`/albums/${id}`)
  },
};
