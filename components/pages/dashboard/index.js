import MainContainer from "./main-container";
import RightContainer from "./right-container";

import classes from "./styles.module.css";

const DashboardComponents = () => {
  return (
    <div className={classes.container}>
      <MainContainer />
      <RightContainer />
    </div>
  );
};

export default DashboardComponents;
