import { api } from "./api";
import { Photo } from "../../interfaces/Photo";

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
  post: async function (photo: Photo): Promise<Photo> {
    return api.post("/photos", photo);
  },
  batchUpload: async function (photos: any, onUploadProgress?: any): Promise<any> {
    console.log(photos);
    return api.post("/photos/upload", photos, {
      onUploadProgress,
    });
  },
};
