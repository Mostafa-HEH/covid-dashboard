import classes from "./styles.module.css";

const Tap = ({ name, icon, active, tabName, setActiveTab }) => {
  return (
    <li
      className={`${classes.tap} ${active ? classes.activetap : null}`}
      onClick={() => setActiveTab(tabName)}
    >
      <span className={classes.icon}>{icon}</span>
      <span className={classes.name}>{name}</span>
    </li>
  );
};

export default Tap;
