import React from "react";
import ReactECharts from "echarts-for-react";



let option = {
  xAxis: {
    type: "category",
    data: ["Week1", "Week2", "Week3", "Week4", "Total"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 250],
      type: "bar",
    },
  ],
};

// option && myChart.setOption(option);

function Barcharts() {
  return (
    <>
      <ReactECharts style={{ height: "100%", width: "100%" }} option={option} />
    </>
  );
}

export default Barcharts;