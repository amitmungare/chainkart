import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState, lazy, Suspense } from "react";
import { useEffect } from "react";
import { Routes, useParams, Route } from "react-router-dom";
import { Product } from "../../../types";

const Products = lazy(
  () => import("../../../components/E-Commerce/Product/Products")
);
const ProductItem = lazy(() => import("./ProductItem"));

const SubCategory = () => {
  const { category, subCategory } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const res = await axios.post(
        "https://chainkartblockchainstore.herokuapp.com/api/v1/product/getBySubCat",
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
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      )}
    </>
  );
};

export default SubCategory;
