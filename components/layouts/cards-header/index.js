import classes from "./styles.module.css";

const CardsHeader = ({ name, options, handleChange }) => {
  return (
    <div className={classes.head}>
      <h3 className={classes.chartname}>{name}</h3>
      <select className={classes.select} onChange={(e) => handleChange(e)}>
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
