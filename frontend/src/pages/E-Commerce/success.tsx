import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { createOrder } from "../../store/api";
import { useAppSelector } from "../../store/hooks";

const Success = () => {
  // const user = useSelector((state) => state?.user?.user);
  const user = useAppSelector((state) => state.user.user);
  const cartItems = useAppSelector((state) => state?.cart?.cartItems);
  const Amount = useAppSelector((state) => state?.cart?.cartTotalAmount);
  const navigate = useNavigate();

  const data = {
    orderItems: cartItems,
    totalPrice: Amount,
    user,
  };

  useEffect(() => {
    const createO = async () => {
      const res = await createOrder(data);
    };
    createO();
    // setTimeout(() => {
    //   navigate("/");
    // }, 5000);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2 bg-emerald-100">
      <div className="bg-white shadow-2xl p-[5rem] rounded-lg ">
        <div className="flex flex-col gap-3">
          <h1>
            Payment{" "}
            <span className="text-emerald-700 font-bold">Successfull!</span>
          </h1>
          <NavLink
            to="/"
            className="bg-teal-500 text-center text-white p-2 rounded-md"
          >
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Success;
