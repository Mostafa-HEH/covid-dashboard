import { Fragment } from "react";

import DashboardComponents from "../components/pages/dashboard";

const Dashboard = ({ todayCases, yesterdayCases }) => {
  return (
    <DashboardComponents
      todayCases={todayCases}
      yesterdayCases={yesterdayCases}
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

  return {
    props: {
      todayCases,
      yesterdayCases,
    },
  };
}

export default Dashboard;
