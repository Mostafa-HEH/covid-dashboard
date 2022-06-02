import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Charts = () => {
  const data = {
    series: [
      {
        name: "Recovered",
        data: [31, 40, 28, 51, 200, 109, 55, 22, 33, 77, 12, 30],
      },
      {
        name: "Death",
        data: [12, 30, 55, 40, 90, 7, 20, 11, 60, 100, 99, 95],
      },
    ],

    options: {
      chart: {
        height: 450,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        x: { show: false },
      },
      colors: ["#0D46C1", "#6FD1F6"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };

  return (
    <div className="mixed-chart">
      <ApexCharts
        options={data.options}
        series={data.series}
        type="area"
        height={400}
      />
    </div>
  );
};

export default Charts;
