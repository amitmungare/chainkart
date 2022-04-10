import { Folder } from "@mui/icons-material";
import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

const CompanyRegister = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const panRef = useRef();
  const cRef = useRef();
  const cinRef = useRef();
  const posRef = useRef();

  const [card, setCard] = useState();
  const [cheque, setCheque] = useState();
  console.log(card, cheque);

  const handleSubmit = (e) => {};
  return (
    <>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Get started
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p className="text-lg font-medium">Sign up with us now!</p>

            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Comapany Name
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="name"
                  ref={nameRef}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter company's name"
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
                  id="email"
                  ref={emailRef}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="id" className="text-sm font-medium">
                CIN Number
              </label>

              <div className="relative mt-1">
                <input
                  type="number"
                  ref={cinRef}
                  id="id"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter cin number"
                />
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <label className="text-sm font-medium">City</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    ref={cRef}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Postal Code</label>

                <div className="relative mt-1">
                  <input
                    type="number"
                    ref={posRef}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <div className="mt-3">
                <label className="block">Pan Card</label>

                <input
                  id="file1"
                  onChange={(e) => setCard(e.target.files[0])}
                  className="mt-2 block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100  "
                  type="file"
                />
              </div>

              <div className="mt-3">
                <label className="block">Cancelled Cheque</label>
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
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Submit Application
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account ?
              <Link className="m-1" to="/clogin">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;
