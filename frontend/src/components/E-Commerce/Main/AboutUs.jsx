import {
  DoneOutlined,
  DoneOutlineOutlined,
  LocalShipping,
  LocalShippingOutlined,
  LockOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-10 bg-[#f0f8ff] mt-7">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 pb-5">
          <div className="relative w-full md:w-1/2 lg:w-1/4 px-4 mb-16 lg:mb-0">
            <div className="relative text-center">
              <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-indigo-600 rounded-full">
                <LockOutlined
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              </span>
              <h3 className="mb-4 text-xl font-bold font-heading">
                Secure Shopping
              </h3>
              <p className="text-col">
                100% guarantee ensured by Ethereum blockchain
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="relative text-center">
              <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-indigo-600 rounded-full">
                <DoneOutlineOutlined
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              </span>
              <h3 className="mb-4 text-xl font-bold font-heading">Genuine</h3>
              <p className="text-col">Only 100% authentic product listings</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 lg:w-1/4 px-4 mb-16 md:mb-0">
            <div className="relative text-center">
              <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-indigo-600 rounded-full">
                <ThumbUpAltOutlined
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              </span>
              <h3 className="mb-4 text-xl font-bold font-heading">
                Customer Satisfaction
              </h3>
              <p className="text-col">High postive feedbacks received</p>
              <p className="text-col">from customers</p>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 lg:w-1/4 px-4 mb-16 lg:mb-0">
            <div className="relative text-center ">
              <span className="inline-flex  mb-16 items-center justify-center w-20 h-20 bg-indigo-600 rounded-full">
                <LocalShippingOutlined
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              </span>
              <h3 className="mb-4 text-xl font-bold font-heading">
                Free Shipping
              </h3>
              <p className="text-col">For orders above ₹500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
