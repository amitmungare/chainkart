import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, useParams, Route } from "react-router-dom";
import Products from "../../../components/E-Commerce/Product/Products";
import { fetchProductsByCat } from "../../../store/api";
import { Product } from "../../../types.";
import ProductItem from "./ProductItem";

const SubCategory = () => {
  const { category, subCategory } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/v1/product/getBySubCat",
        { subCategory }
      );
      setProducts(res.data.products);
      setLoading(false);
    };
    fetchProducts();
  }, [subCategory]);

  return (
    <>
      {loading ? (
        <CircularProgress className="ml-[12rem]" />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                category={category}
                subCategory={subCategory}
              />
            }
          />
          <Route
            path=":productName"
            element={<ProductItem products={products} />}
          />
        </Routes>
      )}
    </>
  );
};

export default SubCategory;
