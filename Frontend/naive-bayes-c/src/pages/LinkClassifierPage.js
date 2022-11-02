import React from "react";
import { ColumnCharts } from "../components/ColumnCharts";

import { FormComponent } from "../components/FormComponent";
import "../css/Link.css";

export const LinkClassifierPage = () => {


  const labels = ["1", "2", "3"]
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
  return (
    <div className="flex-container-2">

      <FormComponent />

      <div className="colum-chart">
          <ColumnCharts datalinks={datalinks} />
      </div>
    
    </div>
  );
};
