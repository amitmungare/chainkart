import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import styled from "styled-components";
import { userColumns, userRows } from "../../../productData";
import { fetchProducts } from "../../../store/api";
import { useSelector } from "react-redux";

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
  const [products, setProducts] = useState([]);
  const company = useSelector((state) => state.company.company);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchProducts(company.email);
      setProducts(res.data.products);
    };
    getProducts();
  }, []);
  return (
    <DataTable1>
      <DataTableTitle>
        Products
        <Link
          to="/dashboard/addNew"
          className="bg-[#0369a1] text-white p-2 rounded-md text-sm"
          style={{ textDecoration: "none" }}
        >
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
