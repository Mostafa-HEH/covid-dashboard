import { useState } from "react";
import CardsHeader from "../../../../../layouts/cards-header";
import Case from "./case";

import classes from "./styles.module.css";

const NewCases = ({ todayCases, yesterdayCases }) => {
  const [data, setData] = useState(todayCases);

  const handleChange = (e) => {
    if (e.target.value == 1) {
      setData(todayCases);
    } else {
      setData(yesterdayCases);
    }
  };

  return (
    <div className={classes.container}>
      <CardsHeader
        name="Global Cases"
        options={[
          {
            id: 1,
            name: "Today",
          },
          {
            id: 2,
            name: "Yesterday",
          },
        ]}
        handleChange={handleChange}
      />
      <div className={classes.newcases}>
        {data.map(
          ({ country, countryInfo, todayCases, cases }) =>
            todayCases !== 0 && (
              <Case
                key={country}
                flag={countryInfo.flag}
                name={country}
                total={cases}
                newcases={todayCases}
              />
            )
        )}
      </div>
    </div>
  );
};

export default NewCases;
