import React from 'react'
import { Pie } from "react-chartjs-2";// eslint-disable-next-line
import Chart from "chart.js/auto";

export const PieChart = () => {
  const data = {
    labels: ["Uno", "Dos"],
    backgroundColor: "#f38b4a",
    borderColor: "#fffff",
    datasets: [
      {
        backgroundColor: ["#56d798", "#ff8397"],
        borderColor: "black",
        borderWidth: "2",
        hoverBackgroundColor: ["#f38b4a"],
        data: [100, 300],
      },
    ],
  };
  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    onClick: function(evt, element) {
      if(element.length > 0) {
          console.log(element[0].index)
          // you can also get dataset of your selected element
          console.log(data.datasets[element[0].datasetIndex])
      }}
  };
  return <Pie data={data} options={opciones} />;
}
