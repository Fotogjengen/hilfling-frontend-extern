import React, { FC } from "react";

interface Props {
  size?: number;
}

const Pencil: FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8.70865V11H2.08304L8.22664 4.24205L6.14359 1.9507L0 8.70865ZM9.83752 2.47007C10.0542 2.23177 10.0542 1.84683 9.83752 1.60853L8.5377 0.178725C8.32107 -0.0595751 7.97112 -0.0595751 7.75448 0.178725L6.73795 1.2969L8.821 3.58825L9.83752 2.47007Z"
        fill="black"
      />
    </svg>
  );
};

export default Pencil;
