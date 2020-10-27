import React, { FC } from "react";
import { Card, CardTitle, Button } from "hilfling-gui/lib";

const CardInformationSection: FC<{}> = () => {
  return (
    <div>
        <form>
            <label id="security">Security level:</label>
            <select>
                <option id="1">1</option>
            </select>
            <label id="image">Last opp bilde!</label>
            <input type="file"></input>
        </form>
    </div>
  );
};

export default CardInformationSection;
