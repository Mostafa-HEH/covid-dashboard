import MainContainer from "./main-container";
import RightContainer from "./right-container";

import classes from "./styles.module.css";

const DashboardComponents = ({ todayCases, yesterdayCases }) => {
  return (
    <div className={classes.container}>
      <MainContainer todayCases={todayCases} yesterdayCases={yesterdayCases} />
      <RightContainer />
    </div>
  );
};

export default DashboardComponents;
