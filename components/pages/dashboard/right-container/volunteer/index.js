import LinkButton from "../../../../layouts/buttons/link-button";

import classes from "./styles.module.css";

const Volunteer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgcontainer}>
        <img
          src="/images/ismael-paramo-tnVdQGmWtb0-unsplash.jpg"
          alt="Volunteer"
        />
        <div className={classes.tag}>Volunteer</div>
      </div>
      <div className={classes.txtcontainer}>
        <h3 className={classes.header}>
          Register yourself as a volunteer against Covid-19
        </h3>
        <LinkButton color="blue">Register</LinkButton>
      </div>
    </div>
  );
};

export default Volunteer;
