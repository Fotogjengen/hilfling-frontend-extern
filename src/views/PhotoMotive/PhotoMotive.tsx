import { MotiveDto, PhotoDto } from "../../../generated";
import React, { FC, useState, useEffect } from "react";
import { MotiveApi } from "../../utils/api/MotiveApi";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { useParams } from "react-router-dom";
import ShowMotive from "../../components/ImageViewer/ShowMotive";

const PhotoMotive = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [motiveResponse, setMotiveResponse] = useState<MotiveDto>(
    {} as MotiveDto,
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      MotiveApi.getById(id)
        .then((res) => setMotiveResponse(res))
        .catch((e) => console.log(e));
      PhotoApi.getAllByMotiveId(id)
        .then((res) => setPhotoResponse(res))
        .catch((e) => console.log(e));
    }
  }, []);
  console.log(photoResponse, motiveResponse);

  return <ShowMotive photos={photoResponse} motive={motiveResponse}/>;
};

export default PhotoMotive;
