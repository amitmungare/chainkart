import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/userSlice";

import * as api from "../../store/api";

import { Navigate } from "react-router-dom";

const CompPassword = () => {
  const user = useAppSelector(selectUser);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email,
      password,
      key: 1,
    };

    const res = await api.updateCPassword(data);

    if (res.data.success) {
      toast.success("Password updated successfully");
    }
  };

  return (
    <>
      {user && user.role === "admin" ? (
        <div className="h-screen flex justify-center items-center">
          <form className="flex flex-col gap-2">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 pr-12 text-sm  border-gray-200 rounded-lg shadow-sm"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            />
            <button onClick={handleSubmit} className="bg-slate-300 rounded-md">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>{<Navigate to="/" />}</div>
      )}
    </>
  );
};

export default CompPassword;
