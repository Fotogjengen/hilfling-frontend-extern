import { api } from "./api";
import { PhotoDto } from "../../../generated";

export const PhotoCarouselApi = {
  getAllCarouselPhotos: async function (): Promise<PhotoDto[]> {
    return api.get("/photos/carousel").then((res)  => res.data.currentList);
  },
};