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
import Search from "../../../components/searchPage/Search";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import styles from "./Motives.module.css";
import EditIcon from "@mui/icons-material/Edit";
/*
[] Map the res.data.current to cards
*/

const Motives = () => {
  const [motives, setMotives] = useState<MotiveDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {motive.title}
          </Typography>
          <Typography variant="body2">
            Eier: {motive.eventOwnerDto.name}
          </Typography>
          <Typography variant="body2">Dato: {motive.dateCreated}</Typography>
        </CardContent>
        <Button fullWidth size="small" endIcon={<EditIcon />}>
          Rediger
        </Button>
      </Card>
    ));
  };

  return (
    <div className={styles.motives}>
      <h2> Motiv </h2>
      <Search />
      <Masonry columns={4} spacing={2}>
        {mapMotives(motives)}
      </Masonry>
    </div>
  );
};

export default Motives;
