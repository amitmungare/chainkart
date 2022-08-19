import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";

const BasicInfo = lazy(() => import("./BasicInfo"));
const Orders = lazy(() => import("./Orders"));
const Address = lazy(() => import("./Address"));
const ChangePass = lazy(() => import("./ChangePass"));
const Sidebar = lazy(() => import("./Sidebar"));

const Profile = () => {
  const user = useAppSelector(selectUser);
  // let user = true;
  return (
    <>
      {user ? (
        <div className="min-h-screen overflow-x-scroll flex gap-3">
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
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
