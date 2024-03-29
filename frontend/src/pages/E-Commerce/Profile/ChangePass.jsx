import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserPassword } from "../../../store/userSlice";

const ChangePass = () => {
  const {
    user: { token },
  } = useSelector((state) => state.user);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const dispatch = useDispatch();
  const formData = {
    oldPassword: oldPass,
    newPassword: newPass,
    confirmPassword: confirmPass,
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (newPass !== confirmPass) {
      toast.error("Password does not match");
      return;
    }

    dispatch(updateUserPassword({ formData, toast, token }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between ml-12">
      <form
        className="p-5 flex flex-col gap-4"
        style={{ boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)" }}
      >
        <div className="flex gap-2 items-center">
          <label>Enter current password </label>
          <input
            onChange={(e) => setOldPass(e.target.value)}
            className="border-2 border-indigo-600 rounded-lg w-60"
            type="password"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Enter new password </label>
          <input
            onChange={(e) => setNewPass(e.target.value)}
            className="border-2 border-indigo-600 rounded-lg w-60 ml-5"
            type="password"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Confirm new password </label>
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            className="border-2 border-indigo-600 rounded-lg ml-1 w-60"
            type="password"
          />
        </div>

        <button
          onClick={handleUpdate}
          className=" w-1/3 bg-indigo-600 p-3 rounded-lg text-white"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePass;
