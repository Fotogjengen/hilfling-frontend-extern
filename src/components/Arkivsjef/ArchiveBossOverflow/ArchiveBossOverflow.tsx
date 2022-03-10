import React, { FC } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";

const options = ["Rediger", "Slett"];

interface Props {
  id: string;
  type: string;
}

const ArchiveBossOverflow: FC<Props> = ({ id, type }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (type === "album") {
      AlbumApi.deleteById(id)
        .then((res) => console.log(res, " deleted"))
        .catch((e) => console.log(e));
    } else if (type === "place") {
      PlaceApi.deleteById(id)
        .then((res) => console.log(res, " deleted"))
        .catch((e) => console.log(e));
    } else if (type === "category") {
      CategoryApi.deleteById(id)
        .then((res) => console.log(res, " deleted"))
        .catch((e) => console.log(e));
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <MenuItem key={options[0]} onClick={handleClose}>
          {options[0]}
        </MenuItem>
        <MenuItem key={options[1]} onClick={handleDelete}>
          {options[1]}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ArchiveBossOverflow;
