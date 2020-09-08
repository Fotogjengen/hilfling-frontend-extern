import React, { FC, useState } from "react";
import { Tabs } from "hilfling-gui/lib";
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

const ContentTabs: FC<Props> = ({
  type,
  activeTab = "samfundet",
  onClick,
  ...rest
}: Props) => {
  function handleClick(){

  }
  const [current, setCurrent] = useState<string>(activeTab);
  return (
    <Tabs
      activeTab="other"
      onClick={function noRefCheck() {}}
      type="samfundet"
    >
    </Tabs>
  );
};

export default Tabs;
