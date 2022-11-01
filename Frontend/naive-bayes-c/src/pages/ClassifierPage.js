import { NavLink } from "react-router-dom";
import { ColumnCharts } from "../components/ColumnCharts";
import { PaginatedTable } from "../components/PaginatedTable";
import { PieChart } from "../components/PieChart";
import "../css/Classifier.css";

export const ClassifierPage = () => {

  const labels = ["One", "Two", "Three"]
  const links  = [100, 300, 200]

  const datalinks = {labels,links}

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
