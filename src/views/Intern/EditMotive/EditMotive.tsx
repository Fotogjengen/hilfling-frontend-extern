import {
  Autocomplete,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AlbumDto,
  CategoryDto,
  EventOwnerDto,
  MotiveDto,
} from "../../../../generated";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { EventOwnerApi } from "../../../utils/api/EventOwnerApi";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import styles from "./EditMotive.module.css";
import MotiveCard from "../../../components/MotiveCard/MotiveCard";

const EditMotive = () => {
  const [motive, setMotive] = useState<MotiveDto>({} as MotiveDto);
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [eventOwners, setEventOwners] = useState<EventOwnerDto[]>([]);

  const { id } = useParams<{ id: string }>();
  console.log(id);
  useEffect(() => {
    if (id) {
      MotiveApi.getById(id)
        .then((res) => setMotive(res))
        .catch((e) => console.log(e));
      AlbumApi.getAll()
        .then((res) => setAlbums(res.data.currentList))
        .catch((e) => console.log(e));
      CategoryApi.getAll()
        .then((res) => setCategories(res.data.currentList))
        .catch((e) => console.log(e));
      EventOwnerApi.getAll()
        .then((res) => setEventOwners(res.data.currentList))
        .catch((e) => console.log(e));
    }
  }, []);

  console.log(motive);

  return (
    <div className={styles.editMotive}>
      <h2>Rediger {motive?.title}</h2>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            value={motive.title || ""}
            onChange={(e) => setMotive({ ...motive, title: e.target.value })}
            label="Endre navn på motiv"
            margin="normal"
            fullWidth
          />
          <Autocomplete
            disablePortal
            getOptionLabel={(categories) => categories}
            options={categories.map((category) => category?.name || "")}
            value={motive?.categoryDto?.name || ""}
            onChange={(e, value) => {
              if (value) {
                setMotive({
                  ...motive,
                  categoryDto: {
                    ...motive.categoryDto,
                    name: value,
                  },
                });
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Endre kategori"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            disablePortal
            getOptionLabel={(albums) => albums}
            options={albums.map((album) => album.title)}
            value={motive?.albumDto?.title || ""}
            onChange={(e, value) => {
              if (value) {
                setMotive({
                  ...motive,
                  albumDto: {
                    ...motive.albumDto,
                    title: value,
                  },
                });
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Endre album"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            disablePortal
            getOptionLabel={(eventOwners) => eventOwners}
            options={eventOwners.map((eventOwner) => eventOwner.name)}
            value={motive?.eventOwnerDto?.name || ""}
            onChange={(e, value) => {
              if (value) {
                setMotive({
                  ...motive,
                  eventOwnerDto: {
                    ...motive.eventOwnerDto,
                    name: value,
                  },
                });
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Endre eier"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Slik vil motivet se ut</Typography>
          <MotiveCard key={1} motive={motive}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditMotive;
