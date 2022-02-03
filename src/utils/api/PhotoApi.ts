import { api } from "./api";
import { Photo } from "../../interfaces/Photo";
import { PaginatedResult } from "./types";
import { PhotoDto } from "../../../generated";

class PhotoPost {
  albumId = "";
  categoryName = "";
  eventOwnerName = "";
  motiveTitle = "";
  placeName = "";
  photoGangBangerId = "";
  securityLevelId = "";

  isGoodPhotoList: boolean[] = [];
  tagList: string[][] = [];
  photoFileList: File[] = [];
}

export const PhotoPostDto = new PhotoPost();

export const PhotoApi = {
  getAllByMotiveId: async function (id: string, motive:string): Promise<PaginatedResult<PhotoDto>> {
    return api.get(`/photos/${motive}/${id}`);
  },
  post: async function (photo: Photo): Promise<Photo> {
    return api.post("/photos", photo);
  },
  batchUpload: async function (
    photos: FormData,
    onUploadProgress?: () => void,
  ): Promise<any> {
    console.log(photos);
    return api.post("/photos/upload", photos, {
      onUploadProgress,
    });
  },
};
