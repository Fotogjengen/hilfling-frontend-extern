 import { PhotoDto, MotiveDto } from "../../../generated";
import React, { useState, useEffect, useRef } from "react";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { MotiveApi } from "../../utils/api/MotiveApi";
import ShowMotive from "../../components/ImageViewer/GridImageViewer";
import { PhotoSearch } from "../../utils/api/PhotoApi";

const PhotoMotive = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  //const [, setMotiveResponse] = useState<MotiveDto>({} as MotiveDto);
  //const [loading, setLoading] = useState<Boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const photoSearch = new PhotoSearch();
  photoSearch.page = "2";
  

  useEffect(() => {

    PhotoApi.getAll()
      .then((res) => {
        setPhotoResponse(res);
      })
      .catch((e) => console.log(e));

    PhotoApi.search(photoSearch).then((res) => {
      console.log(res);
    }).catch((e) => console.log(e) );
  }, []);
/*   useEffect(() => {
    MotiveApi.getAll()
      .then((res) => {
        setMotiveResponse(res.data.currentList[0]);
      })
      .catch((e) => console.log(e));
  }, []); */

  return <ShowMotive photos={photoResponse} />;
};


export default PhotoMotive; 
/* import React, { useState, useEffect, useRef } from "react";
import { PhotoApi, PhotoSearch } from "../../utils/api/PhotoApi";
import ShowMotive from "../../components/ImageViewer/GridImageViewer";
import { PhotoDto } from "../../../generated";

const PhotoMotive: React.FC = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const photoSearch = new PhotoSearch();
    photoSearch.page = page.toString();

    const loadPhotos = async () => {
        setLoading(true);
        try {
          const res = await PhotoApi.search(photoSearch);
          setPhotoResponse(res.data.currentList);
          setPage((prevPage) => prevPage + 1);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
      loadPhotos(); 
   

    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container &&
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 200 &&
        !loading
      ) {
        loadPhotos();
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [page, loading]);

  return <ShowMotive photos={photoResponse} containerRef={containerRef} />;
}; 

export default PhotoMotive;
 */