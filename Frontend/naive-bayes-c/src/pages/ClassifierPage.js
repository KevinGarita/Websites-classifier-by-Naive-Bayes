import { NavLink } from "react-router-dom";
import { ColumnCharts } from "../components/ColumnCharts";
import { PieChart } from "../components/PieChart";
import "../css/Classifier.css";

export const ClassifierPage = () => {

  const labels = ["One", "Two", "Three"]
  const links  = [100, 300, 200]
  const dataTable = [
    { name: "Costa Rica", c:1 },
    { name: "Nicaragua",c:2 },
    { name: "Panama",c:3 },
    { name: "Bolivia",c:2 },
    { name: "USA" ,c:1},
    { name: "Mexico",c:2 },
  ];
  const datalinks = {labels,links,dataTable}



  const labelsPie = ["Une", "Dou"]
  const linksPie  = [100, 300]

  const datalinksPie = {labelsPie,linksPie}

  return (
    <div className="flex-container-2">
      <div className="flex-container">
        <div>
          <NavLink to="/LinkClassifier">
            <button className="btn-2">Link Classifier</button>
          </NavLink>
        </div>
      </div>
      <div className="flex-container">
        <div className="pie-chart">
          <PieChart datalinksPie={datalinksPie}/>
        </div>
        <div className="colum-chart">
          <ColumnCharts datalinks={datalinks} />
        </div>
      </div>
    </div>
  );
};
