import Symptoms from "./symptoms";
import GlobalCases from "./global-cases";
import AnnouncementCewcases from "./announcement-cewcases";
import AffectedArea from "./affected-area";

import classes from "./styles.module.css";

const MainContainer = () => {
  return (
    <div className={classes.container}>
      <Symptoms />
      <GlobalCases />
      <AnnouncementCewcases />
      <AffectedArea />
    </div>
  );
};

export default MainContainer;
