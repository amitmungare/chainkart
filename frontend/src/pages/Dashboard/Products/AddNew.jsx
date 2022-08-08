import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "../../../store/productSlice";
import { CircularProgress } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../../store/firebase";

const AddNew = () => {
  const [progress, setProgress] = useState(0);
  const { email, name } = useSelector((state) => state.company.company);
  const { loading, error } = useSelector((state) => state.product);
  const [selected, setSelected] = useState("");
  const [name1, setName1] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const [selected2, setSelected2] = useState("");
  const [pImage, setPImage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleCat2 = (e) => {
    setSelected2(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * 10000) + 1;
    const storageRef = ref(storage, `${selected2}/${random}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setImageURL(url));
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name1,
      desc,
      price,
      pImage: imageURL,
      category: selected,
      subCategory: selected2,
      cEmail: email,
      cName: name,
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
                  onChange={(e) => setName1(e.target.value)}
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
                    onChange={handleCat2}
                    // name="category"

                    className="mt-2 border-2 rounded-lg border-indigo-700 p-1"
                  >
                    <option value="">Select sub-category</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Headphones">Headphones</option>
                    <option value="SmartPhones">SmartPhones</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Watches">Watches</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Autobiography">Autobiography</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Textbook">Textbook</option>
                    <option value="Washing Machines">Washing Machines</option>
                    <option value="Air Conditioner">Air Conditioner</option>
                    <option value="Television">Television</option>
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
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-2 block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
                type="file"
              />

              <div>
                <button
                  onClick={handleUpload}
                  className="bg-blue-500 p-2 rounded-md text-white mt-2"
                >
                  Upload
                </button>
                <div>{progress} % </div>
              </div>
            </div>

            {loading ? (
              <CircularProgress />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
              >
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNew;
