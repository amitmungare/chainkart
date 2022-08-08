import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, useParams, Route } from "react-router-dom";
import Products from "../../../components/E-Commerce/Product/Products";
import { data } from "../../../data1";
import { fetchProductsByCat } from "../../../store/api";
import ProductItem from "./ProductItem";

const SubCategory = () => {
  const { category, subCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const res = Object.entries(data).filter((cat) => cat[0] === category);
  // const category1 = res[0][1];
  // const res1 = Object.entries(category1).filter(
  //   (subCat) => subCat[0] === subCategory
  // );
  // const products = res1[0][1];
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // const res = await fetchProductsByCat(subCategory);
      const res = await axios.post(
        "http://localhost:4000/api/v1/product/getBySubCat",
        {
          subCategory,
        }
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
