import axios from "axios";
import React, { useState } from "react";
import { Google, Mail, Visibility } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/userSlice";

const UserSignUp = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passShow, setPassShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user;

    if (pass !== cPass) {
      alert("Passwords do not match");
    }
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/register",
        {
          firstname: fName,
          lastname: lName,
          email: email,
          password: pass,
        }
      );

      // const token = data.token;
      user = data.user;
      // user = { ...user, token };

      dispatch(registerUser(user));
    } catch (err) {
      console.log(err);
    }

    if (user) {
      navigate("/");
    }

    // console.log(user);
  };
  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p className="text-lg font-medium">Create your new account</p>

            <div className="flex gap-1">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  First Name
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setFName(e.target.value)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter first name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Last Name
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setLName(e.target.value)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  id="password"
                  onChange={(e) => setPass(e.target.value)}
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

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Confirm Password
              </label>

              <div className="relative mt-1">
                <input
                  type={passShow ? "text" : "password"}
                  id="password"
                  onChange={(e) => setCPass(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Confirm password"
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
              Create your Account
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?
              <Link className="m-1" to="/login">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
