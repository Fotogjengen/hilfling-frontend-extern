import { api } from "./api";
import { PhotoGangBanger } from "../../interfaces/PhotoGangBanger";

const baseUrl = "/photo_gang_bangers/";
export const PhotoGangBangerApi = {
  getAll: async function(): Promise<any> {
    return api.get(baseUrl);
  },
  getById: function(id: number): Promise<any> {
    return api.get(baseUrl + id);
  },
  update: function(gangBanger: PhotoGangBanger): Promise<any> {
    return api.post(baseUrl, gangBanger);
  }
};
