import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./GuiDropdownTab.module.css";
import { DefaultProps } from "../../types";
import GuiContentTab from "../GuiContentTab";
import DropDownArrow from "../Guiicons/DropDownArrow";
import OverflowMenuIcon from "../Guiicons/OverflowMenuIcon";
import OverflowItem from "../GuiOverflowMenu/GuiOverflowTab/OverflowItem";
import GuiOverflowMenuItem from "../GuiOverflowMenu/GuiOverflowTab/OverflowItem";
import ThreeDotsMenu from "../GuiOverflowMenu";

//type ColorType = "green" | "blue" | "purple" | "red" | "yellow";

interface Props extends DefaultProps {
  color: string;
  name: string;
  //hva skal dukke opp dersom man trykker på
  child?: any;
}

//må vel få laget en funksjon som kan brukes til å endre isOpen til true dersom den blir trykket på

const GuiDropdownTab: React.FC<Props> = ({ color, name, className }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [clickedArrow, setClickedArrow] = useState(false);
  const mock = [
    "hei1",
    "hei2",
    "hei3",
    "hei4",
    "hei5",
    "hei6",
    "hei7",
    "hei8",
    "hei9",
    "hei10",
    "hei11",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
    "hei",
  ];

  let Content = "";

  if (toggle) {
    Content = "showContent";
  } else {
    Content = "hideContent";
  }

  function handleClick() {
    setToggle(!toggle);
    setClickedArrow(clickedArrow);
  }

  const DropdownTabClass = cx(styles.DropdownTab, className, {
    [styles.red]: color == "red",
    [styles.yellow]: color == "yellow",
    [styles.blue]: color == "blue",
    [styles.green]: color == "green",
    [styles.purple]: color == "purple",
  });

  return (
    <div>
      <div className={DropdownTabClass} onClick={() => handleClick()}>
        {name}
        <DropDownArrow clicked={clickedArrow} />
      </div>
      <GuiContentTab contentTabClass={Content} name={name}>
        {mock.map((name) => (
          <div className={styles.column} key={name}>
            <ThreeDotsMenu />
            {name}
          </div>
        ))}
      </GuiContentTab>
    </div>
  );
};

export default GuiDropdownTab;
