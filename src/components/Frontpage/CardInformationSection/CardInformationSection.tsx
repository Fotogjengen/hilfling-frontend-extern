import React, { FC } from "react";
import { Card, CardTitle } from "hilfling-gui/lib";

const CardInformationSection: FC<{}> = () => {
  return (
    <div>
      <Card>
        <CardTitle title={"Fotogjengen"} capitalized={true} />
        <p>
          Fotogjengen er en gjeng på Samfundet. Vi har ansvar for å dokumentere
          alt som skjer på huset. Alle bilder vi tar legges ut på denne
          nettsiden. Ønsker du å bruke noen av bildene våre. Venligst krediter
          med foto: foto.samfundet.no.
        </p>
        <p>
          <a href="https://foto.samfundet.no/informasjon/">
            Les mer om oss her.
          </a>
        </p>
      </Card>
      <Card>
        <CardTitle title={"Anmodning"} capitalized={true} />
        <p>
          Trenger du en fotogreaf? Fotogjengen kan hjelpe deg! Les mer og anmod
          oss her!
        </p>
      </Card>
    </div>
  );
};

export default CardInformationSection;
