import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addToCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../../store/cartSlice";

// export const CheckoutItemContainer = styled.div`
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;
// `;

// export const ImageContainer = styled.div`
//   width: 23%;
//   padding-right: 15px;

//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const BaseSpan = styled.span`
//   width: 23%;
// `;

// export const Quantity = styled(BaseSpan)`
//   display: flex;
// `;

// export const Arrow = styled.div`
//   cursor: pointer;
// `;

// export const Value = styled.span`
//   margin: 0 10px;
// `;

// export const RemoveButton = styled.div`
//   padding-left: 12px;
//   cursor: pointer;
// `;

// export const Total = styled.span`
//   margin-top: 30px;
//   margin-left: auto;
//   font-size: 36px;
// `;

const CheckoutItem = ({ cartItem }) => {
  // console.log(cartItem);
  let formattedPrice = new Intl.NumberFormat("en-IN").format(cartItem.price);

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
    <div className="flex justify-between border-b-2 p-5">
      <div>
        <img className="h-[100px] w-[100px]" src={cartItem.img} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span>{cartItem.name}</span>
          <span>₹{formattedPrice}</span>
        </div>

        <div className="border-2 p-1 inline-block ">
          <span>&lt;</span>
          <span>{cartItem.cartQuantity}</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <span>&#10005;</span>
        <span>total:₹</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
