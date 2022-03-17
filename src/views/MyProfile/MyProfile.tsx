import React, { FC, useEffect, useState } from "react";
import guistyles from "../../styles/utilities.module.css";
import { tags } from "./mockdata";
import ProfileTags from "../../components/MyProfile/ProfileTags/ProfileTags";
import styles from "./MyProfile.module.css";
import cx from "classnames";
import ProfileCard from "../../components/MyProfile/ProfileCard/ProfileCard";
import { GuiProfileImage } from "../../gui-components";
import { PhotoGangBangerDto, RelationShipStatus } from "../../generated";
import { PhotoGangBangerApi } from "../../utils/api/PhotoGangBangerApi";
import { useAuth0 } from "@auth0/auth0-react";
import FGUserInfoForm from "../../forms/FGUserInfoForm";
import { Grid } from "@mui/material";

const MyProfile: FC = () => {
  const { user } = useAuth0();
  const myTags = tags; //TODO: FETCH FROM API
  // const user = User; //TODO: FETCH FROM API

  const [gangBanger, setGangBanger] = useState<PhotoGangBangerDto>({});
  const [isLoaded, setIsloaded] = useState<boolean>(false);

  const testId = "6a89444f-25f6-44d9-8a73-94587d72b839";

  useEffect(() => {
    PhotoGangBangerApi.getById(testId)
      .then((res) => {
        console.log(res);
        setGangBanger(res);
      })
      .catch((e) => console.error(e))
      .finally(() => setIsloaded(true));
  }, [user]);

  return (
    <div className={cx(guistyles.contentContainer, styles.profileContainer)}>
      <div>
        <div className={styles.profileImage}>
          <GuiProfileImage
            alt={gangBanger.samfundetUser?.username || "Ingen bilde funnet"}
            src={gangBanger.samfundetUser?.profilePicturePath}
            onClick={(): void => console.log("hei")}
          />
        </div>
        <div className={styles.profileCard}>
          <ProfileCard
            username={gangBanger.samfundetUser?.username || "Ingen brukernavn"}
            email={gangBanger.samfundetUser?.email?.value || ""}
            fgEmail={gangBanger.position?.email?.value || ""}
          />
        </div>
      </div>
      <div className={styles.nameAndTagContainer}>
        <div>
          <div>
            <h1 className={styles.profileName}>
              {gangBanger.samfundetUser?.firstName || "Ingen bruker funnet"}
            </h1>
          </div>
          <ProfileTags tags={myTags} />
        </div>
        <div>
          <Grid
            item
            xs={8}
            sx={{
              marginTop: "4rem",
            }}
          >
            {isLoaded && (
              <FGUserInfoForm
                initialValues={{
                  firstName: gangBanger.samfundetUser?.firstName || "",
                  lastName: gangBanger.samfundetUser?.lastName || "",
                  relationShipStatus:
                    gangBanger.relationShipStatus || RelationShipStatus.SINGLE,
                  semesterStart: gangBanger.semesterStart?.value || "",
                  address: gangBanger.address || "",
                  zipCode: gangBanger.zipCode || "",
                  city: gangBanger.city || "",
                  phoneNumber:
                    gangBanger.samfundetUser?.phoneNumber || undefined,
                  profilePicturePath:
                    gangBanger.samfundetUser?.profilePicturePath || "",
                  sex: gangBanger.samfundetUser?.sex || "",
                  active: gangBanger.active,
                  pang: gangBanger.pang,
                }}
                gangBanger={gangBanger}
              />
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
