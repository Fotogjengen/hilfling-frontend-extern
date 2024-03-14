import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, nbNO } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import styles from "./InternSearch.module.css";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  MotiveDto,
  PlaceDto,
  AlbumDto,
  CategoryDto,
  SecurityLevelDto,
  PhotoTagDto,
} from "../../../../generated";
import { AlbumApi } from "../../../utils/api/AlbumApi";
import { PlaceApi } from "../../../utils/api/PlaceApi";
import { CategoryApi } from "../../../utils/api/CategoryApi";
import { MotiveApi } from "../../../utils/api/MotiveApi";
import { SecurityLevelApi } from "../../../utils/api/SecurityLevelApi";
import { PhotoTagApi } from "../../../utils/api/PhotoTagApi";
import { AlertContext, severityEnum } from "../../../contexts/AlertContext";
import { PhotoSearch } from "../../../utils/api/PhotoApi";

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    flexWrap: "wrap", // Enable wrapping elements to the next row
    justifyContent: "flex-start", // Start from the left
  },
  datePickerContainer: {
    padding: "0.4rem",
  },
}));

const InternSearchInput: React.FC = () => {
  const boxwidth = 300;
  //variables for API data
  const [motives, setMotives] = useState<MotiveDto[]>([]);
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [places, setPlaces] = useState<PlaceDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [securityLevels, setSecurityLevels] = useState<SecurityLevelDto[]>([]);
  const [photoTags, setPhotoTags] = useState<PhotoTagDto[]>([]);

  //variables for suggestions
  const [motive, setMotive] = useState<String>("");
  const [album, setAlbum] = useState<String>("");
  const [category, setCategory] = useState<String>("");
  const [place, setPlace] = useState<String>("");
  const [page, setPage] = useState(0);
  const [dateFrom, setDateFrom] = React.useState<Dayjs | null>(dayjs());
  const [dateFromChanged, setDateFromChanged] = useState(false);
  const [dateTo, setDateTo] = React.useState<Dayjs | null>(dayjs());
  const [isGoodPic, setIsGoodPic] = useState(false);
  const [isAnalog, setIsAnalog] = useState(false);
  const [securityLevel, setSecurityLevel] = useState<String>("");
  const [photoTag, setPhotoTag] = useState("");

  const tagRef = useRef<HTMLInputElement | null>(null);

  //for chipdata in tag component
  const [chipData, setChipData] = useState<ChipData[]>([]);

  //styles tag component
  const classes = useStyles();

  //ListItem for tags
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  //context for error handling
  const { setMessage, setSeverity, setOpen } = useContext(AlertContext);

  //throw error message if Api get request fails
  const setError = (e: string) => {
    setOpen(true);
    setSeverity(severityEnum.ERROR);
    setMessage(e);
  };

  //calls to backend to get suggestions for fields
  useEffect(() => {
    AlbumApi.getAll()
      .then((res) => setAlbums(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    PlaceApi.getAll()
      .then((res) => setPlaces(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    CategoryApi.getAll()
      .then((res) => setCategories(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    MotiveApi.getAll()
      .then((res) => setMotives(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    SecurityLevelApi.getAll()
      .then((res) => setSecurityLevels(res.data.currentList))
      .catch((e) => {
        setError(e);
      });
    PhotoTagApi.getAll()
      .then((res) => {
        setPhotoTags(res.data.currentList);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  //handles backspace in the tags field
  const handleBackspace = (event: React.KeyboardEvent) => {
    if (
      event.key === "Backspace" &&
      tagRef.current &&
      tagRef.current.value === ""
    ) {
      // Check if backspace is pressed and the input is empty
      if (chipData.length > 0) {
        // If there are tags, remove the last one
        const lastTag = chipData[chipData.length - 1];
        setChipData((chips) => chips.slice(0, -1));
      }
    }
  };

  //handles enter in tags field
  const handleEnterPress = (event: React.KeyboardEvent) => {
    if (
      event.key === "Enter" &&
      tagRef.current &&
      tagRef.current.value.trim() !== ""
    ) {
      // Check if Enter key is pressed and the input is not empty
      const newLabel = tagRef.current.value.trim();

      // Create a new chip with a unique key
      const newChip = {
        key: Date.now(),
        label: newLabel,
      };

      // Add the new chip to chipData and clear the input field
      setChipData((chips) => [...chips, newChip]);
      tagRef.current.value = "";
      setPhotoTag("");

      // Prevent the default behavior of the Enter key (form submission)
      event.preventDefault();
    }
  };

  //Handles deleting chip (tag) in tags field
  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips: any) =>
      chips.filter((chip: any) => chip.key !== chipToDelete.key),
    );
  };

  //setter functions for useState handling in autocomplete fields
  const handleMotiveChange = (
    event: React.SyntheticEvent,
    newValue: string | null,
  ) => {
    setMotive(newValue || ""); // Set the motive state to the selected value or an empty string if nothing is selected
  };
  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: string | null,
  ) => {
    setCategory(newValue || "");
  };
  const handlePlaceChange = (
    event: React.SyntheticEvent,
    newValue: string | null,
  ) => {
    setPlace(newValue || "");
  };
  const handleAlbumChange = (
    event: React.SyntheticEvent,
    newValue: string | null,
  ) => {
    setAlbum(newValue || "");
  };
  const handleSecurityLevelChange = (
    event: React.SyntheticEvent,
    newValue: string | null,
  ) => {
    setSecurityLevel(newValue || "");
  };
  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert the input value to a number and set 'page'
    setPage(Number(event.target.value));
  };

  const test = () => {
    console.log(motive);
    console.log(album);
    console.log(place);
    console.log(category);
    console.log(chipData);
    console.log(isGoodPic);
    console.log(isAnalog);
    console.log(dateFrom?.format("YYYY-MM-DD"));
    console.log(dateTo?.format("YYYY-MM-DD"));
    console.log(securityLevel);
    console.log(page);
    console.log(tagRef);
  };

  //build queryparams string and submit form to get results
  const onSubmitForm = () => {
    const photoSearch = new PhotoSearch();
    photoSearch.album = album.toString();
    photoSearch.motive = motive.toString();
    photoSearch.category = category.toString();
    photoSearch.isAnalog = isAnalog;
    photoSearch.isGoodPic = isGoodPic;
    photoSearch.page = page.toString();
    photoSearch.place = place.toString();
    photoSearch.securityLevel = securityLevel.toString();
    if (dateFrom?.format("YYYY/MM/DD").toString() != null) {
      photoSearch.dateFrom = dateFrom?.format("YYYY/MM/DD").toString();
    }
    if (dateTo?.format("YYYY/MM/DD").toString() != null) {
      photoSearch.dateTo = dateTo?.format("YYYY/MM/DD").toString();
    }
    photoSearch.photoTags = photoTags
      .filter((photoTag) => typeof photoTag.name === "string")
      .map((photoTag) => photoTag.name!);

    //todo add gang
  };

  return (
    <div style={{ width: "25%", margin: "0 auto" }}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
          overflow: "hidden",
        }}
        component="ul"
      >
        <form onSubmit={onSubmitForm}>
          <div>
            <div className={styles.formTextField}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={albums.map((albums) => albums.title)}
                sx={{ width: boxwidth }}
                onChange={handleAlbumChange}
                renderInput={(params) => (
                  <TextField {...params} label="Album" />
                )}
              />
            </div>
            <div className={styles.formTextField}>
              <TextField
                type="number"
                label="Side"
                onChange={handlePageChange}
                sx={{ width: boxwidth }}
              >
                Side
              </TextField>
            </div>

            <div className={styles.formTextField}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={motives.map((motive) => motive.title)}
                sx={{ width: boxwidth }}
                onChange={handleMotiveChange}
                renderInput={(params) => (
                  <TextField {...params} label="Motiv" value={motive} />
                )}
              />
            </div>

            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={"NO"}
              localeText={
                nbNO.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <div className={styles.formTextField}>
                <DatePicker
                  label={"Dato fra"}
                  value={dateFrom}
                  onChange={(newValue) => {
                    setDateFrom(newValue);
                    setDateFromChanged(true);
                  }}
                  format="DD/MM/YYYY"
                  sx={{ width: boxwidth }}
                />
              </div>
              <div className={styles.formTextField}>
                <DatePicker
                  label={"Dato til"}
                  value={dateTo}
                  onChange={(newValue) => setDateTo(newValue)}
                  format="DD/MM/YYYY"
                  sx={{ width: boxwidth }}
                />
              </div>
            </LocalizationProvider>

            <div className={styles.formTextField}>
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={categories.map((category) => category.name)}
                sx={{ width: boxwidth }}
                onChange={handleCategoryChange}
                renderInput={(params) => (
                  <TextField {...params} label="Kategori" />
                )}
              />
            </div>
            <div className={styles.formTextField}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={places.map((place) => place.name)}
                sx={{ width: boxwidth }}
                onChange={handlePlaceChange}
                renderInput={(params) => <TextField {...params} label="Sted" />}
              />
            </div>
            <div className={styles.formTextField}>
              <Box className={classes.flexContainer}>
                {chipData.map((data) => {
                  return (
                    <ListItem key={data.key}>
                      <Chip
                        label={data.label}
                        onDelete={handleDelete(data)}
                        color="primary"
                        avatar={
                          <Avatar
                            src="https://media.licdn.com/dms/image/C5603AQE2v2pQPeWZxw/profile-displayphoto-shrink_200_200/0/1637753916024?e=2147483647&v=beta&t=8RfihGiHP-vPJBaV6qCTUehBSpJjO_Y1plu0t6VtmyU"
                            alt="Ole"
                          />
                        }
                      />
                    </ListItem>
                  );
                })}
              </Box>
            </div>
            <div className={styles.formTextField}>
              <Autocomplete
                freeSolo
                options={photoTags.map((tag) => tag.name)} // Assuming tagName is the property containing the tag name
                inputValue={photoTag}
                onInputChange={(event, newInputValue) => {
                  setPhotoTag(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="standard"
                    inputRef={tagRef}
                    size="small"
                    sx={{ margin: "1rem 0" }}
                    margin="none"
                    placeholder={"Enter tags"}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }} />
                      ),
                    }}
                    onKeyDown={handleBackspace} // Add this event listener for backspace key
                    onKeyPress={handleEnterPress} // Add this event listener for Enter key
                  />
                )}
              />
            </div>
            <div className={styles.formTextField}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isGoodPic}
                      onChange={() => {
                        setIsGoodPic(!isGoodPic);
                      }}
                    />
                  }
                  label="Vises på forsiden"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAnalog}
                      onChange={() => {
                        setIsAnalog(!isAnalog);
                      }}
                    />
                  }
                  label="Analog"
                />
              </FormGroup>
            </div>
            <div className={styles.formTextField}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={securityLevels.map(
                  (securityLevel) => securityLevel.securityLevelType,
                )}
                onChange={handleSecurityLevelChange}
                sx={{ width: boxwidth }}
                renderInput={(params) => (
                  <TextField {...params} label="Sikkerhetsnivå" />
                )}
              />
            </div>
            <div className={styles.formTextField}>
              <Button
                sx={{ width: boxwidth }}
                variant="contained"
                color="primary"
                onClick={test}
              >
                Søk
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default InternSearchInput;
