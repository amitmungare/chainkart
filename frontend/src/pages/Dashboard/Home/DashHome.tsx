import React, { lazy, Suspense } from "react";

import styled from "styled-components";

const Widget = lazy(
  () => import("../../../components/Dashboard/widget/Widget")
);
const List = lazy(() => import("../../../components/Dashboard/List"));

const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const Charts = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const ListContainer = styled.div`
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;

const ListTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;

const DashHome = () => {
  return (
    <>
      <Suspense fallback={<div>Loading..</div>}>
        <Widgets>
          <Widget type="p_sold" />
          <Widget type="earning" />
          <Widget type="products" />
          <Widget type="review" />
        </Widgets>

        <ListContainer>
          <ListTitle>Latest Transaction</ListTitle>
          <List />
        </ListContainer>
      </Suspense>
    </>
  );
};

export default DashHome;
