import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AlbumDto,
  Category,
  CategoryDto,
  EventOwnerDto,
  MotiveDto,
} from "../../../../generated";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { EventOwnerApi } from "../../../utils/api/EventOwnerApi";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import styles from "./EditMotive.module.css";
import EditIcon from "@mui/icons-material/Edit";

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
            label="Endre navn på motiv"
            margin="normal"
            fullWidth
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(categories: CategoryDto) => categories.name}
            options={categories}
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
            id="combo-box-demo"
            getOptionLabel={(albums: AlbumDto) => albums.title}
            options={albums}
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
            id="combo-box-demo"
            getOptionLabel={(eventOwners: EventOwnerDto) => eventOwners.name}
            options={eventOwners}
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
          <Card key={motive?.motiveId?.id}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {motive?.categoryDto?.name}
              </Typography>
              <Typography sx={{ mb: 1.5, color: "#ad2f33" }}>
                {motive?.title}
              </Typography>
              <Typography variant="body2">
                Eier: {motive?.eventOwnerDto?.name}
              </Typography>
              <Typography variant="body2">
                Dato: {motive?.dateCreated}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default EditMotive;
