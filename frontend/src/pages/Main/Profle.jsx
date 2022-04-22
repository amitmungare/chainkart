import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Address from "../../components/E-Commerce/Address";
import BasicInfo from "../../components/E-Commerce/BasicInfo";
import Orders from "../../components/E-Commerce/Orders";
import Sidebar from "../../components/E-Commerce/Sidebar";
import ChangePass from "./ChangePass";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
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
        <div className="h-screen">Please Sign in to access this page.</div>
      )}
    </>
  );
};

export default Profile;
