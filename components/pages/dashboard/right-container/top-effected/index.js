import Country from "./country";
import Divider from "../../../../layouts/divider";

import classes from "./styles.module.css";

const TopEffected = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Effected Top Countries</h3>
      <Divider />
      <div className={classes.topone}>
        <div className={classes.flagcontainer}>
          <img src="" alt="use" />
        </div>
        <h3 className={classes.countryname}>United States</h3>
        <div className={classes.report}>
          <div className={classes.cat}>
            <h4 className={classes.catname}>CASES</h4>
            <div className={classes.catnumber}>886,709</div>
          </div>
          <div className={classes.cat}>
            <h4 className={classes.catname}>DEATH</h4>
            <div className={classes.catnumber}>50,243</div>
          </div>
          <div className={classes.cat}>
            <h4 className={classes.catname}>RECOVERED</h4>
            <div className={classes.catnumber}>85,922</div>
          </div>
        </div>
      </div>
      <Divider />
      <div className={classes.restcountries}>
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
        <Country
          flagsrc=""
          countryname="Spain"
          cases="886,709"
          death="50,243"
          recovered="85,922"
        />
      </div>
    </div>
  );
};

export default TopEffected;
