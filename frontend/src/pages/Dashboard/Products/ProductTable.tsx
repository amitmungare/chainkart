import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { fetchProducts } from "../../../store/api";
import { useAppSelector } from "../../../store/hooks";
import { selectComapny } from "../../../store/companySlice";
import { Product } from "../../../types";

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
  const [products, setProducts] = useState<Product[]>([]);
  const company = useAppSelector(selectComapny);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchProducts(company?.email);
      setProducts(res.data.products);
    };
    getProducts();
  }, []);
  return (
    <div className="flex justify-center items-center h-[70vh] flex-col">
      <Link
        to="/dashboard/addNew"
        className="bg-indigo-600 text-white p-2 rounded-md text-sm mt-3  "
        style={{ textDecoration: "none" }}
      >
        Add new product
      </Link>
      <div className="w-full h-full p-5 flex flex-col gap-10">
        <table className="shadow-lg rounded-2xl bg-white">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-1">ID</th>
              <th>Name</th>
              <th>Price</th>

              <th>Category</th>
              <th>Subcategory</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="text-center p-2">{product._id.slice(-2)}</td>
                <td className="text-center p-2">{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">{product.category}</td>
                <td className="text-center">{product.subCategory}</td>
                <td
                  onClick={() => navigate(`/dashboard/update/${product._id}`)}
                  className="cursor-pointer text-center text-indigo-600 rounded-3xl'"
                >
                  Update
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
