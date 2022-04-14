import {
  Home,
  HomeOutlined,
  InfoOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="bg-[#f0f8ff] p-4 flex-[1] flex flex-col max-w-[200px]  gap-4 border-t-2 border-r-2 border-indigo-300">
        <Link to="/profile/basicInfo" className="hover:bg-[#ece8ff]">
          <li className="flex  gap-1 p-[5px]">
            <InfoOutlined className="text-[#7451f8]" />
            <span className="text-[#888] font-semibold">Basic Info</span>
          </li>
          {/* <div style={{ border: "1px solid black" }} /> */}
        </Link>

        <Link to="/profile/address" className="hover:bg-[#ece8ff]">
          <li className="flex gap-1 p-[5px]">
            <HomeOutlined className=" text-[#7451f8]" />
            <span className="text-[#888] font-semibold">Address</span>
          </li>
          {/* <div style={{ border: "1px solid black" }} /> */}
        </Link>

        <Link to="/profile/orders" className="hover:bg-[#ece8ff]">
          <li className="flex  gap-1 p-[5px]">
            <LocalMallOutlined className=" text-[#7451f8]" />
            <span className="text-[#888] font-semibold">Orders</span>
          </li>
          {/* <div style={{ border: "1px solid black" }} /> */}
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
