import TopEffected from "./top-effected";
import Volunteer from "./volunteer";

import classes from "./styles.module.css";

const RightContainer = () => {
  return (
    <div className={classes.container}>
      <TopEffected />
      <Volunteer />
    </div>
  );
};

export default RightContainer;
