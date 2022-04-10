import React from "react";
import { MdDriveFolderUpload } from "react-icons/md";

const CompanyRegDash = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-6 bg-violet-400"
      style={{
        //     boxShadow: "0 0 15px -10px rgba(0,0,0,0.75)",
        margin: "63px auto",
      }}
    >
      <h2 className="mt-10 text-xl ml-6 p-4  ">
        Please Register Your Business Here
      </h2>
      <div className=" ml-6">
        <form>
          <div className="flex justify-around  ">
            <div className="">
              <label className="inline-block w-32">Business Name: </label>
              <input className="w-56 ml-2" type="text" />
            </div>
            <div className="">
              <label className="inline-block w-32 ml-6">
                Business E-mail:{" "}
              </label>
              <input className="w-56 ml-2" type="email" />
            </div>
          </div>
          <div className="flex mt-16 justify-between ">
            <div className="">
              <label className="inline-block w-32">City: </label>
              <input className="w-56 ml-2" type="text" />
            </div>
            <div className="">
              <label className="inline-block w-32">Postal Code: </label>
              <input className="w-56 ml-2" type="number" />
            </div>
          </div>
          <div className="flex mt-16 " style={{ gap: "214px " }}>
            <div className="flex justify-between">
              <label htmlFor="" className="inline-block w-32">
                {" "}
                Blank Cheque:{" "}
              </label>
              <MdDriveFolderUpload className="w-10 h-7" />
              <input className="w-72 ml-2 hidden " type="file" />
            </div>
            <div className="flex justify-between">
              <label className="inline-block w-32"> PAN card: </label>
              <MdDriveFolderUpload className="w-10 h-7" />
              <input className="w-72 ml-2 hidden " type="file" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegDash;
