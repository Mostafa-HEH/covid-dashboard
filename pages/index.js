import { Fragment } from "react";

import DashboardComponents from "../components/pages/dashboard";

const Dashboard = ({
  todayCases,
  yesterdayCases,
  topEffected,
  allGlobalDays,
}) => {
  return (
    <DashboardComponents
      todayCases={todayCases}
      yesterdayCases={yesterdayCases}
      topEffected={topEffected}
      allGlobalDays={allGlobalDays}
    />
  );
};

export async function getStaticProps(context) {
  const todayCases = await fetch(
    "https://disease.sh/v3/covid-19/countries?sort=todayCases"
  )
    .then((res) => res.json())
    .then((data) => data);

  const yesterdayCases = await fetch(
    "https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases"
  )
    .then((res) => res.json())
    .then((data) => data);

  const topEffected = await fetch(
    "https://disease.sh/v3/covid-19/countries?sort=cases"
  )
    .then((res) => res.json())
    .then((data) =>
      data.filter(({ country }) => {
        if (country !== "Israel") return country;
      })
    );

  const allGlobalDays = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  )
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      todayCases,
      yesterdayCases,
      topEffected,
      allGlobalDays,
    },
  };
}

export default Dashboard;
