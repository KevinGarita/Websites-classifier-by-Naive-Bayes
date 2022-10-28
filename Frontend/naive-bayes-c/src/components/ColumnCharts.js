import React from "react";
import { Bar } from "react-chartjs-2";// eslint-disable-next-line
import Chart from "chart.js/auto";
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
  };
  return <Bar data={data} options={opciones} />;
};
