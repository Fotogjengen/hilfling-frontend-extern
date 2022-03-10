import React, { FC, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Container,
  Avatar,
  Grid,
  Box,
  Typography,
  Divider,
  Chip,
  styled,
  Card,
  CardContent,
} from "@mui/material";
import { PhotoGangBangerDto } from "../../generated";
import { PhotoGangBangerApi } from "../utils/api/PhotoGangBangerApi";
import FGUserInfoForm from "../forms/FGUserInfoForm";

interface StyledChipProps {
  bgcolor?: string;
  textColor?: string;
}
const StyledChip = styled(Chip, {
  shouldForwardProp: (prop: any) => prop !== "bgcolor",
})<StyledChipProps>(({ bgcolor, textColor }) => ({
  backgroundColor: bgcolor,
  color: textColor,
}));

const CsaTester: FC = () => {
  const { user } = useAuth0();
  const [gangBanger, setGangBanger] = useState<PhotoGangBangerDto>({});
  const [isLoaded, setIsloaded] = useState<boolean>(false);

  const imageCount = 42069;
  const testId = "7a89444f-25f6-44d9-8a73-94587d72b839";

  useEffect(() => {
    PhotoGangBangerApi.getById(testId)
      .then((res) => {
        console.log(res);
        setGangBanger(res);
      })
      .catch((e) => console.error(e))
      .finally(() => setIsloaded(true));
  }, [user]);

  useEffect(() => {
    console.log(gangBanger);
  }, [gangBanger]);

  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar
              src={gangBanger.samfundetUser?.profilePicturePath}
              sx={{
                width: 120,
                height: 120,
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3">Caroline Sandsbråten</Typography>
            <Divider
              sx={{
                marginBottom: "5px",
              }}
            />
            <Box component="span">
              <StyledChip
                sx={{
                  mr: 1,
                }}
                bgcolor="#BADA77"
                label="Aktiv"
              />
              <StyledChip
                sx={{
                  mr: 1,
                }}
                bgcolor="#DA7777"
                label="Gjengsjef"
              />
              <StyledChip
                sx={{
                  mr: 1,
                }}
                bgcolor="#7793DA"
                label="Medlem siden H16"
              />
              <StyledChip
                sx={{
                  mr: 1,
                }}
                bgcolor="#9C77DA"
                label="Barsjef"
              />
              <StyledChip
                sx={{
                  mr: 1,
                }}
                bgcolor="#F3EE78"
                label="Arkivsjef"
              />
            </Box>
            <Typography
              sx={{
                mt: 2,
              }}
              variant="h5"
            >
              Bilder: {imageCount}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            mt: 5,
          }}
          spacing={2}
        >
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Personalia
                </Typography>
                <Divider />
                <Typography variant="body2">
                  <b>Brukernavn:</b>
                  <br />
                  {user?.nickname}
                </Typography>
                <Typography variant="body2">
                  <b>E-post:</b>
                  <br />
                  {user?.email}
                </Typography>
                <Typography variant="body2">
                  <b>Fotogjengen e-post</b>
                  <br />
                  fg-web@samfundet.no
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            {isLoaded && (
              <FGUserInfoForm
                initialValues={{
                  firstName: gangBanger.samfundetUser?.firstName || "",
                  lastName: gangBanger.samfundetUser?.lastName || "",
                  relationShipStatus: gangBanger.relationShipStatus || "",
                  semesterStart: gangBanger.semesterStart?.value || "",
                  address: gangBanger.address || "",
                  zipCode: gangBanger.zipCode || "",
                  city: gangBanger.city || "",
                  phoneNumber:
                    gangBanger.samfundetUser?.phoneNumber?.value || "",
                  profilePicturePath:
                    gangBanger.samfundetUser?.profilePicturePath || "",
                  sex: gangBanger.samfundetUser?.sex || "",
                  active: gangBanger.active,
                  pang: gangBanger.pang,
                }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CsaTester;
