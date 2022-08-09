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
      <ul className="bg-sky-100 p-4 flex-[1] flex flex-col max-w-[200px]  gap-4 shadow-lg">
        <Link
          to="/profile/basicInfo"
          className="hover:bg-[#ece8ff] hover:rounded-lg hover:shadow-md"
        >
          <li className="flex  gap-1 p-[5px]">
            <InfoOutlined className="text-[#0369a1]" />
            <span className="text-[#3D3D3D] font-semibold">Basic Info</span>
          </li>
        </Link>

        <Link
          to="/profile/address"
          className="hover:bg-[#ece8ff] hover:rounded-lg"
        >
          <li className="flex gap-1 p-[5px]">
            <HomeOutlined className=" text-[#0369a1]" />
            <span className="text-[#3D3D3D] font-semibold">Address</span>
          </li>
        </Link>

        <Link
          to="/profile/orders"
          className="hover:bg-[#ece8ff] hover:rounded-lg"
        >
          <li className="flex  gap-1 p-[5px]">
            <LocalMallOutlined className=" text-[#0369a1]" />
            <span className="text-[#3D3D3D] font-semibold">Orders</span>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
