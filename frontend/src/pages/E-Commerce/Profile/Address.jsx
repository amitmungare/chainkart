import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../../store/userSlice";

const Address = () => {
  const { user } = useSelector((state) => state.user);
  const {
    firstname,
    lastname,
    email,
    hnumber,
    city,
    landmark,
    state,
    pincode,
    token,
  } = user;

  const dispatch = useDispatch();

  const [uHNumber, setUHNumber] = useState(hnumber);
  const [uCity, setUCity] = useState(city);
  const [uLandmark, setULandmark] = useState(landmark);
  const [uState, setUState] = useState(state);
  const [uPincode, setUPincode] = useState(pincode);

  const formData = {
    firstname,
    lastname,
    email,
    hnumber: uHNumber,
    city: uCity,
    landmark: uLandmark,
    state: uState,
    pincode: uPincode,
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
          <label>House Number </label>
          <input
            onChange={(e) => setUHNumber(e.target.value)}
            placeholder={hnumber}
            className="border-2 border-indigo-600 rounded-lg"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>City </label>
          <input
            onChange={(e) => setUCity(e.target.value)}
            placeholder={city}
            className="border-2 border-indigo-600 rounded-lg ml-[77px]"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Landmark </label>
          <input
            onChange={(e) => setULandmark(e.target.value)}
            placeholder={landmark}
            className="border-2 border-indigo-600 rounded-lg ml-8"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>State </label>

          <select
            placeholder={state}
            className="ml-16 border-2 rounded-lg border-indigo-700 p-1"
          >
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jammu and Kashmir</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </select>
        </div>

        <div className="flex gap-2 items-center">
          <label>Pincode </label>
          <input
            onChange={(e) => setUPincode(e.target.value)}
            placeholder={pincode}
            style={{ WebkitAppearance: "none" }}
            className="border-2 border-indigo-600 rounded-lg ml-11"
            type="number"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="w-1/5 bg-[#0E3995] p-3 rounded-lg text-white "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Address;
