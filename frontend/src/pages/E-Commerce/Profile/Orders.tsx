import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../../store/api";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";
import { Order } from "../../../types";

const Orders = () => {
  const user = useAppSelector(selectUser);
  const [orders, setOrders] = useState<Order[]>([]);

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
          {orders.map((order, i) => {
            let createdAt = new Date(order.createdAt);
            return (
              <table className="shadow-lg rounded-2xl bg-white">
                <thead className="bg-[#0369a1] text-white">
                  <tr>
                    <th className="p-1">Order ID</th>
                    <th className="p-2">Name</th>
                    <th>Date of Purchase</th>
                    <th className=" ">Price</th>
                    <th className=" ">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item) => (
                    <tr className=" ">
                      <td className="text-center p-2">{item._id.slice(-2)}</td>
                      <td className=" p-3">{item.name}</td>
                      <td className="text-center">
                        {createdAt.toLocaleDateString()}
                      </td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center  ">{item.cartQuantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-500">No orders yet</div>
      )}
    </div>
  );
};

export default Orders;
