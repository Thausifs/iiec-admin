
import React from "react";
import ReactECharts from "echarts-for-react";




let option = {
  tooltip: {
    trigger: "item",
  },
  // legend: {
  //   top: "5%",
  //   left: "center",
  // },
  color: ["#A80808", "#3064AD"],
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,

      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Online" },
        { value: 735, name: "Walk In" },
        // { value: 580, name: "Email" },
        // { value: 484, name: "Union Ads" },
        // { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

// option && myChart.setOption(option);





function Charts() {
    return (
      <>
        <ReactECharts style={{height:'60%',width:'100%'}} option={option} />
      </>
    );
}

export default Charts