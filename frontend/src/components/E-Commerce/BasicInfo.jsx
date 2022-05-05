import axios, { Axios } from "axios";

import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../store/userSlice";

const BasicInfo = () => {
  const { user } = useSelector((state) => ({ ...state.user }));
  const {
    email,
    firstname,
    lastname,
    hnumber,
    city,
    landmark,
    state,
    pincode,
    token,
  } = user;

  const dispatch = useDispatch();

  const [uFirstName, setUFirstName] = useState(firstname);
  const [uLastName, setULastName] = useState(lastname);
  const [uEmail, setUEmail] = useState(email);
  const formData = {
    firstname: uFirstName,
    lastname: uLastName,
    email: uEmail,
    hnumber,
    city,
    landmark,
    state,
    pincode,
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    dispatch(updateUserProfile({ formData, toast, token }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between ml-12">
      <form
        className="p-5 flex flex-col gap-4"
        style={{ boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)" }}
      >
        <div className="flex gap-2 items-center">
          <label>First Name </label>
          <input
            onChange={(e) => setUFirstName(e.target.value)}
            placeholder={firstname}
            className="border-2 border-indigo-600 rounded-lg w-60"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Last Name </label>
          <input
            onChange={(e) => setULastName(e.target.value)}
            placeholder={lastname}
            className="border-2 border-indigo-600 rounded-lg w-60"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Email </label>
          <input
            onChange={(e) => setUEmail(e.target.value)}
            placeholder={email}
            className="border-2 border-indigo-600 rounded-lg ml-9 w-60"
            type="email"
          />
        </div>

        <Link to="/profile/basicInfo/changePassword">
          <button className="w-1/3 bg-indigo-600 p-3 rounded-lg text-white">
            Change Password
          </button>
        </Link>

        <button
          onClick={handleUpdate}
          className=" w-1/3 bg-indigo-600 p-3 rounded-lg text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
