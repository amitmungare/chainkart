import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CompPassword = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const res = await axios.put(
      "http://localhost:4000/api/v1/company/admin",
      data
    );
    console.log(res);
    if (res.data.success) {
      toast.success("Password updated successfully");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col gap-2">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-4 pr-12 text-sm  border-gray-200 rounded-lg shadow-sm"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        />
        <button onClick={handleSubmit} className="bg-slate-300 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompPassword;
