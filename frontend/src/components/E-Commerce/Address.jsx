import React from "react";

const Address = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between ml-12">
      <form
        className="p-5 flex flex-col gap-4"
        style={{ boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)" }}
      >
        <div className="flex gap-2 items-center">
          <label>House Number </label>
          <input
            className="border-2 border-indigo-600 rounded-lg"
            type="text"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>City </label>
          <input
            className="border-2 border-indigo-600 rounded-lg ml-[77px]"
            type="text"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center ">
          <label>Landmark </label>
          <input
            className="border-2 border-indigo-600 rounded-lg ml-8"
            type="email"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>State </label>
          {/* <input
            className="border-2 border-indigo-600 rounded-lg  rounded-lgml-16"
            type="text"
          /> */}
          <select className="ml-16 border-2 rounded-lg border-indigo-700 p-1">
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
            style={{ WebkitAppearance: "none" }}
            className="border-2 border-indigo-600 rounded-lg ml-11"
            type="number"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <button className="w-1/3 bg-indigo-600 p-3 rounded-lg text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default Address;
