import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/E-Commerce/ProductCard";
import { data } from "../../data1";

const SubCategory = () => {
  const { category, subCategory } = useParams();

  const res = Object.entries(data).filter((cat) => cat[0] === category);
  const category1 = res[0][1];
  const res1 = Object.entries(category1).filter(
    (subCat) => subCat[0] === subCategory
  );
  const products = res1[0][1];
  return (
    <div className="grid grid-cols-3 p-2 mt-5 mx-10 gap-10">
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default SubCategory;
