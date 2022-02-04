import { api } from "./api";
import { PhotoGangBangerDto } from "../../../generated";

export const PhotoGangBangerApi = {
  getById: async function (id: string): Promise<PhotoGangBangerDto> {
    return api.get(`/photo_gang_bangers/${id}`).then(res => res.data);
  },
};
