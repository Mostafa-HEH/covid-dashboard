import TopEffected from "./top-effected";
import Volunteer from "./volunteer";

import classes from "./styles.module.css";

const RightContainer = ({ topEffected }) => {
  return (
    <div className={classes.container}>
      <TopEffected topEffected={topEffected} />
      <Volunteer />
    </div>
  );
};

export default RightContainer;
