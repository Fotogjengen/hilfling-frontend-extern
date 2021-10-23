import React, { FC, useState, useEffect } from "react";
import styles from "./imageStyle.module.css";
import MotiveImage from "./MotiveImage";
import axios from "axios";
import { useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export interface IImageList {
  _id: number;
  image: string;
}

// TODO: Extract interface to interface folder
export interface IResponseObject {
  photoId: {
    id: number;
  };
  isGoodPicture: boolean;
  smallUrl: string;
  mediumUrl: string;
  largeUrl: string;
  motive: {
    id: string;
    dateCreated: string;
    title: string;
    category: {
      id: string;
      dateCreated: string;
      name: string;
    };
    eventOwner: {
      id: string;
      dateCreated: string;
      name: string;
    };
    album: {
      id: string;
      dateCreated: string;
      title: string;
      isAnalog: true;
    };
  };
  placeDto: {
    placeId: {
      id: string;
    };
    name: string;
  };
  securityLevel: {
    securityLevelId: {
      id: string;
    };
    securityLevelType: string;
  };
  gang: {
    gangId: {
      id: string;
    };
    name: string;
  };
  photoGangBangerDto: {
    photoGangBangerId: {
      id: string;
    };
    relationShipStatus: string;
    semesterStart: {
      value: string;
    };
    isActive: true;
    isPang: true;
    address: string;
    zipCode: string;
    city: string;
    samfundetUser: {
      samfundetUserId: {
        id: string;
      };
      firstName: string;
      lastName: string;
      username: string;
      phoneNumber: {
        value: string;
      };
      email: {
        value: string;
      };
      profilePicturePath: string;
      sex: string;
      securituLevel: {
        securityLevelId: {
          id: string;
        };
        securityLevelType: string;
      };
    };
    position: {
      positionId: {
        id: string;
      };
      title: string;
      email: {
        value: string;
      };
    };
  };
}

interface Motive {
  id: string;
  dateCreated: string;
  title: string;
  category: {
    id: string;
    dateCreated: string;
    name: string;
  };
  eventOwner: {
    id: string;
    dateCreated: string;
    name: string;
  };
  album: {
    id: string;
    dateCreated: string;
    title: string;
    isAnalog: boolean;
  };
}

const ShowMotive: FC = () => {
  const [photoResponse, setPhotoResponse] = useState<IResponseObject[]>([]);
  const [motiveResponse, setMotiveResponse] = useState<Motive>({} as Motive);

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const { id } = useParams<{ id: string }>();

  const updateIndex = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const imageItems = photoResponse.map(
    (image: IResponseObject, index: number) => (
      <MotiveImage
        id={image.photoId.id}
        //image={`localhost:8080/${image.largeUrl}`}
        image={image.largeUrl}
        key={image.photoId.id}
        imageListProp={photoResponse}
        index={index}
        updateIndex={() => updateIndex(index)}
        title={image.motive.title}
      />
    ),
  );

  useEffect(() => {
    // TODO: Fix response type
    try {
      /*       void axios
        .get(`http://localhost:8080/photos/motive/${motiveResponse.id}`)
        .then((res) => {
          setPhotoResponse(res.data);
        }); */
    } catch (e) {
      console.log(e);
    }
  }, [motiveResponse]);

  useEffect(() => {
    //const { id } = useParams();
    try {
      // TODO: Fix response type
      /*       void axios.get(`http://localhost:8080/motives/${id}`).then((res) => {
        setMotiveResponse(res.data);
      }); */
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className={styles.backgroundFlex}>
        <div className={styles.imageHeader}>
          <p className={styles.headerText}>{motiveResponse.title}</p>
          <hr className={styles.hr} />
        </div>
        <div className={styles.filterAndImages}>
          <div className={styles.flex}>
            {imageItems}
            {/*TODO: remove filling elements, this is a temp fix! This fix ensures that the first image in a row always is at the far left. FInd a better method for doing this  */}
            <div className={styles.fillingEmptySpaceChilds} />
            <div className={styles.fillingEmptySpaceChilds} />
            <div className={styles.fillingEmptySpaceChilds} />
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={photoResponse[photoIndex].largeUrl}
          nextSrc={
            photoResponse[(photoIndex + 1) % photoResponse.length].largeUrl
          }
          prevSrc={
            photoResponse[
              (photoIndex + images.length - 1) % photoResponse.length
            ].largeUrl
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + photoResponse.length - 1) % photoResponse.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photoResponse.length)
          }
        />
      )}
    </>
  );
};

export default ShowMotive;
