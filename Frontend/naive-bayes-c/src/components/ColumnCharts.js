import React, { useEffect, useState } from "react"; // eslint-disable-next-line
import Chart, { BarElement } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { PaginatedTable } from "./PaginatedTable";

export const ColumnCharts = ({ datalinks, show, link }) => {
  const [showData, setshowData] = useState(false);
  const [category, setCategory] = useState(0);
  const [tableData, setTableData] = useState([]);

  const data = {
    labels: datalinks.labels,
    backgroundColor: "#f38b4a",
    borderColor: "#fffff",
    datasets: [
      {
        label: show==="word"?"Palabras Totales": "Links Totales",
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
        setshowData(true);
        setCategory(datalinks.labels[element[0].index]);
      }
    },
  };

  useEffect(() => {
    if (show === "link") {
      const newData = datalinks.dataWeb.listAnalyzedPages?.filter(
        (element) => element.classification === category
      );
      setTableData(newData);
    } else {
      const linkData = datalinks.dataWeb.infoLink
      if (linkData) {
        const newData = linkData.details?.filter(
          (element) => element.category === category && element.count > 0
        );

        setTableData(newData);
      }
    }
  }, [category]); // eslint-disable-line

  return (
    <>
      <Bar data={data} options={opciones} />
      {showData && (
        <div className="table-div">
          <PaginatedTable dataTable={[tableData, category]} show={show}/>
        </div>
      )}
    </>
  );
};
