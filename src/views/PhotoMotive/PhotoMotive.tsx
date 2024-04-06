import { PhotoDto, MotiveDto } from "../../../generated";
import React, { useState, useEffect, useRef } from "react";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { MotiveApi } from "../../utils/api/MotiveApi";
import ShowMotive from "../../components/ImageViewer/GridImageViewer";

const PhotoMotive = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [, setMotiveResponse] = useState<MotiveDto>({} as MotiveDto);
  //const [loading, setLoading] = useState<Boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {

    PhotoApi.getAll()
      .then((res) => {
        setPhotoResponse(res);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => {
        setMotiveResponse(res.data.currentList[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  return <ShowMotive photos={photoResponse} />;
};

export default PhotoMotive;
