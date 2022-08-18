import React, { useState } from "react";
import { InputOutlined, Visibility } from "@mui/icons-material";

import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginCompany, selectC } from "../../store/companySlice";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const initialState = {
  email: "",
  password: "",
};

function CompanyLogin() {
  const { isLoading } = useAppSelector(selectC);

  const [formData, setFormData] = useState(initialState);
  const [passShow, setPassShow] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onInputChange = (e: any) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginCompany({ formData, navigate }));
  };
  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-[#0369a1] sm:text-3xl">
            Get started today
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p className="text-lg font-bold text-black">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Company ID
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  name="email"
                  onChange={onInputChange}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <InputOutlined />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type={passShow ? "text" : "password"}
                  name="password"
                  onChange={onInputChange}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <Visibility
                    onClick={() => setPassShow(!passShow)}
                    className="cursor-pointer"
                  />
                </span>
              </div>
            </div>

            {isLoading ? (
              <CircularProgress />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="block w-full px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
              >
                Sign in
              </button>
            )}

            <p className="text-sm text-center text-gray-500">
              No account?
              <NavLink className="m-1 text-[#0369a1]" to="/cregister">
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default CompanyLogin;
