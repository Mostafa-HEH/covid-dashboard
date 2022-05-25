import { useState, Fragment } from "react";

import Tap from "./tab";

import DashboardIcon from "../../icons/dashboard";
import LocationIcon from "../../icons/location";
import HospitalIcon from "../../icons/hospital";
import DoctorToolIcon from "../../icons/doctortool";
import BacteriaIcon from "../../icons/bacteria";
import DoctorKitIcon from "../../icons/doctorkit";
import NewsFeedIcon from "../../icons/newsfeed";

import classes from "./styles.module.css";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Fragment>
      <nav className={classes.sidebar}>
        <h1 className={classes.logo}>Covid-19 Tracker</h1>
        <ul className={classes.sidelinks}>
          <Tap
            name="Dashboard"
            icon={<DashboardIcon />}
            active={activeTab === "dashboard" ? true : false}
            tabName="dashboard"
            setActiveTab={setActiveTab}
          />
          <Tap
            name="Maps"
            icon={<LocationIcon />}
            active={activeTab === "maps" ? true : false}
            tabName="maps"
            setActiveTab={setActiveTab}
          />
          <Tap
            name="Hospital"
            icon={<HospitalIcon />}
            active={activeTab === "hospital" ? true : false}
            tabName="hospital"
            setActiveTab={setActiveTab}
          />
          <Tap
            name="Symptoms"
            icon={<DoctorToolIcon />}
            active={activeTab === "symptoms" ? true : false}
            tabName="symptoms"
            setActiveTab={setActiveTab}
          />
          <Tap
            name="Test Yourself"
            icon={<BacteriaIcon />}
            active={activeTab === "test" ? true : false}
            tabName="test"
            setActiveTab={setActiveTab}
          />
          <Tap
            name="Vaccine"
            icon={<DoctorKitIcon />}
            active={activeTab === "vaccine" ? true : false}
            tabName="vaccine"
            setActiveTab={setActiveTab}
          />
          <Tap
            name="News"
            icon={<NewsFeedIcon />}
            active={activeTab === "news" ? true : false}
            tabName="news"
            setActiveTab={setActiveTab}
          />
        </ul>
      </nav>
      <div className={classes.spaceundersidebar} />
    </Fragment>
  );
};

export default Sidebar;
