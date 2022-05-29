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

  // tabs data
  const tabs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <DashboardIcon />,
      route: "dashboard",
    },
    {
      id: 2,
      name: "Maps",
      icon: <LocationIcon />,
      route: "maps",
    },
    {
      id: 3,
      name: "Hospital",
      icon: <HospitalIcon />,
      route: "hospital",
    },
    {
      id: 4,
      name: "Symptoms",
      icon: <DoctorToolIcon />,
      route: "symptoms",
    },
    {
      id: 5,
      name: "Test Yourself",
      icon: <BacteriaIcon />,
      route: "test",
    },
    {
      id: 6,
      name: "Vaccine",
      icon: <DoctorKitIcon />,
      route: "vaccine",
    },
    {
      id: 7,
      name: "News",
      icon: <NewsFeedIcon />,
      route: "news",
    },
  ];

  return (
    <Fragment>
      <nav className={classes.sidebar}>
        <h1 className={classes.logo}>Covid-19 Tracker</h1>
        <ul className={classes.sidelinks}>
          {tabs.map(({ id, name, icon, route }) => (
            <Tap
              key={id}
              name={name}
              icon={icon}
              active={activeTab === route ? true : false}
              tabName={route}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </nav>
      <div className={classes.spaceundersidebar} />
    </Fragment>
  );
};

export default Sidebar;
