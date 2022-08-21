import React, { useState } from "react";
import { selectComapny } from "../../store/companySlice";
import { useAppSelector } from "../../store/hooks";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { toast } from "react-toastify";

import * as api from "../../store/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CProfile = () => {
  const company = useAppSelector(selectComapny);

  const [open, setOpen] = useState(false);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    if (!oldPass || !newPass || !confirmPass) return;

    if (newPass !== confirmPass) {
      toast.error("Password does not match");
      return;
    }

    const data = {
      email: company?.email,
      oldPassword: oldPass,
      newPassword: newPass,
    };

    const res = await api.updateCPassword1(data);
    if (res.status === 200) {
      toast.success("Password updated successfully");
    }
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-14 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-[#0369a1] sm:text-3xl">
            Company Details
          </h1>

          <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Company Name
              </label>

              <div className="relative mt-1">
                <span className="text-[#0369a1]">{company?.name}</span>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Company Email
              </label>

              <div className="relative mt-1">
                <span className="text-[#0369a1]">{company?.email}</span>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-bold">
                CIN
              </label>

              <div className="relative mt-1">
                <span className="text-[#0369a1]">{company?.cin}</span>
              </div>
            </div>

            {/* <button
              onClick={handleOpen}
              className="block w-1/2 px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
            >
              View uploaded files
            </button> */}
            <button
              onClick={handleOpen}
              className="block w-1/2 px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
            >
              Change Password
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* <img src={company?.imagec} />
                <img src={company?.imagep} /> */}
                <form
                  className="p-5 flex flex-col gap-4"
                  style={{
                    boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
                  }}
                >
                  <input
                    onChange={(e) => setOldPass(e.target.value)}
                    className="border-2 border-[#0369a1] p-[3px] rounded-lg w-60"
                    type="password"
                    placeholder="Old Password"
                  />

                  <input
                    onChange={(e) => setNewPass(e.target.value)}
                    className="border-2 border-[#0369a1] p-[3px] rounded-lg w-60"
                    type="password"
                    placeholder="New Password"
                  />

                  <input
                    onChange={(e) => setConfirmPass(e.target.value)}
                    className="border-2 border-[#0369a1] p-[3px] rounded-lg w-60"
                    type="password"
                    placeholder="Confirm Password"
                  />

                  <button
                    onClick={handleUpdate}
                    className=" bg-[#0369a1] p-3 rounded-lg text-white"
                  >
                    Update Password
                  </button>
                </form>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default CProfile;
