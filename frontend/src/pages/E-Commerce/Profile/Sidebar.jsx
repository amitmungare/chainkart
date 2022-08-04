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
      <ul className="bg-[#f0f8ff] p-4 flex-[1] flex flex-col max-w-[200px]  gap-4">
        <Link
          to="/profile/basicInfo"
          className="hover:bg-[#ece8ff] hover:rounded-lg"
        >
          <li className="flex  gap-1 p-[5px]">
            <InfoOutlined className="text-[#3008BF]" />
            <span className="text-[#3D3D3D] font-semibold">Basic Info</span>
          </li>
        </Link>

        <Link
          to="/profile/address"
          className="hover:bg-[#ece8ff] hover:rounded-lg"
        >
          <li className="flex gap-1 p-[5px]">
            <HomeOutlined className=" text-[#3008BF]" />
            <span className="text-[#3D3D3D] font-semibold">Address</span>
          </li>
        </Link>

        <Link
          to="/profile/orders"
          className="hover:bg-[#ece8ff] hover:rounded-lg"
        >
          <li className="flex  gap-1 p-[5px]">
            <LocalMallOutlined className=" text-[#3008BF]" />
            <span className="text-[#3D3D3D] font-semibold">Orders</span>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
