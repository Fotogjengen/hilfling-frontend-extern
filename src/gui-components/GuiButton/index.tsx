import React, { FC } from "react";
import cx from "classnames";
import styles from "./GuiButton.module.css";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps {
  /** Content inside */
  children?: any;
  /** Primary button styling */
  primary?: boolean;
  /** Danger button styling (red button) */
  warning?: boolean;
  /** Called when a button is clicked */
  onClick?: () => void;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
}

const GuiButton: FC<Props> = ({
  children,
  primary,
  warning,
  onClick,
  disabled = false,
  submit,
  className,
  ...rest
}: Props) => {
  const buttonClass = cx(
    styles.Button,
    { [styles.primary]: primary },
    { [styles.warning]: warning },
    {
      [styles.disabled]: disabled && !onClick,
    },
    className,
  );
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GuiButton;
