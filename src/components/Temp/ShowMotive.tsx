import React, { FC, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import MotiveImage from "./MotiveImage";
import axios from "axios";
import { useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export interface IImageList {
  _id: number;
  image: string;
}

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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
    try {
      void axios
        .get(`http://localhost:8080/photos/motive/${motiveResponse.id}`)
        .then((res) => {
          setPhotoResponse(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  }, [motiveResponse]);

  useEffect(() => {
    //const { id } = useParams();
    try {
      void axios.get(`http://localhost:8080/motives/${id}`).then((res) => {
        setMotiveResponse(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="backgroundFlex">
        <div className="imageHeader">
          <p className="headerText">{motiveResponse.title}</p>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 2,
              width: "95%",
            }}
          />
        </div>
        <div className="filterAndImages">
          <div className="flex">
            {imageItems}
            {/*TODO: remove filling elements, this is a temp fix! This fix ensures that the first image in a row always is at the far left. FInd a better method for doing this  */}
            <div className="filling-empty-space-childs" />
            <div className="filling-empty-space-childs" />
            <div className="filling-empty-space-childs" />
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
