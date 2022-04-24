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
  let sCharge = Amount > 500 ? 0 : 100;
  let formatteTotaldAmount = new Intl.NumberFormat("en-IN").format(
    Amount + sCharge
  );
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
      {cartItems.length === 0 ? (
        <div className="text-center text-2xl text-gray-500 h-[70vh] flex justify-center items-center">
          <span> Your cart is empty</span>
        </div>
      ) : (
        <>
          <h1 className="text-4xl text-indigo-600 font-bold">Your bag</h1>
          <div className="flex justify-between gap-5 ">
            <div className="flex-[2] max-w-2xl ml-4 mt-4">
              {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} />
              ))}
            </div>
            <div className="bg-[#f0f8ff] w-[300px] max-h-[280px] p-7 relative mr-10 mt-4 rounded-2xl">
              <span className="font-bold text-xl">Order Summary</span>
              <div className="flex justify-between mt-6">
                <span>Subtotal</span>
                <span>₹{formattedAmount}</span>
              </div>

              <div className="flex justify-between mt-2">
                <span>Shipping Charges</span>
                <span>₹{Amount > 500 ? 0 : 100}</span>
              </div>

              <div className="flex justify-between mt-14">
                <span>Total Price</span>
                <span>₹{formatteTotaldAmount}</span>
              </div>
              <button className=" bg-indigo-600 text-white p-2 absolute top-[242px] w-full left-0 ">
                Proceed to checkout
              </button>
              <span className="absolute top-[300px] left-0 text-gray-600 text-sm">
                *Shipping charges of ₹100 will be levied if cart value is below
                ₹500.
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
