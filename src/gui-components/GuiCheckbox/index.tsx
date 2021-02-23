import React, { FC, useState } from "react";
import { CheckboxSvg } from "../Guiicons";
import styles from "./GuiCheckbox.module.css";
import { DefaultProps } from "../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  /** True if checkbox is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
  label?: string;
  inputRef?: React.Ref<HTMLDivElement>;
}

const GuiCheckbox: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  label,
  inputRef,
  ...rest
}: Props) => {
  const [checkedBox, setCheckedBox] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedBox(!checkedBox);
  };
  return (
    <div className={styles.container}>
      <div
        onClick={handleClick}
        className={cx(styles.checkbox, className)}
        ref={inputRef}
        {...rest}
      >
        <CheckboxSvg checked={checkedBox} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default GuiCheckbox;
