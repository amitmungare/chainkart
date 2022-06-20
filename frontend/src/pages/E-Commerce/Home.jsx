import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/E-Commerce/Footer";
import Main from "../../components/E-Commerce/Main/Main";
import Navbar from "../../components/E-Commerce/Navbar";
import Cart from "./Cart";
import Profile from "./Profile/Profle";
import SubCategory from "./Product/SubCategory";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/:category/:subCategory/*" element={<SubCategory />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
