
import { Column, TableWithBrowserPagination } from "react-rainbow-components";

export const PaginatedTable = ({dataTable, show}) => {

  if (show==="word") {
    return (
      <TableWithBrowserPagination
        keyField={show}
        data={dataTable[0]}
        variant="listview"
        pageSize={3}
      >
        <Column header={dataTable[1]} field={show} />
        <Column header={"Count"} field={"count"} />
      </TableWithBrowserPagination>
    );
  } else {
    return (
      <TableWithBrowserPagination
        keyField={show}
        data={dataTable[0]}
        variant="listview"
        pageSize={3}
      >
        <Column header={dataTable[1]} field={show} />
      </TableWithBrowserPagination>
    );
  }
  
};
