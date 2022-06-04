import classes from "./styles.module.css";

const Case = ({ flag, name, total, newcases }) => {
  return (
    <div className={classes.container}>
      <div className={classes.flag}>
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className={classes.details}>
        <div className={classes.nametotal}>
          <div className={classes.name}>{name}</div>
          <div className={classes.total}>{total}</div>
        </div>
        <div className={classes.newcases}>+{newcases}</div>
      </div>
    </div>
  );
};

export default Case;
