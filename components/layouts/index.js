import { Fragment } from "react";

import Sidebar from "./sidebar";

import classes from "./styles.module.css";

const Layouts = ({ children }) => {
  return (
    <div className={classes.app}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layouts;
