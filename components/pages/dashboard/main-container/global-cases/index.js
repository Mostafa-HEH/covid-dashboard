import React from "react";

import CardsHeader from "../../../../layouts/cards-header";
import Charts from "./chart";

import classes from "./styles.module.css";

const GlobalCases = () => {
  return (
    <div className={classes.container}>
      <CardsHeader
        name="Global Cases"
        options={[
          {
            id: 1,
            name: "This year",
          },
          {
            id: 2,
            name: "2021",
          },
          {
            id: 3,
            name: "2020",
          },
          {
            id: 4,
            name: "2019",
          },
        ]}
      />
      <Charts />
    </div>
  );
};

export default GlobalCases;
