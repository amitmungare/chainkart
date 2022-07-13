import { Mail, Visibility } from "@mui/icons-material";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/userSlice";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { dispatch, selectU } from "../../store/store";

const initialState = {
  email: "",
  password: "",
};

function UserLogin() {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  // const { loading, error } = useSelector((state) => ({ ...state.user }));
  const { error, loading } = useSelector(selectU);
  const navigate = useNavigate();

  const [passShow, setPassShow] = useState(false);

  // useEffect(() => {
  //   error && toast.error(error);
  // }, [error]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (email && password) {
      console.log(formData);
      dispatch(loginUser({ formData, navigate }));
    }
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Get started today!
          </h1>

          <form
            onSubmit={handleSubmit}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg font-medium">Sign in to your account</p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onInputChange}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  required={true}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <Mail />
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
                  id="password"
                  onChange={onInputChange}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm   "
                  placeholder="Enter password"
                  // required={true}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <Visibility
                    onClick={() => setPassShow(!passShow)}
                    className="cursor-pointer"
                  />
                </span>
              </div>
            </div>

            {loading ? (
              <CircularProgress className="ml-[6rem]" />
            ) : (
              <button
                type="submit"
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
                disabled={!email || !password}
              >
                Sign in
              </button>
            )}

            <p className="text-sm text-center text-gray-500">
              No account?
              <Link className="m-1 text-indigo-600" to="/signup">
                Sign up
              </Link>
            </p>

            <p className="text-sm text-center text-gray-500">
              Forgot Password?
              <Link className="m-1 text-indigo-600" to="/signup">
                Reset
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserLogin;