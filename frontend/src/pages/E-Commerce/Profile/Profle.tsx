import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "./Address";
import BasicInfo from "./BasicInfo";
import Orders from "./Orders";
import Sidebar from "./Sidebar";
import ChangePass from "./ChangePass";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, selectUser } from "../../../store/store";

const Profile = () => {
  // const user = useSelector(selectUser);
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);
  // let user = true;
  return (
    <>
      {user.active ? (
        <div className="min-h-screen flex gap-3">
          <Sidebar />
          <div className="flex-[6]">
            <Routes>
              <Route path="/basicInfo/*" element={<BasicInfo user={user} />} />
              <Route
                path="/basicInfo/changePassword"
                element={<ChangePass token={user.token} />}
              />

              <Route path="/orders" element={<Orders />} />
              <Route path="/address" element={<Address user={user} />} />
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
