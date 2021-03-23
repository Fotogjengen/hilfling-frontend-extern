import React, { FC, useState, SyntheticEvent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Image from "./Image";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import MotiveImage from "./MotiveImage";

export interface IImageList {
  _id: number;
  image: string;
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
  const [imageIndex, setImageIndex] = useState(0);
  const [images] = useState({
    imageList: [
      {
        _id: 1,
        image:
          "https://www.itl.cat/pngfile/big/61-616481_lamborghini-huracan-performante-side-view-wallpaper-novitec-lamborghini.jpg",
      },
      {
        _id: 2,
        image: "https://wallpaperaccess.com/full/265570.jpg",
      },
    ],
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateIndex = (newIndex: number) => {
    handleOpen();
    setImageIndex(newIndex);
  };

  function handleKeyPress(event: { key: string }) {
    if (event.key === "y") {
      alert("The sky is your starting point!");
    } else if (event.key === "n") {
      alert("The sky is your limit👀");
    }
  }

  const imageItems = images.imageList.map((image, index) => (
    <MotiveImage
      id={image._id}
      image={image.image}
      key={image._id}
      imageListProp={images.imageList}
      index={index}
      updateIndex={() => updateIndex(index)}
    />
  ));

  return (
    <div onKeyPress={handleKeyPress}>
      <div className="backgroundFlex">
        <div className="imageHeader">
          <p className="headerText">GJENGFOTO</p>
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
          <div className="imageFilter">
            <h2 className="filterText">FILTER</h2>
            <div className="vl" />
          </div>
          <div className="flex">
            {imageItems}
            {/*TODO: remove filling elements, this is a temp fix! This fix ensures that the first image in a row always is at the far left. FInd a better method for doing this  */}
            <div className="filling-empty-space-childs" />
            <div className="filling-empty-space-childs" />
            <div className="filling-empty-space-childs" />
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Image
            _id={images.imageList[imageIndex]._id}
            imageListProp={images.imageList}
            index={imageIndex}
            leftArrow={() => {
              if (imageIndex > 0) {
                setImageIndex(imageIndex - 1);
              }
            }}
            rightArrow={() => {
              if (imageIndex < images.imageList.length) {
                setImageIndex(imageIndex + 1);
              }
            }}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default ShowMotive;
