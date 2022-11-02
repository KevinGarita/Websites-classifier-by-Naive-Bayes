import React, { useState } from "react"; // eslint-disable-next-line
import Chart, { BarElement } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { PaginatedTable } from "./PaginatedTable";

export const ColumnCharts = ({ datalinks }) => {
  const [showData, setshowData] = useState(false);
  const  [category, setCategory] = useState(0)

  const data = {
    labels: datalinks.labels,
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
        data: datalinks.links,
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    onClick: function (evt, element) {
      if (element.length > 0) {
        console.log(element[0].index);
        setshowData(true);
        setCategory(element[0].index+1)
      }
    },
  };

  return (
    <>
      <Bar data={data} options={opciones} />
      {showData && (
        <div className="table-div">
          <PaginatedTable dataTable={[datalinks.dataTable,category]}/>
        </div>
      )}
    </>
  );
};
