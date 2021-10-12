import { api } from "./api";
import { Photo } from "../../interfaces/Photo";

export const PhotoApi = {
  post: async function (photo: Photo): Promise<Photo> {
    return api.post("/photos", photo);
  },
};
