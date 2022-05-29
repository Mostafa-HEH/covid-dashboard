import { Fragment } from "react";

import Sidebar from "./sidebar";
import Header from "./Header";

import classes from "./styles.module.css";

const Layouts = ({ children }) => {
  return (
    <div className={classes.app}>
      <Sidebar />
      <main className={classes.main}>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layouts;
