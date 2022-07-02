import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div className=" flex flex-col justify-between">
      <ToastContainer />
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
    </div>
  );
};

export default App;
