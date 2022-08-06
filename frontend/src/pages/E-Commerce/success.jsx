import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { createOrder } from "../../store/api";

const Success = () => {
  const user = useSelector((state) => state?.user?.user);
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const Amount = useSelector((state) => state?.cart?.cartTotalAmount);

  const data = {
    orderItems: cartItems,
    totalPrice: Amount,
    user,
  };

  useEffect(() => {
    const createO = async () => {
      const res = await createOrder(data);
      console.log(res.data);
    };
    createO();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2">
      <h1>Paymeny Successfull!</h1>
      <NavLink to="/" className="bg-blue-600 text-white p-2 rounded-md">
        Go to Home
      </NavLink>
    </div>
  );
};

export default Success;
