import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, getTotal } from "../../store/cartSlice";

import CheckoutItem from "../../components/E-Commerce/CheckoutItem";

// export const CheckoutContainer = styled.div`
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;
//   margin-bottom: 50px;
// `;

// export const CheckoutHeader = styled.div`
//   width: 100%;
//   padding: 10px 0;
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid darkgrey;
// `;

// export const HeaderBlock = styled.div`
//   text-transform: capitalize;
//   width: 23%;

//   &:last-child {
//     width: 8%;
//   }
// `;

// export const Total = styled.span`
//   margin-top: 30px;
//   margin-left: auto;
//   font-size: 36px;
// `;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const Amount = useSelector((state) => state.cart.cartTotalAmount);
  let formattedAmount = new Intl.NumberFormat("en-IN").format(Amount);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);

  // console.log(cartItems);
  return (
    <div className="w-full p-10">
      <h1 className="text-4xl text-indigo-600 font-bold">Your bag</h1>
      <div className="flex justify-between ">
        <div className="">
          {cartItems.map((cartItem) => (
            <CheckoutItem cartItem={cartItem} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
