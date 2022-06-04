import Announcement from "./announcement";
import NewCases from "./newcases";

import classes from "./styles.module.css";

const AnnouncementCewcases = ({ todayCases, yesterdayCases }) => {
  return (
    <div className={classes.container}>
      <Announcement />
      <NewCases todayCases={todayCases} yesterdayCases={yesterdayCases} />
    </div>
  );
};

export default AnnouncementCewcases;
