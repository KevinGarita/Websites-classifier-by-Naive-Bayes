import React, { useEffect, useState } from "react";

import { Column, TableWithBrowserPagination } from "react-rainbow-components";

export const PaginatedTable = ({dataTable}) => {
  const [dataInit, setdataInit] = useState([])

  useEffect(() => {
    const dataVar = [];

    console.log(dataTable)

    for (const i in dataTable[0]) {
      if (dataTable[0][i].c === dataTable[1]) {
        dataVar.push(dataTable[0][i])
      }
    }
    setdataInit(dataVar)
  }, [dataTable]); //eslint-disable-line
  

  return (
    <TableWithBrowserPagination
      keyField="name"
      data={dataInit}
      variant="listview"
      pageSize={3}
    >
      <Column header={dataTable[1]} field="name" />
    </TableWithBrowserPagination>
  );
};
