import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, category, subCategory }) => {
  //   console.log(category, subCatgory);
  return (
    <div className="grid grid-cols-3 p-2 mt-5 mx-10 gap-10">
      {products.map((product) => (
        <ProductCard
          // name={product.name}
          // price={product.price}
          // img={product.img}
          // category={category}
          // subCategory={subCategory}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
