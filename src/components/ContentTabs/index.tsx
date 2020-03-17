import React, { FC, useState } from "react";
import { Tab } from "hilfling-gui/lib";
import { EventType } from "hilfling-gui/lib/types";

interface Props {
  /** Primary button styling */
  type?: EventType;
  /** Called when a button is clicked */
  onClick?: () => void;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
  /** Which tab is active? */
  activeTab: string;
}

const Tabs: FC<Props> = ({
  type,
  activeTab = "samfundet",
  onClick,
  ...rest
}: Props) => {
  function handleClick(){

  }
  const [current, setCurrent] = useState<string>(activeTab);
  return (
    <div>
      <Tab
        onClick={setCurrent}
        type={"samfundet"}
        active={current == "samfundet"}
      >
        SAMFUNDET
      </Tab>
      <Tab onClick={setCurrent} type={"uka"} active={current == "uka"}>
        UKA
      </Tab>
      <Tab onClick={setCurrent} type={"isfit"} active={current == "isfit"}>
        ISFIT
      </Tab>
      <Tab onClick={setCurrent} type={"annet"} active={current == "annet"}>
        ANNET
      </Tab>
      {/*
      <OtherTab
        onClick={setCurrent}
        active={current == "other"}
        btnColor={"blue"}
        btnBorderColor={"red"}
      >
        Other Tab!
      </OtherTab>*/}
    </div>
  );
};

export default Tabs;
