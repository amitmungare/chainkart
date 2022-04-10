import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import styled from "styled-components";
import { userColumns, userRows } from "../../productData";

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

const ProductTable = () => {
  return (
    <DataTable1>
      <DataTableTitle>
        Products
        <Link to="/dashboard/addNew" style={{ textDecoration: "none" }}>
          Add New Product
        </Link>
      </DataTableTitle>
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

export default ProductTable;
