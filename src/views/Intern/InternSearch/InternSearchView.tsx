import React, { useEffect, useState } from "react";
import styles from "./InternSearch.module.css";
import InternSearchInput from "./InternSearchInput";
import CustomDataGrid from "./CustomTable";
import { PhotoApi, PhotoSearch } from "../../../utils/api/PhotoApi";
import { PhotoDto } from "../../../../generated";

const InternSearchView = () => {
  const [photos, setPhotos] = useState<PhotoDto[]>([]);
  const [page, setPage] = useState(1); // State to track the current page
  const pageSize = 20; // State to set the page size


  useEffect(() => {
    // Define the photoSearch object with page and pageSize parameters

    const photoSearch = new PhotoSearch();
    photoSearch.page = page.toString();
    photoSearch.pageSize = pageSize.toString();

    PhotoApi.search(photoSearch)
      .then((res: any) => {
        setPhotos(res.data.currentList)
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [page, pageSize]); // Dependency array ensures the effect runs when page or pageSize changes

  const handleSearchPhotos= (photos: PhotoDto[]) => {
    setPhotos(photos);
  }

  return (
    <div className={styles.internSearch}>
      <div className={styles.gridDivContainer}>
        <CustomDataGrid photos={photos} />
      </div>
      <InternSearchInput handleSearch = {handleSearchPhotos}/>
    </div>
  );
};

export default InternSearchView;
