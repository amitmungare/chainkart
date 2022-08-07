import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrders } from "../../../store/api";

const Orders = () => {
  const user = useSelector((state) => state?.user?.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders1 = async () => {
      const res = await fetchOrders(user);
      setOrders(res.data);
    };
    fetchOrders1();
  }, []);
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="text-center text-2xl text-gray-500">No orders yet</div>
    </div>
  );
};

export default Orders;
