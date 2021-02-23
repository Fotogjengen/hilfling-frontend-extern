import React, { FC } from "react";

interface Props {
  size?: number;
}

const GarbageCan: FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM10 0.666667H7.5L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667Z"
        fill="black"
      />
    </svg>
  );
};

export default GarbageCan;
