import { PermIdentityOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const [isOpenE, setIsOpenE] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [isOpenH, setIsOpenH] = useState(false);
  return (
    <div className="flex justify-between w-full mt-9 ">
      <Link to="/" className="text-indigo-600 text-2xl font-bold px-3 ">
        Chainkart
      </Link>
      <ul className="flex gap-5 ">
        <li className="hover relative" onClick={() => setIsOpenE(!isOpenE)}>
          Electronics
        </li>
        {isOpenE && (
          <div className=" top-16 absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/Electronics/Laptops">Laptop</Link>
            <Link to="/Electronics/Headphones">Headphones</Link>
            <Link to="/Electronics/Smartphones">Smartphones</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenS(!isOpenS)}>
          Sports
        </li>

        {isOpenS && (
          <div className=" top-16 left-[610px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/Sports/Cricket">Cricket</Link>
            <Link to="/Sports/Football">Football</Link>
            <Link to="/Sports/Badminton">Badminton</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenF(!isOpenF)}>
          Fashion
        </li>
        {isOpenF && (
          <div className=" top-16 left-[675px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/Fashion/Shirts">Shirts</Link>
            <Link to="/Fashion/Shoes">Shoes</Link>
            <Link to="/Fashion/Watches">Watches</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenB(!isOpenB)}>
          Books
        </li>
        {isOpenB && (
          <div className=" top-16 left-[750px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/Books/Autobiography">Autobiography</Link>
            <Link to="/Books/Textbooks">Textbooks</Link>
            <Link to="/Books/Fiction">Fiction</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenH(!isOpenH)}>
          Home Appliances
        </li>
        {isOpenH && (
          <div className=" top-16 left-[815px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/Home_Appliances/Television">Television</Link>
            <Link to="/Home_Appliances/Washing_Machine">Washing Machine</Link>
            <Link to="/Home_Appliances/Air_Conditioner">Air Conditioner</Link>
          </div>
        )}
      </ul>
      <div className="px-3 flex gap-5">
        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center">
          <Link to="/profile">
            <PermIdentityOutlined />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {user ? (
            <span className="hover mt-2">Logout</span>
          ) : (
            <Link to="/login">
              <span className="hover mt-2">Sign in</span>
            </Link>
          )}
        </div>

        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center mr-2">
          <Badge badgeContent={2} color="primary">
            <ShoppingBagOutlined />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
