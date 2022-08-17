import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Address from "./Address";
import BasicInfo from "./BasicInfo";
import Orders from "./Orders";
import Sidebar from "./Sidebar";
import ChangePass from "./ChangePass";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";

const Profile = () => {
  const user = useAppSelector(selectUser);
  // let user = true;
  return (
    <>
      {user ? (
        <div className="min-h-screen overflow-x-scroll flex gap-3">
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
