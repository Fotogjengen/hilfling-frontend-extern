import React, { FC } from "react";
import { withStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
  Grid,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import styles from "./ArchiveBossAccordion.module.css";
import { DefaultProps } from "../../../types";

interface Props extends DefaultProps {
  color: string;
  name: string;
}

const ArchiveBossAccordion: FC<Props> = ({ color, name, children }) => {
  const AccordionSummary: any = withStyles({
    root: {
      backgroundColor: color,
      padding: "1rem",
    },
  })(MuiAccordionSummary);

  return (
    <div className={styles.archiveBossAccordion}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography> {name} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={5}>
            {children}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ArchiveBossAccordion;
