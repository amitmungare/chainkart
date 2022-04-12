import React from "react";
import { useParams } from "react-router-dom";

const ProductItem = ({ products }) => {
  const user = false;
  const { productName } = useParams();
  const prod = products.filter((product) => product.name === productName);
  const product = prod[0];
  return (
    <div
      className="relative max-w-screen-xl px-2 py-8 mx-auto"
      style={{ paddingBottom: "200px" }}
    >
      <div style={{ paddingTop: "60px" }}>
        <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>

        <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
      </div>

      <div className="grid gap-8 lg:items-start lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="relative mt-4">
            <img alt="" src={product.img} className="" />
          </div>
        </div>

        <div className="lg:top-0 lg:sticky">
          <form className="space-y-4 lg:pt-8">
            <div>
              <p className="text-xl font-bold">Price: ₹{product.price}</p>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-blue-700 rounded"
            >
              Add to cart
            </button>

            <button
              type="button"
              className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
            >
              Notify when on sale
            </button>
          </form>
        </div>

        <div className="lg:col-span-3">
          <div className="prose max-w-none">
            <p>{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
