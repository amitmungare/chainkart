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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "../../../store/productSlice";

const AddNew = () => {
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  // const [formData, setFormData] = useState(initialState);
  const [selected2, setSelected2] = useState("");
  const [pImage, setPImage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const electronics = ["Laptops", "SmartPhones", "Headphones"];
  const fashion = ["Shoes", "Shirts", "Watches"];
  const sports = ["Badminton", "Cricket", "Football"];
  const books = ["Autobiography", "Fiction", "Textbook"];
  const home_appliances = ["Washing Machines", "Air Conditioner", "Television"];

  let type = null;
  let options = null;

  if (selected === "Electronics") {
    type = electronics;
  } else if (selected === "Fashion") {
    type = fashion;
  } else if (selected === "Sports") {
    type = sports;
  } else if (selected === "Books") {
    type = books;
  } else if (selected === "Home_Appliances") {
    type = home_appliances;
  }

  if (type) {
    options = type.map((el) => (
      <option key={el} value={el}>
        {el}
      </option>
    ));
  }

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const transformedFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPImage(reader.result);
      };
    } else {
      setPImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      desc,
      price,
      pImage,
      selected,
      selected2,
    };
    dispatch(createProduct({ formData, navigate, toast }));
  };

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
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter product name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>

              <div className="relative mt-1">
                <textarea
                  name="desc"
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter product description"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Price</label>

              <div className="relative mt-1">
                <input
                  type="number"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <label className="text-sm font-medium">Category</label>

                <div className="relative mt-1">
                  <select
                    name="category"
                    onChange={handleSelect}
                    className="mt-2 border-2 rounded-lg border-indigo-700 p-1"
                  >
                    <option value="">Select category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Sports">Sports</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Books">Books</option>
                    <option value="Home_Appliances">Home Appliances</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Sub-Category</label>

                <div className="relative mt-1">
                  <select
                    onChange={(e) => setSelected2(e.target.value)}
                    // name="category"

                    className="mt-2 border-2 rounded-lg border-indigo-700 p-1"
                  >
                    {options}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label className="block">Product Image</label>
              {/* <Folder /> */}
              <input
                accept="image/*"
                id="file2"
                onChange={(e) => transformedFile(e.target.files[0])}
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
