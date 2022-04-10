import React from "react";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex mb-auto">
      <div className="flex flex-col flex-[1] p-5">
        <span className="font-bold text-lg mb-2">About Us</span>
        <p className="mx-0 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quod quasi quae voluptas, sequi magnam adipisci repellendus blanditiis
          necessitatibus aut inventore mollitia libero beatae fugit laboriosam
          autem veritatis accusantium voluptate?
        </p>
        <div className="flex">
          <div className="logo bg-[#3B5999] ">
            <Facebook />
          </div>

          <div className="logo bg-[#E4405F]">
            <Instagram />
          </div>

          <div className="logo bg-[#55ACEE]">
            <Twitter />
          </div>

          <div className="logo bg-[#0E76A8] ">
            <LinkedIn />
          </div>
        </div>
      </div>
      <div className="flex-[1] p-5">
        <h3 className="mb-7 font-bold">Useful Links</h3>
        <ul className="flex flex-wrap">
          <Link to="/" className="w-1/2 mb-2">
            <li>Home</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>Electronics</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>Fashion</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>Sports</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>Books</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>Terms</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>Home Appliances</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li>My Account</li>
          </Link>
        </ul>
      </div>
      <div className="flex-[1] p-5">
        <h1 className="font-bold mb-7">Contact</h1>
        <div className="mb-5 flex items-center">
          <Room className="mr-2" /> Verna, Goa - 403722
        </div>

        <div className="mb-5 flex items-center">
          <Phone className="mr-2" /> +91 12345678
        </div>

        <div className="mb-5 flex items-center">
          <MailOutline className="mr-2" /> chainkart@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
