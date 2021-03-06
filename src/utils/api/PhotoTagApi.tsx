import { api } from "./api";
import { PhotoTag } from "../../interfaces/PhotoTag";

interface photoTag {
  id: "/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i";
  name: string;
}

export const PhotoTagApi = {
  getAll: async function (): Promise<photoTag> {
    return api.get("/photo_tags");
  },
  getById: function (id: number): Promise<photoTag> {
    return api.get("/photo_tags/" + String(id));
  },
  create: (phototag: PhotoTag): Promise<photoTag> => {
    return api.post("/photo_tags/", phototag);
  },
  update: (phototag: PhotoTag): Promise<photoTag> => {
    return api.put("/photo_tags/", phototag);
  },
};
