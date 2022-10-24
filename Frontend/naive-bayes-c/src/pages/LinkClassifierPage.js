import React from "react";
import { ColumnCharts } from "../components/ColumnCharts";

import { FormComponent } from "../components/FormComponent";
import "../css/Link.css";

export const LinkClassifierPage = () => {
  return (
    <div className="flex-container-2">
      <FormComponent />

      <div className="colum-chart">
        <ColumnCharts />
      </div>
    </div>
  );
};
