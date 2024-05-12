import React, { useEffect, useState } from "react";
import styles from "./InternSearch.module.css";
import InternSearchInput from "./InternSearchInput";
import CustomDataGrid from "./CustomTable";
import { PhotoApi } from "../../../utils/api/PhotoApi";
import { PhotoDto } from "../../../../generated";

const InternSearchView = () => {
  const [photos, setPhotos] = useState<PhotoDto[]>([]);

  useEffect(() => {
    PhotoApi.getAll()
      .then((res) => setPhotos(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.internSearch}>
      <div className={styles.gridDivContainer}>
        <CustomDataGrid photos={photos} />
      </div>
      <InternSearchInput />
    </div>
  );
};

export default InternSearchView;
