import React from "react";
import { ColumnCharts } from "../components/ColumnCharts";

import { FormComponent } from "../components/FormComponent";
import { PaginatedTable } from "../components/PaginatedTable";
import "../css/Link.css";

export const LinkClassifierPage = () => {


  const labels = ["1", "2", "3"]
  const links  = [100, 300, 200]

  const datalinks = {labels,links}

  return (
    <div className="flex-container-2">

      <FormComponent />

      <div className="colum-chart">
          <ColumnCharts datalinks={datalinks} />
      </div>
      
      <div className="table-div">
        <PaginatedTable />
      </div>

    </div>
  );
};
