import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrders } from "../../../store/api";

const Orders = () => {
  const user = useSelector((state) => state?.user?.user);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    const fetchOrders1 = async () => {
      const res = await fetchOrders(user);
      setOrders(res.data.orders);
    };
    fetchOrders1();
  }, []);
  return (
    <div className="flex justify-center items-center h-[70vh]">
      {orders.length > 0 ? (
        <div className="w-full h-full p-5 flex flex-col gap-10">
          {orders.map((order, i) => (
            <table className="shadow-lg rounded-2xl bg-white">
              <thead className="bg-[#0369a1] text-white">
                <tr>
                  <th className="p-1">Order ID</th>
                  <th className="p-2">Name</th>
                  <th className=" ">Price</th>
                  <th className=" ">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item) => (
                  <tr className=" ">
                    <td className="text-center p-2">{item._id.slice(-2)}</td>
                    <td className=" p-3">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center  ">{item.cartQuantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-500">No orders yet</div>
      )}
    </div>
  );
};

export default Orders;
