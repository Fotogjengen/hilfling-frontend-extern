import React, { FC } from "react";

interface Props {
  /** Radio button checked if true */
  checked: boolean;
}

const RadioButtonSvg: FC<Props> = ({ checked }: Props) => {
  return checked ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 6.41667C8.43333 6.41667 6.41667 8.43333 6.41667 11C6.41667 13.5667 8.43333 15.5833 11 15.5833C13.5667 15.5833 15.5833 13.5667 15.5833 11C15.5833 8.43333 13.5667 6.41667 11 6.41667V6.41667ZM11.0002 1.8335C5.9585 1.8335 1.8335 5.9585 1.8335 11.0002C1.8335 16.0418 5.9585 20.1668 11.0002 20.1668C16.0418 20.1668 20.1668 16.0418 20.1668 11.0002C20.1668 5.9585 16.0418 1.8335 11.0002 1.8335V1.8335ZM11 18.3333C6.96667 18.3333 3.66667 15.0333 3.66667 11C3.66667 6.96667 6.96667 3.66667 11 3.66667C15.0333 3.66667 18.3333 6.96667 18.3333 11C18.3333 15.0333 15.0333 18.3333 11 18.3333V18.3333Z"
          fill="#B42025"
        />
      </g>
      <defs>
        <filter
          id="filter0_i"
          x="1.8335"
          y="1.8335"
          width="18.3333"
          height="22.3333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i)">
        <path
          opacity="0.54"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0002 1.8335C5.9585 1.8335 1.8335 5.9585 1.8335 11.0002C1.8335 16.0418 5.9585 20.1668 11.0002 20.1668C16.0418 20.1668 20.1668 16.0418 20.1668 11.0002C20.1668 5.9585 16.0418 1.8335 11.0002 1.8335V1.8335ZM10.9998 18.3333C6.9665 18.3333 3.6665 15.0333 3.6665 11C3.6665 6.96667 6.9665 3.66667 10.9998 3.66667C15.0332 3.66667 18.3332 6.96667 18.3332 11C18.3332 15.0333 15.0332 18.3333 10.9998 18.3333V18.3333Z"
          fill="#010101"
        />
      </g>
      <defs>
        <filter
          id="filter0_i"
          x="1.8335"
          y="1.8335"
          width="18.3333"
          height="22.3333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
};

export default RadioButtonSvg;
