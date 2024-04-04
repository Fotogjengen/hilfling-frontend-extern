import { api } from "./api";
import { Photo, PhotoDto } from "../../../generated";
import { PaginatedResult } from "./types";

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

export class PhotoSearch {
  motive = "";
  place = "";
  //TODO when endpoint has security level implemented
  // securityLevel = "";
  gang = "";
  album = "";
  category = "";
  photoTags: string[] = [];
  isGoodPic = false;
  isAnalog = false;
  //YYYY-MM-DD
  dateFrom = "";
  //YYYY-MM-DD
  dateTo = "";
  page = "";
  [key: string]: string | string[] | boolean;
}

export const PhotoPostDto = new PhotoPost();

export const PhotoApi = {
  getAll: async function (): Promise<PhotoDto[]> {
    return api.get("/photos/").then((res) => res.data.currentList);
  },

  getAllByMotiveId: async function (id: string): Promise<PhotoDto[]> {
    return api.get(`/photos/motive/${id}`).then((res) => res.data.currentList);
  },
  post: async function (photo: Photo): Promise<Photo> {
    return api.post("/photos", photo);
  },
  batchUpload: async function (
    photos: FormData,
    onUploadProgress?: (progressEvent: ProgressEvent) => void,
  ): Promise<any> {
    console.log(photos);
    return api.post("/photos/upload", photos, {
      onUploadProgress,
    });
  },

  search: async function (
    photoSearch: PhotoSearch,
  ): Promise<PaginatedResult<PhotoDto>> {
    let queryString = "";

    for (const key in photoSearch) {
      if (Object.prototype.hasOwnProperty.call(photoSearch, key)) {
        const value = photoSearch[key];
        if (
          value !== "" &&
          value !== false &&
          value !== null &&
          value !== undefined
        ) {
          queryString += `${key}=${encodeURIComponent(String(value))}&`;
        }
      }
    }

    // Remove trailing '&' from the queryString
    queryString = queryString.slice(0, -1);

    console.log(queryString, "querystring");
    return api.get(`/photos/?`);
  },
};
