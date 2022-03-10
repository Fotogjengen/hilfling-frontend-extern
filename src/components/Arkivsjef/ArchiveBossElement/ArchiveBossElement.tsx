import { Grid } from "@mui/material";
import React, { FC } from "react";
import ArchiveBossOverflow from "../ArchiveBossOverflow/ArchiveBossOverflow";

interface Props {
  /** Index of element when mapped */
  key: number | string | null | undefined;
  /** Text to display in the ArchiveBoss */
  text: string | undefined;
  /** Id belonging to the ArchiveBoss element */
  id: string;
  /** Type of Overflow menu */
  type: string;
}

/** TODO: Ehm er det noen bedre å gjøre dette på kanskje :) */
const ArchiveBossElement: FC<Props> = ({ text, id ='notdefinedyet', type }: Props) => {
  return (
    <Grid item xs={6} sm={3}>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
        <Grid item xs={6} sm={4}>
          <ArchiveBossOverflow id={id} type={type}/>
        </Grid>
        <Grid item xs={6} sm={4} alignContent="space-around">
          {text}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArchiveBossElement;
