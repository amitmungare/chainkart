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
    <div className="flex mb-auto mt-4">
      <div className="flex flex-col flex-[1] p-5">
        <span className="font-bold text-lg mb-2">About Us</span>
        <p className="mx-0 my-5 text-justify text-col">
          Chainkart is a first of its kind Blockchain based e-commerce
          marketplace. Backed by Ethereum blockchain, every transaction is
          secured, authentic and from the original brand owner, guaranteed!
          Looking for a secure shopping experience? Start shopping now! Wish to
          sell on our platform? Sign your company up now!
        </p>
        <div className="flex">
          <a
            href="http://www.facebook.com/chainkart"
            target="_blank"
            rel="noreferer"
            className="logo bg-[#3B5999] "
          >
            <Facebook />
          </a>

          <a
            className="logo bg-[#E4405F]"
            href="https://www.instagram.com/invites/contact/?i=zj8u2jee0nxq&utm_content=p7gyhhz"
            target="_blank"
            rel="noreferer"
          >
            <Instagram />
          </a>

          <a
            className="logo bg-[#55ACEE]"
            href="http://www.twitter.com/chainkart"
            target="_blank"
            rel="noreferer"
          >
            <Twitter />
          </a>

          <a
            className="logo bg-[#0E76A8] "
            href="http://www.linkedin.com/in/chainkart"
            target="_blank"
            rel="noreferer"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="flex-[1] p-5">
        <h3 className="mb-7 font-bold">Useful Links</h3>
        <ul className="flex flex-wrap">
          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Home</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Electronics</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Fashion</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Sports</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Books</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Terms</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Home Appliances</li>
          </Link>

          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">My Account</li>
          </Link>
        </ul>
      </div>
      <div className="flex-[1] p-5 opacity-75">
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
