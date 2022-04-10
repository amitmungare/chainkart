import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/company/dashboard";
import UserLogin from "./components/Auth/userlogin";
import CompanyLogin from "./components/Auth/companylogin";
import UserSignUp from "./components/Auth/usersignup";
import CompanyRegister from "./components/Auth/companyregister";
import Users from "./pages/company/Users";
import Home from "./pages/Main/Home";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="clogin" element={<CompanyLogin />} />
        <Route path="cregister" element={<CompanyRegister />} />
        <Route path="signup" element={<UserSignUp />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
