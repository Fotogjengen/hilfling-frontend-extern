import React, { FC, useState } from "react";
import { RadioButtonSvg } from "../Guiicons";
import styles from "./GuiRadioButton.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  /** True if radiobutton is checked */
  checked?: boolean;
  /** True if not able to change component state */
  notChangeable?: boolean;
  label?: string;
  inputRef?: React.Ref<HTMLDivElement>;
}

const GuiRadioButton: FC<Props> = ({
  checked = false,
  notChangeable,
  className,
  label,
  inputRef,
  ...rest
}: Props) => {
  const [checkedRadio, setCheckedRadio] = useState<boolean>(checked);
  const handleClick = () => {
    if (notChangeable) return;
    setCheckedRadio(!checkedRadio);
  };
  return (
    <div className={styles.container}>
      <div
        onClick={handleClick}
        className={cx(styles.radiobutton, className)}
        ref={inputRef}
        {...rest}
      >
        <RadioButtonSvg checked={checkedRadio} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default GuiRadioButton;
