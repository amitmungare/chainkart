import React from "react";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import {
  ExitToApp,
  LanguageOutlined,
  SearchOutlined,
} from "@mui/icons-material";

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

const TitleBar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlined />
        </Search>
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
