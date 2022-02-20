import React, { FC, useState ,SyntheticEvent } from "react";

import {
  AppBar,
  Tab,
  Tabs,
} from "@mui/material";
import TabPanel from "../../components/TabPanel/TabPanel";

import InfoTab from "./Tabs/InfoTab";
import HistoryTab from "./Tabs/HistoryTab";
import AboutTab from "./Tabs/AboutTab";

const About: FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);



  const handleTabChange = (event: SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
    console.log(event);
  };

  return (
    <div className="container">
      <AppBar position="static" color="default">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="about tabs"
        >
          <Tab label="Om oss" />
          <Tab label="Info" />
          <Tab label="Historie" />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <AboutTab/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <InfoTab/>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <HistoryTab/>
      </TabPanel>
    </div>
  );
};

export default About;
