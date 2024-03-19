import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "fullName", headerName: "Full name", width: 260, editable: true},
  { field: "status", headerName: "Status", width: 140, editable: true},
  { field: "date", headerName: "Date", width: 250, editable: true},
];

const DataTable = ({ records }) => {
  const rows = records.map((record, index) => ({
    id: index + 1,
    fullName: record.fullName,
    status: record.status,
    date: record.date
  }));

  return (
    <div style={{ height: 350, width: "60%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5} 
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
