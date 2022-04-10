import {
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
  MoreVert,
} from "@mui/icons-material";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";

const Container = styled.div`
  flex: 2;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
`;
const Title1 = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Bottom = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const FeaturedChart = styled.div`
  width: 100px;
  height: 100px;
`;
const Title2 = styled.div`
  font-weight: 500;
  color: gray;
`;
const Amount = styled.div`
  font-size: 30px;
`;
const Desc = styled.div`
  font-weight: 300;
  font-size: 12px;
  color: gray;
  text-align: center;
`;
const Summary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.div`
  text-align: center;
`;
const ItemTitle = styled.div`
  font-size: 14px;
  color: gray;
`;
const ItemResult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
`;
const ResultAmount = styled.div``;

const Featured = () => {
  return (
    <Container>
      <Top>
        <Title1>Total Revenue</Title1>
        <MoreVert fontSize="small" />
      </Top>
      <Bottom>
        <FeaturedChart>
          <CircularProgressbar value={70} text={"60%"} strokeWidth={5} />
        </FeaturedChart>
        <Title2>Total sales made today</Title2>
        <Amount>$420</Amount>
        <Desc>
          Previous transaction processing. Last payments may not be included.
        </Desc>
        <Summary>
          <Item>
            <ItemTitle>Target</ItemTitle>
            <ItemResult>
              <KeyboardArrowDown fontSize="small" />
              <ResultAmount>$12.4k</ResultAmount>
            </ItemResult>
          </Item>
          <Item>
            <ItemTitle>Last Week</ItemTitle>
            <ItemResult>
              <KeyboardArrowUpOutlined fontSize="small" />
              <resultAmount>$12.4k</resultAmount>
            </ItemResult>
          </Item>
          <Item>
            <ItemTitle>Last Month</ItemTitle>
            <ItemResult>
              <KeyboardArrowUpOutlined fontSize="small" />
              <resultAmount>$12.4k</resultAmount>
            </ItemResult>
          </Item>
        </Summary>
      </Bottom>
    </Container>
  );
};

export default Featured;
