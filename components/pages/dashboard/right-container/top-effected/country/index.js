import { Fragment } from "react";
import Divider from "../../../../../layouts/divider";

import classes from "./styles.module.css";

const Country = ({ flagsrc, countryname, cases, death, recovered }) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.flag}>
          <img src={flagsrc} alt={countryname} />
        </div>
        <div className={classes.textcontainer}>
          <h3 className={classes.country}>{countryname}</h3>
          <div className={classes.report}>
            <div className={classes.cat}>
              <h4 className={classes.catname}>CASES</h4>
              <div className={classes.catnumber}>{cases}</div>
            </div>
            <div className={classes.cat}>
              <h4 className={classes.catname}>DEATH</h4>
              <div className={classes.catnumber}>{death}</div>
            </div>
            <div className={classes.cat}>
              <h4 className={classes.catname}>RECOVERED</h4>
              <div className={classes.catnumber}>{recovered}</div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </Fragment>
  );
};

export default Country;
