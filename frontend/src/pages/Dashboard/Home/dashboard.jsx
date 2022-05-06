import React from "react";
import { Route, Routes } from "react-router-dom";

import CProfile from "../cprofile";
import DashHome from "./DashHome";
import Transaction from "../Transaction";
import SideBar from "../../../components/Dashboard/sidebar";
import TitleBar from "../../../components/Dashboard/titlebar";

import styled from "styled-components";

import Users from "../Users";
import AddNew from "../Products/AddNew";
import ProductTable from "../Products/ProductTable";

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
            <Route path="products" element={<ProductTable />} />
            <Route path="addNew" element={<AddNew />} />
            <Route path="cprofile" element={<CProfile />} />
            <Route path="transactions" element={<Transaction />} />
          </Routes>
        </Container2>
      </Container>
    </>
  );
};

export default Dashboard;
