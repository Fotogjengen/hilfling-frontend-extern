import React, { FC } from "react";

interface Props {
  clicked?: boolean;
}

const DropDownArrow: FC<Props> = ({ clicked = false }: Props) => (
  <div>
    {clicked ? (
      <svg
        width="36"
        height="22"
        viewBox="0 0 36 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.54"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.58333 21.9167L18 8.50008L31.4167 21.9167L35.5 17.8334L18 0.333412L0.5 17.8334L4.58333 21.9167Z"
          fill="black"
        />
      </svg>
    ) : (
      <svg
        width="32"
        height="20"
        viewBox="0 0 32 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.54"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.8833 0.216797L16 12.1001L4.11667 0.216797L0.5 3.83346L16 19.3335L31.5 3.83346L27.8833 0.216797Z"
          fill="black"
        />
      </svg>
    )}
  </div>
);

export default DropDownArrow;
