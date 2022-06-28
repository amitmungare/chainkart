import React from "react";
import { useSelector } from "react-redux";

const CProfile = () => {
  const company = useSelector((state) => state.company.company);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-14 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Company Details
          </h1>

          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Company Name
              </label>

              <div className="relative mt-1">
                <span className="text-indigo-600">{company.name}</span>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Company Email
              </label>

              <div className="relative mt-1">
                <span className="text-indigo-600">{company.email}</span>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-bold">
                CIN
              </label>

              <div className="relative mt-1">
                <span className="text-indigo-600">{company.cin}</span>
              </div>
            </div>

            <button
              onClick={handleClickOpen}
              className="block w-1/2 px-5 py-3 text-sm font-bold text-white bg-indigo-600 rounded-lg"
            >
              View uploaded files
            </button>
          </form>
        </div>
      </div>
      {open && (
        <div className="flex gap-3 ml-[400px]">
          <img src={company.imagec} />
          <img src={company.imagep} />
        </div>
      )}
    </>
  );
};

export default CProfile;
