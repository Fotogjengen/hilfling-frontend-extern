import { PhotoDto } from "../../../generated";

/* TODO: Fix this. Idk how */
export const createImgUrl = (photo: PhotoDto) => {
  return `http://localhost:8383/img/FG/${photo.motive?.motiveId.id}/${photo?.largeUrl}`;
};
