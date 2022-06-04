import Country from "./country";
import Divider from "../../../../layouts/divider";

import classes from "./styles.module.css";

const TopEffected = ({ topEffected }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Effected Top Countries</h3>
      <Divider />
      <div className={classes.topone}>
        <div className={classes.flagcontainer}>
          <img
            src={topEffected[0].countryInfo.flag}
            alt={`${topEffected[0].country} flag`}
          />
        </div>
        <h3 className={classes.countryname}>{topEffected[0].country}</h3>
        <div className={classes.report}>
          <div className={classes.cat}>
            <h4 className={classes.catname}>CASES</h4>
            <div className={classes.catnumber}>{topEffected[0].cases}</div>
          </div>
          <div className={classes.cat}>
            <h4 className={classes.catname}>DEATH</h4>
            <div className={classes.catnumber}>{topEffected[0].deaths}</div>
          </div>
          <div className={classes.cat}>
            <h4 className={classes.catname}>RECOVERED</h4>
            <div className={classes.catnumber}>{topEffected[0].recovered}</div>
          </div>
        </div>
      </div>
      <Divider />
      <div className={classes.restcountries}>
        {topEffected.map(
          ({ countryInfo, country, cases, deaths, recovered }, id) =>
            id !== 0 && (
              <Country
                key={id}
                flagsrc={countryInfo.flag}
                countryname={country}
                cases={cases}
                death={deaths}
                recovered={recovered}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TopEffected;
