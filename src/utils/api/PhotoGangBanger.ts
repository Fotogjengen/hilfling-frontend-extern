import { api } from "./api";
import { CategoryDto, PhotoGangBangerDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const PhotoGangBangerApi = {
  getById: async function (id: string): Promise<PhotoGangBangerDto> {
    return api.get(`/photo_gang_bangers/${id}`);
  },
};
