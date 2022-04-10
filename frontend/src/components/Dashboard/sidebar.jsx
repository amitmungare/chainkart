import React from "react";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import {
  AccountCircleOutlined,
  Dashboard,
  ExitToApp,
  Paid,
  PersonOutline,
  Store,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Top = styled.div`
  height: 50px;
  border-right: 0.5px solid rgb(230, 227, 227);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #6439ff;
`;

const Center = styled.div`
  padding-left: 10px;
  margin-top: 50px;
`;

const Lists = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ece8ff;
  }
`;

const Text = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

const SideBar = () => {
  return (
    <Container>
      <Top>
        <Logo>ChainKart</Logo>
      </Top>
      <hr />
      <Center>
        <Lists>
          <Link to="/dashboard">
            <List>
              <Dashboard style={{ fontSize: "24px", color: "#7451f8" }} />
              <Text>Dashboard</Text>
            </List>
          </Link>

          <Link to="/dashboard/products">
            <List>
              <Store style={{ fontSize: "24px", color: "#7451f8" }} />
              <Text>Products</Text>
            </List>
          </Link>

          <Link to="/dashboard/users">
            <List>
              <PersonOutline style={{ fontSize: "24px", color: "#7451f8" }} />
              <Text>Users</Text>
            </List>
          </Link>

          <Link to="/dashboard/cprofile">
            <List>
              <AccountCircleOutlined
                style={{ fontSize: "24px", color: "#7451f8" }}
              />
              <Text>Profile</Text>
            </List>
          </Link>

          <Link to="/dashboard/transactions">
            <List>
              <Paid style={{ fontSize: "24px", color: "#7451f8" }} />
              <Text>All Transactions</Text>
            </List>
          </Link>
        </Lists>
      </Center>
    </Container>
  );
};

export default SideBar;
