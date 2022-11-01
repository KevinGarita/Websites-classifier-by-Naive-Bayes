import React from "react"; // eslint-disable-next-line
import Chart, { BarElement } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const ColumnCharts = () => {

  const data = {
    labels: ["Uno", "Dos", "Tres"],
    backgroundColor: "#f38b4a",
    borderColor: "#fffff",
    datasets: [
      {
        label: "Links Totales",
        backgroundColor: ["#56d798"],
        borderColor: "black",
        borderWidth: "2",
        Color: "blue",
        hoverBackgroundColor: ["#E1D625"],
        data: [100, 300, 200],
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    onClick: function(evt, element) {
      if(element.length > 0) {
          console.log(element,element[0].index)
          // you can also get dataset of your selected element
          console.log(data.datasets[element[0].datasetIndex])
      }}
  };

  return (
    <Bar
      data={data}
      options={opciones}
    
    />
  );
};
