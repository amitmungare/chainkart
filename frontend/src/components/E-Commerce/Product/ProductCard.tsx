import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartSlice";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Product } from "../../../types";
import { useAppDispatch } from "../../../store/hooks";
import { formatPrice } from "../../../utils";

interface IProps {
  product: Product;
  category?: string;
  subCategory?: string;
}

const ProductCard = ({ product, category, subCategory }: IProps) => {
  const dispatch = useAppDispatch();
  const { name, price, pImage } = product;

  const handleAdd = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" p-2 rounded-md">
      <Link to={`/${category}/${subCategory}/${name}`}>
        <LazyLoadImage
          className="mb-5 h-56 w-full object-contain ml-[5rem]"
          src={pImage}
          loading="eager"
          effect="blur"
        />
      </Link>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>₹{formatPrice(price)}</span>
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
