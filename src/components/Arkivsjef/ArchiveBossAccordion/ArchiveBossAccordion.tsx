import React, { FC } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./ArchiveBossAccordion.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DefaultProps } from "../../../types";
import Grid from "@material-ui/core/Grid";

interface Props extends DefaultProps {
  color: string;
  name: string;
}

const ArchiveBossAccordion: FC<Props> = ({ color, name, children }) => {
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: color,
      padding: "1rem",
    },
  })(MuiAccordionSummary);

  return (
    <div className={styles.archiveBossAccordion}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{fontSize: '3rem'}}/>}>
          <Typography variant='h4'> {name} </Typography>
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
