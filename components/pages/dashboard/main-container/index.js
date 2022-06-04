import Symptoms from "./symptoms";
import GlobalCases from "./global-cases";
import AnnouncementCewcases from "./announcement-cewcases";
import AffectedArea from "./affected-area";

import classes from "./styles.module.css";

const MainContainer = ({ todayCases, yesterdayCases }) => {
  return (
    <div className={classes.container}>
      <Symptoms />
      <GlobalCases />
      <AnnouncementCewcases
        todayCases={todayCases}
        yesterdayCases={yesterdayCases}
      />
      <AffectedArea />
    </div>
  );
};

export default MainContainer;
