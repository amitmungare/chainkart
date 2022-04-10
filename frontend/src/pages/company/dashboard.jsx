import React from "react";
import { Route, Routes } from "react-router-dom";

import CProfile from "../../components/Dashboard/cprofile";
import DashHome from "../../components/Dashboard/DashHome";
import Transaction from "../../components/Dashboard/Transaction";
import AddProducts from "./AddProducts";
import Products from "./Products";

import SideBar from "../../components/Dashboard/sidebar";
import TitleBar from "../../components/Dashboard/titlebar";

import styled from "styled-components";

import Users from "./Users";

const Container = styled.div`
  display: flex;
`;
const Container2 = styled.div`
  flex: 6;
`;

const Dashboard = () => {
  return (
    <>
      <Container>
        <SideBar />
        <Container2>
          <TitleBar />
          <Routes>
            <Route path="/" element={<DashHome />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="addNew" element={<AddProducts />} />
            <Route path="cprofile" element={<CProfile />} />
            <Route path="transactions" element={<Transaction />} />
          </Routes>
        </Container2>
      </Container>
    </>
  );
};

export default Dashboard;
