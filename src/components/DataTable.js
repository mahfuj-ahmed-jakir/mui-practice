import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows, pagination } from "../data/data";

export default function DataTable() {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ height: 400, width: "60%", margin: "20px" }}>
      <input style={{ margin: "10px 0", padding: "5px 10px" }} type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      <DataGrid
        rows={rows.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          } else if (val.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          } else {
            return "";
          }
        })}
        columns={columns}
        pageSize={pagination.pageSize}
        rowsPerPageOptions={pagination.rowsPerPageOptions}
        checkboxSelection
      />
    </div>
  );
}
