import React from "react";
import Widget from "./widget/Widget";
import Chart from "./Chart";
import Featured from "./Featured";

import styled from "styled-components";
import List from "./List";

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
      <Widgets>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="products" />
      </Widgets>
      <Charts>
        <Featured />
        <Chart />
      </Charts>
      <ListContainer>
        <ListTitle>Latest Transaction</ListTitle>
        <List />
      </ListContainer>
    </>
  );
};

export default DashHome;
