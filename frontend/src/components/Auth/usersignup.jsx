import axios from "axios";
import React, { useState } from "react";
import { Google, Mail, Visibility } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/userSlice";
import { FaLandmark } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

const UserSignUp = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const [hno, setHno] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");
  const [state, setState] = useState("");

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
          hnumber: hno,
          pincode: pin,
          city: city,
          state: state,
          landmark: land,
        }
      );

      // console.log(data.token);

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

    // console.log(user);
  };
  return (
    <>
      <div className="flex gap-3 relative">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-center ml-auto text-indigo-600 sm:text-3xl">
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
            </form>
          </div>
        </div>

        <div className="mt-16 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
              <div className="flex gap-1">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    House No. / Flat No.
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setHno(e.target.value)}
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter house no. / flat no."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Pincode
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="number"
                      id="name"
                      onChange={(e) => setPin(e.target.value)}
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Landmark
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => setLand(e.target.value)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter landmark"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <FaLandmark />
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  City
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="password"
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter city"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <FaCity />
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium block">
                  State
                </label>

                <select
                  onChange={(e) => setState(e.target.value.toString())}
                  className="mt-2 border-2 rounded-lg border-indigo-700 p-1"
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>

                <div className="relative mt-1"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-[670px]">
        <button
          type="submit"
          onClick={handleSubmit}
          className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
        >
          Create your Account
        </button>

        <p className="text-sm text-center text-gray-500 mt-2">
          Already have an account?
          <Link className="m-1" to="/login">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default UserSignUp;
