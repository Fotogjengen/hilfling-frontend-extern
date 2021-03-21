import React, { FC } from "react";
import styles from "./ArchiveBossAccordion.module.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { DefaultProps } from "../../../types";
import cx from "classnames";

const AccordionSummary = withStyles({
  content: {
    fontSize: "4rem",
  },
})(MuiAccordionSummary);

interface Props extends DefaultProps {
  color: string;
  name: string;
  contents: () => JSX.Element[];
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
