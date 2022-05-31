import CardsHeader from "../../../../../layouts/cards-header";
import Case from "./case";

import classes from "./styles.module.css";

const NewCases = () => {
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
      />
      <div className={classes.newcases}>
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </div>
  );
};

export default NewCases;
