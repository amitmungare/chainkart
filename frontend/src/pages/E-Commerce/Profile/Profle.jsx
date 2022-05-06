import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Address from "../Profile/Address";
import BasicInfo from "../Profile/BasicInfo";
import Orders from "../Profile/Orders";
import Sidebar from "../../../pages/E-Commerce/Profile/Sidebar";
import ChangePass from "./ChangePass";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user ? (
        <div className="min-h-screen flex gap-3">
          <Sidebar />
          <div className="flex-[6]">
            <Routes>
              <Route path="/basicInfo/*" element={<BasicInfo />} />
              <Route
                path="/basicInfo/changePassword"
                element={<ChangePass />}
              />

              <Route path="/orders" element={<Orders />} />
              <Route path="/address" element={<Address />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <div>
            Please{" "}
            <Link
              to="/login"
              className="cursor-pointer text-indigo-600 font-bold"
            >
              Sign in
            </Link>{" "}
            to access this page.
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
