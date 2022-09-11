import React, { FC } from "react";
import { GuiCard, GuiCardTitle } from "../../../gui-components";

const CardInformationAnmoding: FC = () => {
  return (
    <div>
      <GuiCard>
        <GuiCardTitle title={"Anmodning"} capitalized={true} />
        <p>
          Trenger du en fotograf? Fotogjengen kan hjelpe deg!{" "}
          <a
            style={{ color: "#ad2f33" }}
            href="https://foto.samfundet.no/informasjon/"
          >
            Les mer om og anmod oss her.
          </a>
          oss her!
        </p>
      </GuiCard>
    </div>
  );
};

export default CardInformationAnmoding;
