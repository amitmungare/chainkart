import React from "react";
import styled from "styled-components";
import { ExitToApp, SearchOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 50px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Name = styled(NavLink)`
  font-size: 24px;
  // font-weight: bold;
  color: #000;

  &:hover {
    background-color: rgb(160, 160, 160);
    color: #fff;
    border-radius: 5px;
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
  }
`;

const TitleBar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlined />
        </Search>
        <Name to="/dashboard/cprofile">Flipkart</Name>
        <Items>
          <Item>
            <ExitToApp className="text-indigo-600" />
            Logout
          </Item>
        </Items>
      </Wrapper>
    </Container>
  );
};
export default TitleBar;
