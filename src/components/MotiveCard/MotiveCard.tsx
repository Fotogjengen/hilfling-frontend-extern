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
}

const MotiveCard: FC<Props> = (motive: Props) => {
  return (
    <Card key={motive?.motive?.motiveId?.id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {motive?.motive?.categoryDto?.name}
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#ad2f33" }}>
          {motive?.motive?.title}
        </Typography>
        <Typography variant="body2">
          Eier: {motive?.motive?.eventOwnerDto?.name}
        </Typography>
        <Typography variant="body2">
          Dato: {motive?.motive?.dateCreated}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          endIcon={<EditIcon />}
          fullWidth
          disabled
        >
          Rediger motiv
        </Button>
      </CardActions>
    </Card>
  );
};

export default MotiveCard;
