import React, { FC, useState } from "react";
import cx from "classnames";
import styles from "./GuiDropdownTab.module.css";
import { DefaultProps } from "../../types";
import GuiContentTab from "../GuiContentTab";
import DropDownArrow from "../Guiicons/DropDownArrow";
import ThreeDotsMenu from "../GuiOverflowMenu";

interface Props extends DefaultProps {
  color: string;
  name: string;
  //hva skal dukke opp dersom man trykker på
  child?: any;
}

//må vel få laget en funksjon som kan brukes til å endre isOpen til true dersom den blir trykket på

const GuiDropdownTab: FC<Props> = ({ color, name, className }) => {
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

  let content = "";

  if (toggle) {
    content = "showContent";
  } else {
    content = "hideContent";
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
      <GuiContentTab contentTabClass={content} name={name}>
        {mock.map((mockedName) => (
          <div className={styles.column} key={mockedName}>
            <ThreeDotsMenu />
            {mockedName}
          </div>
        ))}
      </GuiContentTab>
    </div>
  );
};

export default GuiDropdownTab;
