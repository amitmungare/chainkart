import { Google, Mail, Visibility } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../store/userSlice";

function UserLogin() {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passShow, setPassShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user;
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/login", {
        email: emailRef.current.value,
        password: passRef.current.value,
      });
      // console.log(data);
      const token = data.token;
      user = data.user;
      user = { ...user, token };

      dispatch(registerUser(user));
    } catch (err) {
      console.log(err);
    }

    if (user) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Get started today!
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p className="text-lg font-medium">Sign in to your account</p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
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
                  ref={passRef}
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <Visibility
                    onClick={() => setPassShow(!passShow)}
                    className="cursor-pointer"
                  />
                </span>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Sign in
            </button>

            <button className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
              <div className="flex gap-3 justify-center items-center">
                <Google />
                Log in with Google
              </div>
            </button>

            <p className="text-sm text-center text-gray-500">
              No account?
              <Link className="m-1" to="/signup">
                Sign up
              </Link>
            </p>

            <p className="text-sm text-center text-gray-500">
              Forgot Password?
              <Link className="m-1" to="/signup">
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
