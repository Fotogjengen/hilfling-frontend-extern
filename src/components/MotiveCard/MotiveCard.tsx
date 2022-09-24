import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { MotiveDto } from "../../../generated";
interface Props {
  motive: MotiveDto;
  key: number;
  children?: ReactNode;
}

const MotiveCard: FC<Props> = (props: Props) => {
  return (
    <Card key={props?.motive?.motiveId?.id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props?.motive?.categoryDto?.name}
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#ad2f33" }}>
          {props?.motive?.title}
        </Typography>
        <Typography variant="body2">
          Eier: {props?.motive?.eventOwnerDto?.name}
        </Typography>
        <Typography variant="body2">
          Album: {props?.motive?.albumDto?.title}
        </Typography>
        <Typography variant="body2">
          Dato: {props?.motive?.dateCreated}
        </Typography>
      </CardContent>
      <CardActions>{props.children}</CardActions>
    </Card>
  );
};

export default MotiveCard;
