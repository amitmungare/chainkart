import { Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState, lazy, Suspense } from "react";
import LoadingBar from "react-top-loading-bar";
import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("./pages/E-Commerce/Home"));
const UserLogin = lazy(() => import("./pages/Auth/userlogin"));
const UserSignUp = lazy(() => import("./pages/Auth/usersignup"));
const CompanyLogin = lazy(() => import("./pages/Auth/companylogin"));
const CompanyRegister = lazy(() => import("./pages/Auth/companyregister"));
const Dashboard = lazy(() => import("./pages/Dashboard/Home/dashboard"));
const CompPassword = lazy(() => import("./pages/E-Commerce/CompPassword"));
const Payment = lazy(() => import("./pages/E-Commerce/Payment"));
const Success = lazy(() => import("./pages/E-Commerce/success"));

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
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="clogin" element={<CompanyLogin />} />
          <Route path="cregister" element={<CompanyRegister />} />
          <Route path="signup" element={<UserSignUp />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="/admin" element={<CompPassword />} />
          <Route path="payment" element={<Payment />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
