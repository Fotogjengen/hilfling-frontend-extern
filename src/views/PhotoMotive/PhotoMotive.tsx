import { PhotoDto } from "../../../generated";
import { MotiveDto } from "../../../generated";
import React, { useState, useEffect } from "react";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { MotiveApi } from "../../utils/api/MotiveApi";
import ShowMotive from "../../components/ImageViewer/GridImageViewer";


const PhotoMotive = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [motiveResponse, setMotiveResponse] = useState<MotiveDto>({} as MotiveDto);
  

  useEffect(() => {
      PhotoApi.getAll()
        .then((res) => {
          setPhotoResponse(res)
        }).catch((e) => console.log(e))
    }
  ,[]);
  useEffect(() => {
    MotiveApi.getAll()
    .then((res) => {
      setMotiveResponse(res.data.currentList[0])
    }).catch((e) => console.log(e)),[]
  },[])

  
  

  return <ShowMotive photos={photoResponse}/>;
};

export default PhotoMotive;
