import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectUser, updateUserProfile } from "../../../store/userSlice";

const BasicInfo = () => {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const [uFirstName, setUFirstName] = useState(user?.firstname);
  const [uLastName, setULastName] = useState(user?.lastname);
  const [uEmail, setUEmail] = useState(user?.email);
  const hnumber = user?.hnumber;
  const city = user?.city;
  const landmark = user?.landmark;
  const state = user?.state;
  const pincode = user?.pincode;
  const token = user?.token;
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

    dispatch(updateUserProfile({ formData, token }));
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
            placeholder={user?.firstname}
            className="p-[3px] border-2 border-[#0369a1] rounded-lg w-60"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Last Name </label>
          <input
            onChange={(e) => setULastName(e.target.value)}
            placeholder={user?.lastname}
            className="p-[3px] border-2 border-[#0369a1] rounded-lg w-60"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Email </label>
          <input
            onChange={(e) => setUEmail(e.target.value)}
            placeholder={user?.email}
            className="p-[3px] border-2 border-[#0369a1] rounded-lg ml-9 w-60"
            type="email"
          />
        </div>

        <Link to="/profile/basicInfo/changePassword">
          <button className="w-1/6 bg-[#0369a1] p-3 rounded-lg text-white">
            Change Password
          </button>
        </Link>

        <button
          onClick={handleUpdate}
          className=" w-1/6 bg-[#0369a1] p-3 rounded-lg text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
