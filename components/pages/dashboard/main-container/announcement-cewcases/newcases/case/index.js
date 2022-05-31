import classes from "./styles.module.css";

const Case = () => {
  return (
    <div className={classes.container}>
      <div className={classes.flag}>
        <img src="" alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.nametotal}>
          <div className={classes.name}>France</div>
          <div className={classes.total}>158,183</div>
        </div>
        <div className={classes.newcases}>+589</div>
      </div>
    </div>
  );
};

export default Case;
