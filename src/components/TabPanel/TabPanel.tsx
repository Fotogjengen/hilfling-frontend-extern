import React, { FC, ReactNode } from "react";
import { Box, Typography } from "@material-ui/core";
import styles from "./TabPanel.module.css";

interface Props {
  children: ReactNode;
  value: number;
  index: number;
}

const TabPanel: FC<Props> = ({ children, value, index, ...rest }) => {
  return (
    <div
      className={styles.TabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
