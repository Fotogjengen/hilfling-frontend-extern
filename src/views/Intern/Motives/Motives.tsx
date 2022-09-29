import Masonry from "@mui/lab/Masonry";
import React, { useState, useEffect } from "react";
import { MotiveDto } from "../../../../generated";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import styles from "./Motives.module.css";
import MotiveCard from "../../../components/MotiveCard/MotiveCard";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const Motives = () => {
  const [motives, setMotives] = useState<MotiveDto[]>([]);
  useEffect(() => {
    MotiveApi.getAll()
      .then((res) => setMotives(res.data.currentList))
      .catch((e) => console.log(e));
  }, []);

  const mapMotives = (motivesCurrentList: MotiveDto[]) => {
    return motivesCurrentList.map((motive: MotiveDto, index: number) => (
      <MotiveCard key={index} motive={motive}>
        <Link to={`/intern/motive/${motive.motiveId.id}`}>
          <Button
            size="small"
            variant="contained"
            endIcon={<EditIcon />}
            sx={{marginTop: 2}}
            fullWidth
          >
            Rediger motiv
          </Button>
        </Link>
      </MotiveCard>
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
