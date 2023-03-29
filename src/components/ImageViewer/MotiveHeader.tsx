import { PhotoDto } from "../../../generated";
import { MotiveDto } from "../../../generated";
import React, { useState, useEffect } from "react";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { MotiveApi } from "../../utils/api/MotiveApi";
import ShowMotive from "./ShowMotive";
import styles from "./imageStyle.module.css";


const MotiveHeader = () => {
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
  

  
  

  return (<div className = {styles.backgroundFlex}>
    <div className={styles.imageHeader}>
          <p className={styles.headerText}>
            {motiveResponse.title}
            </p>
          <hr className={styles.hr} />
        </div> 
    <ShowMotive photos={photoResponse}/></div>
)};

export default MotiveHeader;
