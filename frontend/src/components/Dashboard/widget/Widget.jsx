import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
  Store,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Widgets = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: rgb(160, 160, 160);
`;
const Counter = styled.span`
  font-size: 24px;
  font-weight: 300;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Percentage = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const Link1 = styled.span`
  width: max-content;
  font-size: 12 px;
  border-bottom: 1px solid grey;
`;

const Widget = ({ type }) => {
  let data;
  let amount = 1000;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlined
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              fontSize: "18px",
              padding: "5px",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              fontSize: "18px",
              padding: "5px",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
              fontSize: "18px",
              padding: "5px",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;

    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "See details",
        icon: (
          <Store
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              fontSize: "18px",
              padding: "5px",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Widgets>
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {data.isMoney && "₹"} {amount}
        </Counter>
        <Link1>{data.link}</Link1>
      </Left>

      <Right>
        <Percentage>
          <KeyboardArrowUp />
          10 %
        </Percentage>
        {data.icon}
      </Right>
    </Widgets>
  );
};

export default Widget;
