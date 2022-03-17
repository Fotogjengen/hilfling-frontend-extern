import { Grid } from "@mui/material";
import React, { FC, useContext, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { ArchiveBossContext } from "../../../views/Intern/Arkivsjef/ArchiveBossContext";

interface Props {
  /** Index of element when mapped */
  key: number | string | null | undefined;
  /** Text to display in the ArchiveBoss */
  text: string | undefined;
  /** Id belonging to the ArchiveBoss element */
  id: string;
  /** Type of Overflow menu */
  type: string;
}

const ArchiveBossElement: FC<Props> = ({
  text,
  id,
  type,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { albums, setAlbums, places, setPlaces, categories, setCategories } =
    useContext(ArchiveBossContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (type === "album") {
      AlbumApi.deleteById(id)
        .then((res) => {
          if (res.data == 1) {
            setAlbums(albums.filter((album) => album?.albumId.id !== id));
          }
        })
        .catch((e) => console.log(e));
    } else if (type === "place") {
      PlaceApi.deleteById(id)
        .then((res) => {
          if (res.data == 1) {
            setPlaces(places.filter((place) => place?.placeId.id !== id));
          }
        })
        .catch((e) => console.log(e));
    } else if (type === "category") {
      CategoryApi.deleteById(id)
        .then((res) => {
          if (res.data == 1) {
            setCategories(
              categories.filter((category) => category?.categoryId.id !== id),
            );
          }
        })
        .catch((e) => console.log(e));
    }
    setAnchorEl(null);
  };

  return (
    <Grid item xs={6} sm={3}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={6} sm={4}>
          <div>
            <IconButton onClick={handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem key="edit" onClick={handleClose}>
                Rediger
              </MenuItem>
              <MenuItem key="delete" onClick={handleDelete}>
                Slett
              </MenuItem>
            </Menu>
          </div>
        </Grid>
        <Grid item xs={6} sm={4} alignContent="space-around">
          {text}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArchiveBossElement;
