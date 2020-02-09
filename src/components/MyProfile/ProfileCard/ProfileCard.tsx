import React, { FC } from "react";
import { Card } from "hilfling-gui/lib";

interface Props {
  username: string;
  email: string;
  fgEmail: string;
}

const ProfileCard: FC<Props> = ({ username, email, fgEmail }: Props) => {
  return (
    <div>
      <Card rounded>
        <p>
          <b>Brukernavn:</b> {username} <br />
          <b>E-post:</b> {email} <br />
          <b>Fotogjengen e-post:</b>
          <br /> {fgEmail} <br />
          <a>Endre instillinger</a>
        </p>
      </Card>
    </div>
  );
};

export default ProfileCard;
