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
  securityLevel = "";
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
    return api.get(
      `/photos/&motive=${photoSearch.motive}&album=${photoSearch.album}&category=${photoSearch.category}&place=${photoSearch.place}&page=${photoSearch.page}&dateFrom=${photoSearch.dateFrom}&dateTo=${photoSearch.dateTo}&isGoodPic=${photoSearch.isGoodPic}&isAnalog=${photoSearch.isAnalog}&securityLevel=${photoSearch.securityLevel}`,
    );
  },
};
