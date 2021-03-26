import React, { FC, ReactNode } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styles from "./ArchiveBossAccordion.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DefaultProps } from "../../../types";

interface Props extends DefaultProps {
  color: string;
  name: string;
  content?: () => JSX.Element[];
}

const ArchiveBossAccordion: FC<Props> = ({ color, name, content }) => {
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: color,
      padding: "1rem",
    },
  })(MuiAccordionSummary);

  return (
    <div className={styles.archiveBossAccordion}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography> {name} </Typography>
        </AccordionSummary>
        <AccordionDetails> {content} </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ArchiveBossAccordion;
