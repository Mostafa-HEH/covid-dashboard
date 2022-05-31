import classes from "./styles.module.css";

const CardsHeader = ({ name, options }) => {
  return (
    <div className={classes.head}>
      <h3 className={classes.chartname}>{name}</h3>
      <select className={classes.select}>
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CardsHeader;
