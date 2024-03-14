import { api } from "./api";
import { PhotoTag } from "../../interfaces/PhotoTag";
import { PhotoTagDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const PhotoTagApi = {
  getAll: async function (): Promise<PaginatedResult<PhotoTagDto>> {
    return api.get("/phototags");
  },
  getById: function (id: number): Promise<PhotoTagDto> {
    return api.get("/phototags/" + String(id));
  },
  create: (phototag: PhotoTag): Promise<PhotoTagDto> => {
    return api.post("/phototags/", phototag);
  },
  update: (phototag: PhotoTag): Promise<PhotoTagDto> => {
    return api.put("/phototags/", phototag);
  },
};
