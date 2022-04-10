import React from "react";
import { Route, Routes } from "react-router-dom";

import SideBar from "../../components/Dashboard/sidebar";
import TitleBar from "../../components/Dashboard/titlebar";
import styled from "styled-components";
import ProductTable from "../../components/Dashboard/ProductTable";

const Products = () => {
  return <ProductTable />;
};

export default Products;
