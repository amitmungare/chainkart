import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, img }) => {
  return (
    <div>
      <img className="mb-5 h-56 w-full object-contain" src={img} />
      <div className="flex flex-col">
        <span>{name}</span>
        <span>₹{price}</span>
        <button className="bg-indigo-600 p-2 rounded-lg text-white w-28 h-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
