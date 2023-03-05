import React, { useEffect, useState } from "react";

import JSZip from "jszip";
import * as FileSaver from "file-saver";

import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import { PhotoDto } from "../../../../generated";
import { PhotoApi } from "../../../utils/api/PhotoApi";

import { createImgUrl } from "../../../utils/createImgUrl/createImgUrl";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Expo = () => {
  const [photoResponse, setPhotoResponse] = useState<PhotoDto[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    // When `photoResponse` changes, update `isChecked` with the correct values
    setIsChecked(photoResponse.map(() => false));
  }, [photoResponse]);

  useEffect(() => {
    // TODO: Fix response type
    PhotoApi.getAllGood()
      .then((res) => setPhotoResponse(res))
      .catch((e) => console.log(e));

    console.log(photoResponse);
  }, []);

  const updateIndex = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
  ];

  const DownloadButton = styled(Paper)(({ theme }) => ({
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1vw",
    left: "50%",
    marginLeft: "-20rem",
    width: "40rem",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: "large",
    cursor: "default",
  }));

  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  const handleCheckboxChange = (index: number) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !isChecked[index];
    setIsChecked(newIsChecked);
    if (!isChecked[index]) {
      setSelectedCount(selectedCount + 1);
    } else {
      setSelectedCount(selectedCount - 1);
    }
  };

  const handleDownload = async () => {
    const selectedImages = photoResponse.filter(
      (image: PhotoDto, index: number) => isChecked[index],
    );
    const zip = new JSZip();
    const folder = zip.folder("images");

    await Promise.all(
      selectedImages.map((image) => {
        const imageUrl = createImgUrl(image);
        return fetch(imageUrl)
          .then((res) => res.blob())
          .then((imageData) => {
            const imageName = `${image.photoId.id}.jpg`;
            if (folder) {
              folder.file(imageName, imageData);
            }
          });
      }),
    );

    const blob = await zip.generateAsync({ type: "blob" });
    FileSaver.saveAs(blob, "images.zip");

    setIsChecked(new Array(isChecked.length).fill(false));
    setSelectedCount(0);
  };

  const imageItems = photoResponse.map((image: PhotoDto, index: number) => {
    return (
      <Grid
        item
        key={index}
        sx={{
          paddingRight: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          margin: "0.5rem",
        }}
      >
        <Box onClick={() => updateIndex(index)} sx={{ position: "relative" }}>
          <img src={createImgUrl(image)} height="200px" width="300px" />
        </Box>

        <Box
          sx={{
            boxShadow: 1,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: " 0.5rem 0",
            padding: "0 0.2rem ",
            bgcolor: "#f4f4f4",
          }}
        >
          <Typography>Velg for nedlastning</Typography>
          <Checkbox
            checked={isChecked[index] || false}
            onChange={() => handleCheckboxChange(index)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{ p: "1rem", bgcolor: "white" }}>
        <Stack spacing={1}>
          <Typography
            sx={{
              width: "100%",
              pb: "0.5rem",
              mb: "0.5rem",
              textAlign: "center",
              fontSize: 28,
              borderBottom: "0.1rem solid black",
            }}
          >
            Bra bilder!!
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {imageItems}
          </Grid>
        </Stack>
        <DownloadButton>
          <Typography
            sx={{
              padding: "0rem 1rem",
              textAlign: "center",
              fontSize: 28,
            }}
          >
            Valgt : {selectedCount}
          </Typography>
          <Button variant="contained" onClick={() => void handleDownload()}>
            Last ned
          </Button>
        </DownloadButton>
      </Box>
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
      )}{" "}
    </>
  );
};

export default Expo;
