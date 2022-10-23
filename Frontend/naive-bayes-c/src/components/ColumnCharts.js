import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

export const ColumnCharts = () => {
  const data = {
    labels: ["Uno", "Dos", "Tres"],
    backgroundColor:'#f38b4a',
    borderColor : "#fffff",
    datasets: [
      {
        label: 'Links Totales', 
        backgroundColor: [
          "#f38b4a"
        ],
        borderColor : "black",
        borderWidth : "3",
        Color:'blue',
        borderwidth: 1,
        hoverBackgroundColor: [
          "#56d798",
          "#ff8397",
          "#6970d5" 
        ],
        hoverBorderColor : "#000",
        data: [100, 300, 200],
      },
    ]
  };
  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
      <Bar data={data} options={opciones} />
  );
};
