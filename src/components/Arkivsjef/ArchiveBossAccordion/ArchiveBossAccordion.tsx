import React, { FC } from "react";
import { withStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
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
        <AccordionSummary expandIcon={<ExpandMore />}
        
        sx={{
          backgroundColor: color, // Apply dynamic background color to the summary, chat-special
          padding: "1rem",
        }}
        
        >
          <Typography           sx={{ 
            color: 'white' // Change this to any color you want, or pass it as a prop
          }}> {name} </Typography>
        </AccordionSummary>
        <AccordionDetails
        
        sx={{
          backgroundColor: color, // Apply dynamic background color to the summary
          padding: "1rem",
        }}>


          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ArchiveBossAccordion;
