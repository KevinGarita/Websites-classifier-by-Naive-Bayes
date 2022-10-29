import React from "react";

import { Column, TableWithBrowserPagination } from "react-rainbow-components";

const Count = [
  { name: "Costa Rica" },
  { name: "Nicaragua" },
  { name: "Panama" },
  { name: "Bolivia" },
  { name: "USA" },
  { name: "Mexico" },
];

export const PaginatedTable = () => {
  return (
    <TableWithBrowserPagination
      keyField="name"
      data={Count}
      variant="listview"
      pageSize={3}
    >
      <Column header="Name" field="name" />
    </TableWithBrowserPagination>
  );
};
