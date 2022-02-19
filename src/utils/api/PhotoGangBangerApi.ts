import { api } from "./api";
import { PhotoGangBangerDto, PhotoGangBangerPublicDto } from "../../../generated";

export const PhotoGangBangerApi = {
  getById: async function (id: string): Promise<PhotoGangBangerDto> {
    return api.get(`/photo_gang_bangers/${id}`);
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
};

