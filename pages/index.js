import { Fragment } from "react";

import DashboardComponents from "../components/pages/dashboard";

const Dashboard = ({ todayCases, yesterdayCases, topEffected }) => {
  return (
    <DashboardComponents
      todayCases={todayCases}
      yesterdayCases={yesterdayCases}
      topEffected={topEffected}
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
      data.filter((country, id) => {
        // id < 22 return top 20 country
        if (country.country !== "Israel") return country;
      })
    );

  return {
    props: {
      todayCases,
      yesterdayCases,
      topEffected,
    },
  };
}

export default Dashboard;
