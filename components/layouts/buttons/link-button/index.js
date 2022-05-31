import ArrowRightIcon from "../../../icons/arrow-right";

import classes from "./styles.module.css";

const LinkButton = ({ children, color }) => {
  return (
    <a
      href="#"
      className={`${classes.button} ${color === "blue" ? classes.blue : null} ${
        color === "green" ? classes.green : null
      }`}
    >
      <span>{children}</span>
      <span className={classes.icon}>
        <ArrowRightIcon />
      </span>
    </a>
  );
};

export default LinkButton;
