import React, { FC } from "react";

interface Props {
  checked: boolean;
}

const CheckboxSvg: FC<Props> = ({ checked }: Props) => (
  <div>
    {checked ? (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7 14L2 8.71154L3.4 7.23077L7 11.0385L14.6 3L16 4.48077L7 14Z"
          fill="#B42025"
        />
      </svg>
    ) : (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.54"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
          fill="#010101"
        />
      </svg>
    )}
  </div>
);

export default CheckboxSvg;
