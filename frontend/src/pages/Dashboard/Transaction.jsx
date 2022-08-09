import React from "react";
import styled from "styled-components";
import List from "../../components/Dashboard/List";

const ListContainer = styled.div`
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;

const ListTitle = styled.div`
  font-weight: 500;
  color: #0369a1;
  margin-bottom: 15px;
`;

const Transaction = () => {
  return (
    <ListContainer>
      <ListTitle>All Transactions</ListTitle>
      <List />
    </ListContainer>
  );
};

export default Transaction;
