import React from "react";
import { NavLink } from "react-router-dom";

const Success = () => {
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
