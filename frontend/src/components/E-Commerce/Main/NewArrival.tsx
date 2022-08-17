import { AddShoppingCart } from "@mui/icons-material";
import { BsCart3 } from "react-icons/bs";
import React from "react";

const NewArrival = () => {
  return (
    <section className="py-20 bg-[#f0f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
          Discover New Arrivals
        </h2>
        <div className="flex flex-wrap -mx-3 mb-24">
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
            <div className="p-6 bg-gray-50">
              <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                NEW
              </span>
              <a className="block px-6 mt-6 mb-2" href="#">
                <img
                  className="mb-5 mx-auto h-56 w-full object-contain"
                  src="https://m.media-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
                  alt=""
                />
                <h3 className="mb-2 text-xl font-bold font-heading">
                  OnePlus Nord 2 5G
                </h3>
                <p className="text-lg font-bold font-heading text-blue-500">
                  <span> ₹28,000</span>
                  <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                    ₹30,000
                  </span>
                </p>
              </a>
              <a
                className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                href="#"
              >
                <BsCart3 />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
            <div className="p-6 bg-gray-50">
              <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                NEW
              </span>
              <a className="block px-6 mt-6 mb-2" href="#">
                <img
                  className="mb-5 mx-auto h-56 w-full object-contain"
                  src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9446929/2019/5/7/fc40eb78-3bb7-4edb-9df8-d5f126335b3c1557211823572-Allen-Solly-Men-Teal-Regular-Fit-Checked-Casual-Shirt-684155-1.jpg"
                  alt=""
                />
                <h3 className="mb-2 text-xl font-bold font-heading">
                  Allen Solly
                </h3>
                <p className="text-lg font-bold font-heading text-blue-500">
                  <span>₹1,200</span>
                  <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                    ₹1,500
                  </span>
                </p>
              </a>
              <a
                className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                href="#"
              >
                {/* <AddShoppingCart /> */}
                <BsCart3 />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0">
            <div className="p-6 bg-gray-50">
              <span className="px-2 py-1" />
              <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                NEW
              </span>
              <a className="block px-6 mt-6 mb-2" href="#">
                <img
                  className="mb-5 mx-auto h-56 w-full object-contain"
                  src="https://rukminim2.flixcart.com/image/416/416/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70"
                  alt=""
                />
                <h3 className="mb-2 text-xl font-bold font-heading">Nivia</h3>
                <p className="text-lg font-bold font-heading text-blue-500">
                  <span>₹999</span>
                  <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                    ₹1,250
                  </span>
                </p>
              </a>
              <a
                className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                href="#"
              >
                {/* <AddShoppingCart /> */}
                <BsCart3 />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3">
            <div className="p-6 bg-gray-50">
              <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                NEW
              </span>
              <a className="block px-6 mt-6 mb-2" href="#">
                <img
                  className="mb-5 mx-auto h-56 w-full object-contain"
                  src="https://m.media-amazon.com/images/I/51vcHeEsB-L.jpg"
                  alt=""
                />
                <h3 className="mb-2 text-xl font-bold font-heading">
                  Autobiography
                </h3>
                <p className="text-lg font-bold font-heading text-blue-500">
                  <span>₹99</span>
                  <span className="text-xs text-black font-semibold font-heading line-through">
                    ₹130
                  </span>
                </p>
              </a>
              <a
                className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                href="#"
              >
                {/* <AddShoppingCart /> */}
                <BsCart3 />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            className="inline-block text-indigo-600 font-bold font-heading  rounded-md uppercase"
            href="#"
          >
            Show More
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
