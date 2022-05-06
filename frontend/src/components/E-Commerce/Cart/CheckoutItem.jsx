import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../store/cartSlice";

const CheckoutItem = ({ cartItem }) => {
  const { price, cartQuantity, img, name } = cartItem;
  // console.log(cartItem);
  let formattedPrice = new Intl.NumberFormat("en-IN").format(cartItem.price);
  let formattedTotalAmount = new Intl.NumberFormat("en-IN").format(
    cartQuantity * price
  );

  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem.name));
  };

  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="flex gap-6 border-b-2 p-5">
      <div>
        <img className="h-[150px] w-[150px]" src={img} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span>₹{formattedPrice}</span>
        </div>

        <div className="w-16 border-2 p-1 flex justify-center gap-2">
          <span
            className="cursor-pointer"
            onClick={() => handleDecrease(cartItem)}
          >
            &lt;
          </span>
          <span>{cartQuantity}</span>
          <span
            className="cursor-pointer"
            onClick={() => handleIncrease(cartItem)}
          >
            &gt;
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between ml-auto">
        <span className="cursor-pointer" onClick={() => handleRemove(cartItem)}>
          &#10005;
        </span>
        <span>Total: ₹{formattedTotalAmount}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
