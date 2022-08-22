import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../store/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import { CartItem } from "../../../types";
import { formatPrice } from "../../../utils";

interface IProps {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: IProps) => {
  const { price, cartQuantity, pImage, name } = cartItem;

  const dispatch = useAppDispatch();

  const handleRemove = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem.name));
  };

  const handleDecrease = (cartItem: CartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncrease = (cartItem: CartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="flex gap-6 border-b-2 p-5">
      <div>
        <img className="h-[170px] w-[120px]" src={pImage} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span>₹{formatPrice(price)}</span>
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
        <span>Total: ₹{formatPrice(cartQuantity * price)}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
