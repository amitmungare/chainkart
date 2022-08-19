import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { selectComapny } from "../../../store/companySlice";

const CProfile = lazy(() => import("../cprofile"));
const DashHome = lazy(() => import("./DashHome"));
const Transaction = lazy(() => import("../Transaction"));
const SideBar = lazy(() => import("../../../components/Dashboard/sidebar"));
const TitleBar = lazy(() => import("../../../components/Dashboard/titlebar"));
const AddNew = lazy(() => import("../Products/AddNew"));
const ProductTable = lazy(() => import("../Products/ProductTable"));
const UpdateProduct = lazy(() => import("../Products/UpdateProduct"));

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
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
