import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartSlice";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import { add } from ;

const ProductCard = ({ product, category, subCategory }) => {
  const dispatch = useDispatch();
  const { name, price, pImage } = product;

  let formattedPrice = new Intl.NumberFormat("en-IN").format(price);
  // console.log(formatted);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" p-2 rounded-md">
      <Link to={`/${category}/${subCategory}/${name}`}>
        <LazyLoadImage
          className="mb-5 h-56 w-full object-contain"
          src={pImage}
          loading="eager"
          effect="blur"
        />
      </Link>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>₹{formattedPrice}</span>
        <button
          onClick={() => handleAdd(product)}
          className="bg-indigo-600 p-2 rounded-lg text-white w-28 h-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
