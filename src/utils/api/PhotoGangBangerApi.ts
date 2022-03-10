import { api } from "./api";
import { PhotoGangBangerDto, PhotoGangBangerPublicDto } from "../../../generated";
import {PhotoGangBangerPatchRequestDto} from "../../../generated/models/PhotoGangBangerPatchRequestDto";

export const PhotoGangBangerApi = {
  getById: async function (id: string): Promise<PhotoGangBangerDto> {
    return api.get(`/photo_gang_bangers/${id}`).then(res => res.data);
  },
  getAllActivesPublic: async function (): Promise<PhotoGangBangerPublicDto[]> {
    return api.get("/photo_gang_bangers/actives").then(res => res.data.currentList);
  },

  getAllActivePangsPublic: async function (): Promise<PhotoGangBangerPublicDto[]> {
    return api.get("/photo_gang_bangers/active_pangs").then(res => res.data.currentList);
  },

  getAllInactivePangsPublic: async function (): Promise<PhotoGangBangerPublicDto[]> {
    return api.get("/photo_gang_bangers/inactive_pangs").then(res => res.data.currentList);
  },

  patch: async function (dto: PhotoGangBangerPatchRequestDto): Promise<PhotoGangBangerDto | null> {
    return api.patch("/photo_gang_bangers", dto).then(res => res.data)
  }
};

