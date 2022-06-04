import MainContainer from "./main-container";
import RightContainer from "./right-container";

import classes from "./styles.module.css";

const DashboardComponents = ({ todayCases, yesterdayCases, topEffected }) => {
  return (
    <div className={classes.container}>
      <MainContainer todayCases={todayCases} yesterdayCases={yesterdayCases} />
      <RightContainer topEffected={topEffected} />
    </div>
  );
};

export default DashboardComponents;
