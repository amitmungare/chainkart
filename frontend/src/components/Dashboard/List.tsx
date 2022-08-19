import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { fetchT } from "../../store/api";
import { useAppSelector } from "../../store/hooks";
import { selectComapny } from "../../store/companySlice";
import { formatPrice } from "../../utils";

const TableContainer1 = styled(TableContainer)``;

const CellWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image1 = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const Status = styled.span`
  padding: 5px;
  border-radius: 5px;
`;

const List = () => {
  let i = -1;
  const company = useAppSelector(selectComapny);
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await fetchT(company?.email);
      setCustomers(res.data.name);
      setTransactions(res.data.orders);
      setDates(res.data.date);
    };
    fetchTransaction();
  }, []);

  return (
    <TableContainer1 component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Product ID</TableCell>
            <TableCell className="tableCell">Product Name</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction: any) => {
            i++;
            return (
              <TableRow>
                <TableCell className="tableCell">{transaction._id}</TableCell>
                <TableCell className="tableCell">
                  <CellWrapper>
                    {/* <Image1 src={transaction.img} alt="" /> */}
                    {transaction.name}
                  </CellWrapper>
                </TableCell>
                <TableCell className="tableCell">{customers[i]}</TableCell>
                <TableCell className="tableCell">{dates[i]}</TableCell>
                <TableCell className="tableCell">
                  {formatPrice(transaction.price)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer1>
  );
};

export default List;
