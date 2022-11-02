import React from 'react'
import { Pie } from "react-chartjs-2";// eslint-disable-next-line
import Chart from "chart.js/auto";

export const PieChart = ({datalinksPie}) => {
  const data = {
    labels: datalinksPie.labelsPie,
    backgroundColor: "#f38b4a",
    borderColor: "#fffff",
    datasets: [
      {
        backgroundColor: ["#56d798", "#ff8397"],
        borderColor: "black",
        borderWidth: "2",
        hoverBackgroundColor: ["#f38b4a"],
        data:  datalinksPie.linksPie,
      },
    ],
  };
  const opciones = {
    maintainAspectRatio: false,
    responsive: true
  };
  return <Pie data={data} options={opciones} />;
}
