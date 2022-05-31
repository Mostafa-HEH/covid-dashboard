import Announcement from "./announcement";
import NewCases from "./newcases";

import classes from "./styles.module.css";

const AnnouncementCewcases = () => {
  return (
    <div className={classes.container}>
      <Announcement />
      <NewCases />
    </div>
  );
};

export default AnnouncementCewcases;
