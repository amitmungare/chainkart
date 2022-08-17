import { Route, Routes, useLocation } from "react-router-dom";
import UserLogin from "./pages/Auth/userlogin";
import CompanyLogin from "./pages/Auth/companylogin";
import UserSignUp from "./pages/Auth/usersignup";
import CompanyRegister from "./pages/Auth/companyregister";
import Home from "./pages/E-Commerce/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Home/dashboard";

import Payment from "./pages/E-Commerce/Payment";
import CompPassword from "./pages/E-Commerce/CompPassword";
import Success from "./pages/E-Commerce/success";
import NotFound from "./pages/NotFound";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const location = useLocation();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, [location]);

  return (
    <div className=" flex flex-col justify-between">
      <ToastContainer />
      <LoadingBar
        color="#2663a3"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}

        <Route path="login" element={<UserLogin />} />
        <Route path="clogin" element={<CompanyLogin />} />
        <Route path="cregister" element={<CompanyRegister />} />
        <Route path="signup" element={<UserSignUp />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="/admin" element={<CompPassword />} />
        <Route path="payment" element={<Payment />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
