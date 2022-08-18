import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectUser, updateUserProfile } from "../../../store/userSlice";

const Address = () => {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const [uHNumber, setUHNumber] = useState(user?.hnumber);
  const [uCity, setUCity] = useState(user?.city);
  const [uLandmark, setULandmark] = useState(user?.landmark);
  const [uState, setUState] = useState(user?.state);
  const [uPincode, setUPincode] = useState(user?.pincode);

  const token = user?.token;

  const formData = {
    firstname: user?.firstname,
    lastname: user?.lastname,
    email: user?.email,
    hnumber: uHNumber,
    city: uCity,
    landmark: uLandmark,
    state: uState,
    pincode: uPincode,
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    dispatch(updateUserProfile({ formData, toast, token }));
  };
  return (
    <div className="min-h-screen flex flex-col justify-between ml-12">
      <form
        className="p-5 flex flex-col gap-4"
        style={{ boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)" }}
      >
        <div className="flex gap-2 items-center ">
          <label>House Number </label>
          <input
            onChange={(e) => setUHNumber(e.target.value)}
            placeholder={user?.hnumber}
            className="input-1"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>City </label>
          <input
            onChange={(e) => setUCity(e.target.value)}
            placeholder={user?.city}
            className="input-1 ml-[77px] "
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Landmark </label>
          <input
            onChange={(e) => setULandmark(e.target.value)}
            placeholder={user?.landmark}
            className="input-1 ml-8"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>State </label>

          <select placeholder={user?.state} className="input-1 ml-16">
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
            onChange={(e) => setUPincode(Number(e.target.value))}
            placeholder={user?.pincode.toString()}
            style={{ WebkitAppearance: "none" }}
            className="input-1 ml-11"
            type="number"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="w-1/5 bg-[#0369a1] p-3 rounded-lg text-white text-lg "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Address;
