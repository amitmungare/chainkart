import React from "react";
import Widget from "../../../components/Dashboard/widget/Widget";
import Chart from "../../../components/Dashboard/Chart";
import Featured from "../../../components/Dashboard/Featured";

import styled from "styled-components";
import List from "../../../components/Dashboard/List";

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
        <Widget type="p_sold" />
        <Widget type="earning" />
        <Widget type="products" />
        <Widget type="review" />
      </Widgets>
      {/* <Charts>
        <Featured />
        <Chart />
      </Charts> */}
      <ListContainer>
        <ListTitle>Latest Transaction</ListTitle>
        <List />
      </ListContainer>
    </>
  );
};

export default DashHome;
