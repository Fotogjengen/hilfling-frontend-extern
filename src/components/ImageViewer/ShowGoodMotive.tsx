import React, { FC, useState, useEffect } from "react";
import MotiveImage from "./MotiveImage";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { MotiveDto, PhotoDto } from "../../../generated";
import { MotiveApi } from "../../utils/api/MotiveApi";
import { PhotoApi } from "../../utils/api/PhotoApi";
import { createImgUrl } from "../../utils/createImgUrl/createImgUrl";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  id: string;
  index: number;
}

const ShowGoodMotive: FC<Props> = ({ id, index }: Props) => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [motiveResponse, setMotiveResponse] = useState<MotiveDto>(
    {} as MotiveDto,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const bgcolors = ["#da7777", "#f3ee78", "#9c77da", "#BADA77", "#7793da"];

  const updateIndex = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
  ];

  const imageItems = photoResponse.map((image: PhotoDto, index: number) => {
    const key = `is-good-picture-${index}`;
    return (
      <Grid key={key} item>
        <MotiveImage
          id={image.photoId.id}
          image={createImgUrl(image)}
          imageListProp={photoResponse}
          index={index}
          updateIndex={() => updateIndex(index)}
          title={image.motive.title}
        />
      </Grid>
    );
  });

  useEffect(() => {
    if (id) {
      MotiveApi.getById(id)
        .then((res) => setMotiveResponse(res))
        .catch((e) => console.log(e));
      PhotoApi.getAll()
        .then((res) => setPhotoResponse(res))
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <>
      {photoResponse.length != 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ boxShadow: 1, bgcolor: bgcolors[index % bgcolors.length] }}
          >
            <Typography>
              {motiveResponse.title} | {motiveResponse.dateCreated}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>{imageItems}</Grid>
          </AccordionDetails>
        </Accordion>
      )}
      {isOpen && (
        <Lightbox
          mainSrc={createImgUrl(photoResponse[photoIndex])}
          nextSrc={createImgUrl(
            photoResponse[(photoIndex + 1) % photoResponse.length],
          )}
          prevSrc={createImgUrl(
            photoResponse[
              (photoIndex + images.length - 1) % photoResponse.length
            ],
          )}
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

export default ShowGoodMotive;
