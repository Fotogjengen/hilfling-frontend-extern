import { Grid } from "@mui/material";
import React, { FC } from "react";
import ArchiveBossOverflow from "../ArchiveBossOverflow/ArchiveBossOverflow";

interface Props {
  /** Index of element when mapped */
  key: number | string | null | undefined;
  /** Text to display in the ArchiveBoss */
  text: string | undefined;
  /** Id to the ArchiveBoss element */
  id?: string;
}

const ArchiveBossElement: FC<Props> = ({ text, id }: Props) => {
  return (
    <Grid item xs={6} sm={3}>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
        <Grid item xs={6} sm={4}>
          <ArchiveBossOverflow id={id} />
        </Grid>
        <Grid item xs={6} sm={4} alignContent="space-around">
          {text}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArchiveBossElement;
