import React from "react";
import guistyles from "../../styles/utilities.module.css";
import { tags, User } from "./mockdata";
import styles from "./EditMyProfile.module.css";
import cx from "classnames";
import { GuiProfileImage } from "../../gui-components";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import { GuiProfileImageEdit } from "../../gui-components/GuiImage";

const MyProfile: React.FC = () => {
  const myTags = tags; //TODO: FETCH FROM API
  const user = User; //TODO: FETCH FROM API
  return (
    <div className={cx(guistyles.contentContainer)}>
      <div className={styles.header}>
        <p className={styles.headerText}>Rediger profil</p>
        <hr />
      </div>
      <div className={styles.editprofileContainer}>
        <div>
          <div className={styles.profileImage}>
            <GuiProfileImageEdit
              alt={user[0].name}
              src={user[0].image}
              onClick={(): void => console.log("hei")}
            />
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.input}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Fornavn"
              variant="standard"
            />
          </div>
          <div className={styles.input}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Etternavn"
              variant="standard"
            />
          </div>
          <div className={styles.input}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Telefonnummer"
              variant="standard"
            />
          </div>
          <div className={styles.input}>
            <label>Aktiv i fotogjengen?</label>
            <RadioGroup>
              <FormControlLabel value="ja" control={<Radio />} label="Ja" />
              <FormControlLabel value="nei" control={<Radio />} label="Nei" />
            </RadioGroup>
          </div>
          <div className={styles.input}>
            <label>Stilling</label>
            <Select fullWidth />
          </div>
          <div className={styles.input}>
            <label>Aktiv siden</label>
            <Select fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
