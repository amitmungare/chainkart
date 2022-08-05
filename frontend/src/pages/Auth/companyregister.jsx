import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as api from "../../store/api";
import { CircularProgress } from "@mui/material";

const CompanyRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cin, setCin] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [imagep, setImagep] = useState("");
  const [imagec, setImagec] = useState("");

  const transformedFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagep(reader.result);
      };
    } else {
      setImagep("");
    }
  };

  const transformedFileC = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagec(reader.result);
      };
    } else {
      setImagec("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      cin,
      city,
      postalCode,
      imagep,
      imagec,
    };

    setLoading(true);
    const res = await api.cRegister(formData);
    setLoading(false);
    if (res.status === 201) {
      toast.success("Company registered successfully");
      navigate("/");
    }
    if (res.status === 401) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-[#0369a1] sm:text-3xl">
            Get started
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p className="text-lg font-bold text-black">Sign up with us now!</p>

            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Company Name
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  name="email"
                  // onChange={onInputChange}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="id" className="text-sm font-medium">
                CIN
              </label>

              <div className="relative mt-1">
                <input
                  maxLength={30}
                  name="c_number"
                  // onChange={onInputChange}
                  onChange={(e) => setCin(e.target.value)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <label className="text-sm font-medium">City</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    name="city"
                    // onChange={onInputChange}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Postal Code</label>

                <div className="relative mt-1">
                  <input
                    type="number"
                    name="postal_code"
                    // onChange={onInputChange}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <div className="mt-3">
                <label className="block">Pan Card</label>

                <input
                  id="file1"
                  required
                  onChange={(e) => transformedFile(e.target.files[0])}
                  accept="image/*"
                  className="mt-2 block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-[#0369a1]
                    hover:file:bg-violet-100  "
                  type="file"
                />
              </div>

              <div className="mt-3">
                <label className="block">Cancelled Cheque</label>
                {/* <Folder /> */}
                <input
                  id="file2"
                  required
                  accept="image/*"
                  onChange={(e) => transformedFileC(e.target.files[0])}
                  className="mt-2 block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-[#0369a1]
                hover:file:bg-violet-100"
                  type="file"
                />
              </div>
            </div>
            {loading ? (
              <CircularProgress className="ml-52" color="info" />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="block w-full px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
              >
                Submit Application
              </button>
            )}

            <p className="text-sm text-center text-gray-500">
              Already have an account ?
              <NavLink className="m-1 text-[#0369a1]" to="/clogin">
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;
