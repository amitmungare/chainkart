import React from "react";

const BasicInfo = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center ml-12">
      <form
        className="p-5 flex flex-col gap-4"
        style={{ boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)" }}
      >
        <div className="flex gap-2 items-center">
          <label>First Name:- </label>
          <input
            className="border-2 border-indigo-600 rounded-lg"
            type="text"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>Last Name:- </label>
          <input
            className="border-2 border-indigo-600 rounded-lg"
            type="text"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center ">
          <label>Email:- </label>
          <input
            className="border-2 border-indigo-600 rounded-lg ml-9"
            type="email"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label>Password:- </label>
          <input
            className="border-2 border-indigo-600 rounded-lg ml-1"
            type="text"
          />
          <button className="bg-indigo-700 text-white p-1 rounded-lg text-sm">
            Edit
          </button>
        </div>

        <button className="bg-indigo-600 p-3 rounded-lg text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
