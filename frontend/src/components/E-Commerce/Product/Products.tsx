import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, category, subCategory }) => {
  //   console.log(category, subCatgory);
  return (
    <div className="grid grid-cols-3 p-2 mt-5 mx-10 gap-10">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          category={category}
          subCategory={subCategory}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
