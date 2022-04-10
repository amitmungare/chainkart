import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState, useRef } from "react";

const AddNew = () => {
  const nameRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const cRef = useRef();
  const sCRef = useRef();

  const [card, setCard] = useState();
  const [cheque, setCheque] = useState();

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="max-w-screen-xl px-4 py-14 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Add a new product
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Product Name
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="name"
                  ref={nameRef}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter product's name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>

              <div className="relative mt-1">
                <textarea
                  ref={desRef}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Price</label>

              <div className="relative mt-1">
                <input
                  type="number"
                  ref={priceRef}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <label className="text-sm font-medium">Category</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    ref={cRef}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter category"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Sub-Category</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    ref={sCRef}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter sub-category"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label className="block">Product's Images</label>
              {/* <Folder /> */}
              <input
                id="file2"
                onChange={(e) => setCheque(e.target.files[0])}
                className="mt-2 block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
                type="file"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNew;
