import React, { KeyboardEvent } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { FC } from "react";
import { DefaultProps } from "../../../types";

//https://codesandbox.io/s/um1t0?file=/demo.js

const options = ["Rediger", "Slett"];

type Props = DefaultProps;

const ArchiveBossAccordion: FC<Props> = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ArchiveBossOverflow;
