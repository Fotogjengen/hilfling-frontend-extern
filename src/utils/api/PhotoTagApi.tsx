import { api } from "./api";
import { PhotoTag } from "../../interfaces/PhotoTag";
export const PhotoTagApi = {
  getAll: async function(): Promise<any> {
    return api.get("/photo_tags");
  },
  getById: function(id: number): Promise<any> {
    console.log("/photo_tags/" + id);
    return api.get("/photo_tags/" + id);
  }
};
