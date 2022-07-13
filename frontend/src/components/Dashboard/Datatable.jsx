import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import styled from "styled-components";
import { userColumns, userRows } from "../../data";

const DataTable1 = styled.div`
  height: 600px;
  padding: 20px;
`;

const DataTableTitle = styled.div`
  width: 100%;
  font-size: 24px;
  color: gray;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Datatable = () => {
  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         // <CellAction>
  //         //   <Link to="/users/test" style={{ textDecoration: "none" }}>
  //         //     <ViewButton>View</ViewButton>
  //         //   </Link>
  //         //   <DeleteButton
  //         //   //   onClick={() => handleDelete(params.row.id)}
  //         //   >
  //         //     Delete
  //         //   </DeleteButton>
  //         // </CellAction>
  //       );
  //     },
  //   },
  // ];

  return (
    <DataTable1>
      <DataTableTitle>Users</DataTableTitle>
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </DataTable1>
  );
};

export default Datatable;
