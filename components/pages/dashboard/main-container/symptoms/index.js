import classes from "./styles.module.css";

const Symptoms = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Symptoms of Covid-19</h2>
      <p className={classes.subheading}>
        People with COVID-19 have had a wide range of symptoms reported, ranging
        from mild symptoms to severe illness.
      </p>
    </div>
  );
};

export default Symptoms;
