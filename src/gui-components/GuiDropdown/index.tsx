import React, { FC } from "react";
import styles from "./GuiDropdown.module.css";
import cx from "classnames";

interface Props {
  options: Array<string>;
  whenSelected: () => void;
  className?: string;
  inputRef?: React.Ref<HTMLSelectElement>;
}

const GuiDropdown: FC<Props> = ({
  options,
  whenSelected,
  className,
  inputRef,
  ...rest
}: Props) => {
  const optionsList = options.map((element, index) => (
    <option
      key={`dropdown-option-${index}`}
      onSelect={whenSelected}
      value={element}
    >
      {element}
    </option>
  ));
  const selectClass = cx(className);
  return (
    <div>
      <select
        ref={inputRef}
        className={selectClass}
        onChange={whenSelected}
        {...rest}
      >
        {optionsList}
      </select>
      <div className={styles.arrow} />
    </div>
  );
};

export default GuiDropdown;
