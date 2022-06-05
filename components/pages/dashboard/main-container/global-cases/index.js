import React, { useState } from "react";

import CardsHeader from "../../../../layouts/cards-header";
import Charts from "./chart";

import classes from "./styles.module.css";

const GlobalCases = ({ allGlobalDays }) => {
  const [year, setYear] = useState(22);

  const handleChange = (e) => {
    switch (e.target.value) {
      case "1":
        setYear(22);
        break;
      case "2":
        setYear(21);
        break;
      case "3":
        setYear(20);
        break;
      case "4":
        setYear(19);
        break;

      default:
        setYear(22);
        break;
    }
  };

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
        handleChange={handleChange}
      />
      <Charts allGlobalDays={allGlobalDays} year={year} />
    </div>
  );
};

export default GlobalCases;
