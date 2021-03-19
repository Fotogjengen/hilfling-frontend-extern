import React, { FC, KeyboardEvent, ReactNode } from "react";
import styles from "./GuiOverflowMenu.module.css";
import { DefaultProps } from "../../types";
import ThreeDots from "../Guiicons/ThreeDots";
import OverflowMenu2 from "./GuiOverflowTab";
import GuiOverflowMenuItem from "./GuiOverflowTab/OverflowItem";
import Pencil from "../Guiicons/Pencil";
import useVisible from "./useVisible";

interface ThreeDotsItem {
  icon: React.FC;
  title: string;
}

interface Props extends DefaultProps {
  children?: ReactNode;
  items?: [ThreeDotsItem];
}

const GuiOverflowMenu: FC<Props> = () => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const content = "showContent";
  const mock: [ThreeDotsItem] = [
    {
      icon: Pencil,
      title: "Rediger",
    },
  ];

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "escape") {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div ref={ref}>
      <div
        className={styles.OverflowMenu}
        onClick={() => setIsVisible(!isVisible)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <ThreeDots size={20} />
      </div>
      <div>
        {isVisible && (
          <OverflowMenu2 overflowTabClass={content}>
            {mock.map((item, index) => (
              <GuiOverflowMenuItem
                key={`overflow-menu-item-${index}`}
                text={item.title}
                icon={item.icon}
              />
            ))}
          </OverflowMenu2>
        )}
      </div>
    </div>
  );
};

export default GuiOverflowMenu;
