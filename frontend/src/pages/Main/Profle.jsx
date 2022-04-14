import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "../../components/E-Commerce/Address";
import BasicInfo from "../../components/E-Commerce/BasicInfo";
import Orders from "../../components/E-Commerce/Orders";
import Sidebar from "../../components/E-Commerce/Sidebar";

const Profile = () => {
  return (
    <div className="min-h-screen flex gap-3">
      <Sidebar />
      <div className="flex-[6]">
        <Routes>
          <Route path="/basicInfo" element={<BasicInfo />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
