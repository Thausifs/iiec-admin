import React from "react";
import ReactECharts from "echarts-for-react";

let option = {
  xAxis: {
    type: "category",
    data: ["Summer", "Winter", "Total"],
  },
  yAxis: {
    type: "value",
  },
  series: [
      {
          data: [120, 200, 320],
      type: "bar",
    },
  ],
};

// option && myChart.setOption(option);

function Barcharts2() {
  return (
    <>
      <ReactECharts style={{ height: "90%", width: "100%" }} option={option} />
    </>
  );
}

export default Barcharts2;
