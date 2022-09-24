import {
  Autocomplete,
  Button,
  Grid,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
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

/* 
TODO: 

[] Må faktisk endre ID-en :) på alle som skal endres på omg 
[] Validere dersom navn er tomt
[] Redirigerer tilbake 
[] Adde feedback
*/

const EditMotive = () => {
  const [motive, setMotive] = useState<MotiveDto>({} as MotiveDto);
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [eventOwners, setEventOwners] = useState<EventOwnerDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();
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

  useEffect(() => {
    if (motive && albums && categories && eventOwners) {
      setLoading(false);
    }
  }, [motive, albums, categories, eventOwners]);

  const handleClick = () => {
    MotiveApi.patch(motive)
      .then(() => {
        <Navigate to="/intern/motives" />;
        console.log(motive);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log(motive);
  }, [motive]);

  return (
    <div className={styles.editMotive}>
      <h2>Rediger {motive?.title}</h2>
      <Grid container spacing={2} alignItems="center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                value={motive.title || ""}
                onChange={(e) =>
                  setMotive({ ...motive, title: e.target.value })
                }
                label="Endre navn på motiv"
                margin="normal"
                fullWidth
              />
              <Autocomplete
                disablePortal
                getOptionLabel={(categories: CategoryDto) => categories.name}
                options={categories.map(
                  (category) => category || "" || undefined,
                )}
                value={motive?.categoryDto || ""}
                onChange={(e, value) => {
                  if (value) {
                    setMotive({
                      ...motive,
                      categoryDto: {
                        ...motive.categoryDto,
                        name: value.name,
                        categoryId: {
                          ...motive.categoryDto?.categoryId,
                          id: value.categoryId.id,
                        },
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
                getOptionLabel={(albums: AlbumDto) => albums.title}
                options={albums.map((album) => album || "" || undefined)}
                value={motive?.albumDto || ""}
                onChange={(e, value) => {
                  if (value) {
                    setMotive({
                      ...motive,
                      albumDto: {
                        ...motive.albumDto,
                        title: value.title,
                        albumId: {
                          ...motive.albumDto?.albumId,
                          id: value.albumId.id,
                        },
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
              <MotiveCard key={1} motive={motive}>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<EditIcon />}
                  onClick={handleClick}
                  fullWidth
                >
                  Rediger motiv
                </Button>
              </MotiveCard>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default EditMotive;
