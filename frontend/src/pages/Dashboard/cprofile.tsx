import React from "react";
import { useSelector } from "react-redux";
import { selectComapny } from "../../store/companySlice";
import { useAppSelector } from "../../store/hooks";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

            <button
              onClick={handleOpen}
              className="block w-1/2 px-5 py-3 text-sm font-bold text-white bg-[#0369a1] rounded-lg"
            >
              View uploaded files
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src={company?.imagec} />
                <img src={company?.imagep} />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      {/* {open && (
        <div className="flex gap-3 ml-[400px]">
          <img src={company?.imagec} />
          <img src={company?.imagep} />
        </div>
      )} */}
    </>
  );
};

export default CProfile;
