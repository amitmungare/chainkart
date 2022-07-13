import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dispatch, selectUser } from "../../../store/store";
import { updateUserProfile } from "../../../store/userSlice";
import { User } from "../../../utils/dataTypes";

interface Props {
  user: any;
}

const BasicInfo = ({ user }: Props) => {
  console.table(user);
  // console.log(user1);

  const [uFirstName, setUFirstName] = useState(user.firstname);
  const [uLastName, setULastName] = useState(user.lastname);
  const [uEmail, setUEmail] = useState(user.email);
  const formData = {
    firstname: uFirstName,
    lastname: uLastName,
    email: uEmail,
    hnumber: user.hnumber,
    city: user.city,
    landmark: user.landmark,
    state: user.state,
    pincode: user.pincode,
    token: user.token,
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    dispatch(updateUserProfile(formData));
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
            placeholder={uFirstName}
            className="border-2 border-indigo-600 rounded-lg w-60"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Last Name </label>
          <input
            onChange={(e) => setULastName(e.target.value)}
            placeholder={uLastName}
            className="border-2 border-indigo-600 rounded-lg w-60"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Email </label>
          <input
            onChange={(e) => setUEmail(e.target.value)}
            placeholder={uEmail}
            className="border-2 border-indigo-600 rounded-lg ml-9 w-60"
            type="email"
          />
        </div>

        <Link to="/profile/basicInfo/changePassword">
          <button className="w-1/6 bg-indigo-600 p-3 rounded-lg text-white">
            Change Password
          </button>
        </Link>

        <button
          onClick={handleUpdate}
          className=" w-1/6 bg-indigo-600 p-3 rounded-lg text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
