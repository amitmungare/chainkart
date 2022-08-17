import { Mail, Visibility } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, selectU } from "../../store/userSlice";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const initialState = {
  email: "",
  password: "",
};

function UserLogin() {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const { loading, error } = useAppSelector(selectU);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [passShow, setPassShow] = useState(false);

  // useEffect(() => {
  //   error && toast.error(error);
  // }, [error]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(loginUser({ formData, navigate }));
    }
  };

  // #0E3E86
  // #89CFF0

  return (
    <div className="bg-slate-50 h-screen">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-black sm:text-3xl">
            Get started today!
          </h1>

          <form
            onSubmit={handleSubmit}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg  text-black font-bold">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-black">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onInputChange}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  required={true}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <Mail />
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-black"
              >
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type={passShow ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={onInputChange}
                  className="w-full p-4 pr-12 text-sm  border-gray-200 rounded-lg shadow-sm   "

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
              <CircularProgress className="ml-[12rem]" />
            ) : (
              <button
                type="submit"
                className="cursor-pointer block w-full px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
                disabled={!email || !password}
              >
                Sign in
              </button>
            )}

            <p className="text-sm text-center text-black">
              No account?
              <Link className="m-1 text-[#0369a1] " to="/signup">
                Sign up
              </Link>
            </p>

            <p className="text-sm text-center text-black ">
              Forgot Password?
              <Link className="m-1 text-[#0369a1] " to="/signup">
                Reset
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
