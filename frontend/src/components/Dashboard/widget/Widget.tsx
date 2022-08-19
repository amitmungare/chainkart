import {
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
  Store,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchProducts, fetchT } from "../../../store/api";
import { selectComapny } from "../../../store/companySlice";
import { useAppSelector } from "../../../store/hooks";
import { formatPrice } from "../../../utils";

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
  /* justify-content: space-between; */
  gap: 10px;
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

const Link1 = styled.span`
  width: max-content;
  font-size: 12 px;
  border-bottom: 1px solid grey;
`;

const Widget = ({ type }) => {
  const [no, setNo] = useState(0);
  const [earning, setEarning] = useState([]);
  const [products, setProducts] = useState([]);

  const price = earning.reduce((a, b: any) => a + b.price, 0);

  const company = useAppSelector(selectComapny);

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await fetchT(company?.email);

      setNo(res.data.orders.length);
      setEarning(res.data.orders);
    };

    const getProducts = async () => {
      const res = await fetchProducts(company?.email);
      setProducts(res.data.products);
    };
    fetchTransaction();
    getProducts();
  }, []);

  let data;
  // let amount = 1000;
  switch (type) {
    case "review":
      data = {
        title: "REVIEWS",
        isMoney: false,
        states: "Coming soon",
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

    case "p_sold":
      data = {
        title: "ITEMS SOLD",
        isMoney: false,
        states: no,
        link: "View all transactions",
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
        title: "TOTAL REVENUE",
        isMoney: true,
        states: formatPrice(price),
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
        states: products.length,
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
          {data.isMoney && "₹"}
          {data.states}
        </Counter>
        {/* <Link1>{data.link}</Link1> */}
      </Left>

      <Right>{data.icon}</Right>
    </Widgets>
  );
};

export default Widget;
