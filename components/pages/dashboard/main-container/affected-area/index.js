import SearchIcon from "../../../../icons/search";

import classes from "./styles.module.css";

const AffectedArea = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h3 className={classes.heading}>Affected Area</h3>
        <div className={classes.explane}>
          <div className={classes.category}>
            <div className={classes.box}></div>
            <div className={classes.name}>Most Affected</div>
          </div>
          <div className={classes.category}>
            <div className={classes.box}></div>
            <div className={classes.name}>Less Affected</div>
          </div>
        </div>
      </div>
      <div className={classes.map}>
        <div className={classes.search}>
          <SearchIcon />
        </div>
        <div className={classes.zooming}>
          <div className={classes.zoomin}>+</div>
          <div className={classes.zoomout}>-</div>
        </div>
      </div>
    </div>
  );
};

export default AffectedArea;
