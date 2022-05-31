import { useState } from "react";

import LinkButton from "../../../../../layouts/buttons/link-button";

import classes from "./styles.module.css";

const Announcement = () => {
  const [current, setCurrent] = useState(2);

  return (
    <div className={classes.container}>
      <div className={classes.slide}>
        <div className={classes.tag}>Announcement</div>
        <h3 className={classes.head}>
          Measures to stop the spread of coronavirus extended
        </h3>
        <LinkButton color="green">Read More</LinkButton>
      </div>
      <div className={classes.dottes}>
        <span
          className={`${classes.dot} ${current === 1 ? classes.active : null}`}
        ></span>
        <span
          className={`${classes.dot} ${current === 2 ? classes.active : null}`}
        ></span>
        <span
          className={`${classes.dot} ${current === 3 ? classes.active : null}`}
        ></span>
      </div>
    </div>
  );
};

export default Announcement;
