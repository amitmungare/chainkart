import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="bg-[#f0f8ff] p-4 flex flex-col max-w-[200px] text-center gap-4 border-2 border-indigo-400">
        <Link to="/profile/basicInfo">
          <li className="">Basic Info</li>
          {/* <div style={{ border: "1px solid black" }} /> */}
        </Link>

        <Link to="/profile/address">
          <li>Address</li>
          {/* <div style={{ border: "1px solid black" }} /> */}
        </Link>

        <Link to="/profile/orders">
          <li>My Orders</li>
          {/* <div style={{ border: "1px solid black" }} /> */}
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
