import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Charts = ({ allGlobalDays, year }) => {
  const showData = (show) => {
    let months = {
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    };

    for (let i = 1; i < 32; i++) {
      months.jan += allGlobalDays[show][`1/${i}/${year}`] || 0;
      months.feb += allGlobalDays[show][`2/${i}/${year}`] || 0;
      months.mar += allGlobalDays[show][`3/${i}/${year}`] || 0;
      months.apr += allGlobalDays[show][`4/${i}/${year}`] || 0;
      months.may += allGlobalDays[show][`5/${i}/${year}`] || 0;
      months.jun += allGlobalDays[show][`6/${i}/${year}`] || 0;
      months.jul += allGlobalDays[show][`7/${i}/${year}`] || 0;
      months.aug += allGlobalDays[show][`8/${i}/${year}`] || 0;
      months.sep += allGlobalDays[show][`9/${i}/${year}`] || 0;
      months.oct += allGlobalDays[show][`10/${i}/${year}`] || 0;
      months.nov += allGlobalDays[show][`11/${i}/${year}`] || 0;
      months.dec += allGlobalDays[show][`12/${i}/${year}`] || 0;
    }

    return { ...months };
  };

  const deaths = showData("deaths");
  const recovered = showData("recovered");

  const data = {
    series: [
      {
        name: "Recovered",
        data: [
          recovered.jan,
          recovered.feb,
          recovered.mar,
          recovered.apr,
          recovered.may,
          recovered.jun,
          recovered.jul,
          recovered.aug,
          recovered.sep,
          recovered.oct,
          recovered.nov,
          recovered.dec,
        ],
      },
      {
        name: "Death",
        data: [
          deaths.jan,
          deaths.feb,
          deaths.mar,
          deaths.apr,
          deaths.may,
          deaths.jun,
          deaths.jul,
          deaths.aug,
          deaths.sep,
          deaths.oct,
          deaths.nov,
          deaths.dec,
        ],
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
