import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("../../components/E-Commerce/Main/Main"));
const Cart = lazy(() => import("./Cart"));
const SubCategory = lazy(() => import("./Product/SubCategory"));
const Profile = lazy(() => import("./Profile/Profle"));
const Navbar = lazy(() => import("../../components/E-Commerce/Navbar"));
const Footer = lazy(() => import("../../components/E-Commerce/Footer"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/:category/:subCategory/*" element={<SubCategory />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
