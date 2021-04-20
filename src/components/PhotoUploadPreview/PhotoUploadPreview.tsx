import styles from "./PhotoUploadPreview.module.css";
import React, { FC } from "react";
import { DragNDropFile } from "../../types";

interface Props {
  file: DragNDropFile;
}

const PhotoUploadPreview: FC<Props> = ({ file }) => {
  const fileSizeAsKb = Math.ceil(file.size / 1000);
  return (
    <div className={styles.container}>
      <img
        width={75}
        height={75}
        src={URL.createObjectURL(file)}
        alt={file.name}
        className={styles.image}
      />
      <div className={styles.metaContainer}>
        <div>{file.name}</div>
        <div>{fileSizeAsKb} kb</div>
        <div>{file.type}</div>
      </div>
    </div>
  );
};

export default PhotoUploadPreview;
