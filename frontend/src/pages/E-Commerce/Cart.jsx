import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotal } from "../../store/cartSlice";

import CheckoutItem from "../../components/E-Commerce/Cart/CheckoutItem";

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
        <div className="text-center text-2xl text-[#3C4048] h-[70vh] flex justify-center items-center">
          <span> Your cart is empty</span>
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-indigo-600 font-bold">Your Cart</h1>
          <div className="flex justify-between gap-5 ">
            <div className="flex-[2] max-w-2xl ml-4 mt-4">
              {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} />
              ))}
            </div>
            <div className="bg-[#f0f8ff] w-[400px] max-h-[300px] relative mr-10 mt-4 rounded-2xl">
              <div className="p-7">
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
              </div>
              <button className=" bg-[#0E3995] text-white p-2 w-full mt-6 ">
                Proceed to checkout
              </button>
              <span className=" text-[#3B434E] text-sm mt-7">
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
