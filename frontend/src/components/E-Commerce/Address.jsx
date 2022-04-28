import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/userSlice";

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

  const hnumberRef = useRef();
  const cityRef = useRef();
  const landmarkRef = useRef();
  const stateRef = useRef();
  const pincodeRef = useRef();

  const dispatch = useDispatch();

  const [uHNumber, setUHNumber] = useState(hnumber);
  const [uCity, setUCity] = useState(city);
  const [uLandmark, setULandmark] = useState(landmark);
  const [uState, setUState] = useState(state);
  const [uPincode, setUPincode] = useState(pincode);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        "http://localhost:4000/api/v1/me/update",

        {
          firstname,
          lastname,
          email,
          hnumber: uHNumber,
          city: uCity,
          landmark: uLandmark,
          state: uState,
          pincode: uPincode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        let uAddress = {
          firstname,
          lastname,
          email,
          hnumber: uHNumber,
          city: uCity,
          landmark: uLandmark,
          state: uState,
          pincode: uPincode,
        };
        dispatch(registerUser(uAddress));
        alert("Successfully updated");
      }
    } catch (err) {
      console.log(err);
    }
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
            ref={hnumberRef}
            onChange={(e) => setUHNumber(e.target.value)}
            placeholder={hnumber}
            className="border-2 border-indigo-600 rounded-lg"
            type="text"
          />
          <button
            onClick={(e) => (e.preventDefault(), hnumberRef.current.focus())}
            className="bg-indigo-700 text-white p-1 rounded-lg text-sm"
          >
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>City </label>
          <input
            ref={cityRef}
            onChange={(e) => setUCity(e.target.value)}
            placeholder={city}
            className="border-2 border-indigo-600 rounded-lg ml-[77px]"
            type="text"
          />
          <button
            onClick={(e) => (e.preventDefault(), cityRef.current.focus())}
            className="bg-indigo-700 text-white p-1 rounded-lg text-sm"
          >
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center ">
          <label>Landmark </label>
          <input
            ref={landmarkRef}
            onChange={(e) => setULandmark(e.target.value)}
            placeholder={landmark}
            className="border-2 border-indigo-600 rounded-lg ml-8"
            type="text"
          />
          <button
            onClick={(e) => (e.preventDefault(), landmarkRef.current.focus())}
            className="bg-indigo-700 text-white p-1 rounded-lg text-sm"
          >
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>State </label>
          {/* <input
            className="border-2 border-indigo-600 rounded-lg  rounded-lgml-16"
            type="text"
          /> */}
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

          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>Pincode </label>
          <input
            ref={pincodeRef}
            onChange={(e) => setUPincode(e.target.value)}
            placeholder={pincode}
            style={{ WebkitAppearance: "none" }}
            className="border-2 border-indigo-600 rounded-lg ml-11"
            type="number"
          />
          <button
            onClick={(e) => (e.preventDefault(), pincodeRef.current.focus())}
            className="bg-indigo-700 text-white p-1 rounded-lg text-sm"
          >
            Edit
          </button>
        </div>

        <button
          onClick={handleUpdate}
          className="w-1/3 bg-indigo-600 p-3 rounded-lg text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Address;
