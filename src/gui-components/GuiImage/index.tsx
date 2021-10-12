import React, { FC } from "react";
import styles from "./GuiImage.module.css";
import cx from "classnames";
import { DefaultProps } from "../../types";

import editSrc from "./editSrc.png";

interface Props extends DefaultProps {
  src?: string;
  alt: string;
}

const GuiImage: FC<Props> = ({ src, alt, ...rest }: Props) => {
  return <img className={cx(styles.image)} src={src} alt={alt} {...rest} />;
};

interface ProfileImageProps extends Props {
  onClick(): void;
}

const GuiProfileImage: FC<ProfileImageProps> = ({
  src,
  alt,
  onClick,
  className,
  ...rest
}: ProfileImageProps) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={cx(styles.profileImage, className)}
        {...rest}
      />
    </div>
  );
};

const GuiProfileImageEdit: FC<ProfileImageProps> = ({
  src,
  alt,
  onClick,
  className,
  ...rest
}: ProfileImageProps) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={cx(styles.profileImage, className)}
        {...rest}
      />
      <div className={styles.editProfileImage} />
    </div>
  );
};

export default GuiImage;
export { GuiProfileImage, GuiProfileImageEdit };
