import React, { FC } from "react";
import { GuiCard } from "../../../gui-components";

interface Props {
  username: string;
  email: string;
  fgEmail: string;
}

const ProfileCard: FC<Props> = ({ username, email, fgEmail }: Props) => {
  return (
    <div>
      <GuiCard rounded>
        <p>
          <b>Brukernavn:</b> {username} <br />
          <b>E-post:</b> {email} <br />
          <b>Fotogjengen e-post:</b>
          <br /> {fgEmail} <br />
          {/* TODO: Fix a tag under */}
          {/* <a href="">Endre instillinger</a> */}
        </p>
      </GuiCard>
    </div>
  );
};

export default ProfileCard;
