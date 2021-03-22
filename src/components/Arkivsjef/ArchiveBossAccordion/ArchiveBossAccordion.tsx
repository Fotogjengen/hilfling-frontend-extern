import React, { FC } from "react";
import styles from "./ArchiveBossAccordion.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DefaultProps } from "../../../types";
import cx from "classnames";

interface Props extends DefaultProps {
  color: string;
  name: string;
  contents?: () => JSX.Element[];
}

const ArchiveBossAccordion: FC<Props> = ({ color, name, contents }) => {
  const ArchiveBossAccordionClass = cx(styles.archiveBossAccordion, {
    [styles.red]: color == "red",
    [styles.yellow]: color == "yellow",
    [styles.blue]: color == "blue",
    [styles.green]: color == "green",
    [styles.purple]: color == "purple",
  });

  return (
    <div className={styles.archiveBossAccordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={ArchiveBossAccordionClass}
        >
          <Typography> {name} </Typography>
        </AccordionSummary>
        <AccordionDetails>{contents}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ArchiveBossAccordion;
