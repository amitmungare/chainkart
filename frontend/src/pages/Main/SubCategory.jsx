import React from "react";
import { Routes, useParams, Route } from "react-router-dom";
// import ProductCard from "../../components/E-Commerce/ProductCard";
import Products from "../../components/E-Commerce/Products";
import { data } from "../../data1";
import ProductItem from "./ProductItem";

const SubCategory = () => {
  const { category, subCategory } = useParams();

  const res = Object.entries(data).filter((cat) => cat[0] === category);
  const category1 = res[0][1];
  const res1 = Object.entries(category1).filter(
    (subCat) => subCat[0] === subCategory
  );
  const products = res1[0][1];
  return (
    <>
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
    </>
  );
};

export default SubCategory;
