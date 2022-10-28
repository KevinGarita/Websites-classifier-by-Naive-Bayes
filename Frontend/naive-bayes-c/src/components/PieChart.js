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
  };
  return <Pie data={data} options={opciones} />;
}
