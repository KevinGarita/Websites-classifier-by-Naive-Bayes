import { NavLink } from "react-router-dom";
import { ColumnCharts } from "../components/ColumnCharts";
import { PieChart } from "../components/PieChart";
import "../css/Classifier.css";

export const ClassifierPage = () => {
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
          <PieChart />
        </div>
        <div className="colum-chart">
          <ColumnCharts />
        </div>
      </div>
    </div>
  );
};
