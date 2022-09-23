import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import React, { useState, useEffect } from "react";
import { MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import styles from "./Motives.module.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
/*
[X] Map the res.data.current to cards
[X] Set initial values of the clickedMotive in the searchfield
[] Dropdown of already existing motives, categories, albums and eventowners
[] Validation of fields 
[] Send edit back to the backend and change the values
*/

const Motives = () => {
  const [motives, setMotives] = useState<MotiveDto[]>([]);
  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => setMotives(res.data.currentList))
      .catch((e) => console.log(e));
  }, []);

  const mapMotives = (motivesCurrentList: MotiveDto[]) => {
    return motivesCurrentList.map((motive: MotiveDto, index: number) => (
      <Card key={motive.motiveId.id}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {motive.categoryDto.name}
          </Typography>
          <Link to={`/motive/${motive.motiveId.id}`}>
            <Typography sx={{ mb: 1.5, color: "#ad2f33" }}>
              {motive.title}
            </Typography>
          </Link>
          <Typography variant="body2">
            Eier: {motive.eventOwnerDto.name}
          </Typography>
          <Typography variant="body2">Dato: {motive.dateCreated}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/intern/motive/${motive.motiveId.id}`}>
            <Button
              size="small"
              variant="contained"
              endIcon={<EditIcon />}
              fullWidth
            >
              Rediger motiv
            </Button>
          </Link>
        </CardActions>
      </Card>
    ));
  };

  return (
    <div className={styles.motives}>
      <h2> Motiv </h2>
      <Masonry columns={4} spacing={2} sx={{ paddingTop: 2 }}>
        {mapMotives(motives)}
      </Masonry>
    </div>
  );
};

export default Motives;
