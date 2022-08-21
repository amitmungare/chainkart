import React, { useState } from "react";
import { Mail, Visibility } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import { registerUser, selectU } from "../../store/userSlice";
import { FaLandmark } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const inititalState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  city: "",
  state: "",
  pincode: "",
  landmark: "",
  hnumber: "",
};

const UserSignUp = () => {
  const [formData, setFormData] = useState(inititalState);
  const { confirmPassword, password } = formData;
  const { loading, error } = useAppSelector(selectU);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [passShow, setPassShow] = useState(false);

  const onInputChange = (e: any) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password does not match");
    }
    dispatch(registerUser({ formData, navigate }));
    // console.log(formData);
  };
  return (
    <>
      <div className="flex gap-3 relative">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <h1 className="absolute right-10 left-6 text-2xl font-bold text-center text-[#0369a1] sm:text-3xl">
            Get started today
          </h1>
          <div className="max-w-lg mx-auto">
            <form className="p-8 mt-14 mb-0 space-y-4 rounded-lg shadow-2xl">
              <p className="text-md font-bold text-black">
                Create your new account
              </p>

              <div className="flex gap-1">
                <div>
                  <label className="text-sm font-medium">First Name</label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      name="firstname"
                      onChange={onInputChange}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Last Name</label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="name"
                      name="lastname"
                      onChange={onInputChange}
                      className="input"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>

                <div className="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={onInputChange}
                    className="input"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <Mail />
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>

                <div className="relative mt-1">
                  <input
                    type={passShow ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={onInputChange}
                    className="input"
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
                <label className="text-sm font-medium">Confirm Password</label>

                <div className="relative mt-1">
                  <input
                    type={passShow ? "text" : "password"}
                    id="password"
                    name="confirmPassword"
                    onChange={onInputChange}
                    className="input"
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
                  <label className="text-sm font-medium">
                    House No. / Flat No.
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="name"
                      name="hnumber"
                      onChange={onInputChange}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Pincode</label>

                  <div className="relative mt-1">
                    <input
                      type="number"
                      id="name"
                      name="pincode"
                      onChange={onInputChange}
                      className="input"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Landmark</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    name="landmark"
                    onChange={onInputChange}
                    className="input"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <FaLandmark />
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">City</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    name="city"
                    onChange={onInputChange}
                    className="input"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <FaCity />
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block">State</label>

                <select
                  name="state"
                  onChange={onInputChange}
                  className="mt-2 rounded-lg border-2 border-[#0369a1] p-1"
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
        {loading ? (
          <CircularProgress className="ml-20" />
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="block w-full px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
          >
            Register
          </button>
        )}

        <p className="text-sm text-center text-gray-500 mt-2">
          Already have an account?
          <Link className="m-1 text-[#0369a1] " to="/login">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default UserSignUp;
