import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CProfile from "../cprofile";
import DashHome from "./DashHome";
import Transaction from "../Transaction";
import SideBar from "../../../components/Dashboard/sidebar";
import TitleBar from "../../../components/Dashboard/titlebar";

import styled from "styled-components";

import AddNew from "../Products/AddNew";
import ProductTable from "../Products/ProductTable";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import { selectComapny } from "../../../store/companySlice";
import UpdateProduct from "../Products/UpdateProduct";

const Container = styled.div`
  display: flex;
`;
const Container2 = styled.div`
  flex: 6;
`;

const Dashboard = () => {
  const company = useAppSelector(selectComapny);
  return (
    <>
      {!company ? (
        <Navigate to="/clogin" />
      ) : (
        <Container>
          <SideBar />
          <Container2>
            <TitleBar />
            <Routes>
              <Route path="/" element={<DashHome />} />

              <Route path="products" element={<ProductTable />} />
              <Route path="update/:id" element={<UpdateProduct />} />
              <Route path="addNew" element={<AddNew />} />
              <Route path="cprofile" element={<CProfile />} />
              <Route path="transactions" element={<Transaction />} />
            </Routes>
          </Container2>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
