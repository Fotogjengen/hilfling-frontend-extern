import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import ArchiveBossOverflow from "../ArchiveBossOverflow/ArchiveBossOverflow";

interface Props {
  /** Index of element when mapped */
  key: number;
  /** Text to display in the ArchiveBoss */
  text: string | undefined;
}

const ArchiveBossElement: FC<Props> = ({ key, text }: Props) => {
  return (
    <Grid item xs={6} sm={3} key={key}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={6} sm={4}>
          <ArchiveBossOverflow />
        </Grid>
        <Grid item xs={6} sm={4} alignContent="space-around" direction="row">
          {text}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArchiveBossElement;
