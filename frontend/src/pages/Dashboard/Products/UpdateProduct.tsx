import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../../store/api";
import { selectComapny } from "../../../store/companySlice";
import { useAppSelector } from "../../../store/hooks";
import { selectProducts } from "../../../store/productSlice";
// import { Product } from "../../../types";

import * as api from "../../../store/api";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const company = useAppSelector(selectComapny);
  const [products, setProducts] = useState<any[]>([]);

  const product = products.find((product: any) => product._id === id);
  console.log(product);

  const [uName, setUName] = useState("");
  const [uPrice, setUPrice] = useState(0);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchProducts(company?.email);
      setProducts(res.data.products);
    };
    getProducts();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: product.name,
      price: uPrice,
      desc: product.desc,
      id,
    };

    const { data } = await api.updateProduct(newProduct);
    toast.success("Product updated successfully");
  };

  return (
    <div>
      <form
        className="p-5 flex flex-col gap-4"
        style={{ boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)" }}
      >
        <div className="flex gap-2 items-center">
          <label>Product Name </label>
          <input
            onChange={(e) => setUName(e.target.value)}
            placeholder={product?.name}
            className="p-[3px] border-2 border-[#0369a1] rounded-lg w-full"
            type="text"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Price </label>
          <input
            onChange={(e) => setUPrice(Number(e.target.value))}
            placeholder={product?.price?.toString()}
            className="p-[3px] border-2 border-[#0369a1] rounded-lg w-60 ml-16"
          />
        </div>

        <div className="flex gap-2 items-center ">
          <label>Description </label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            placeholder={product?.desc}
            className="p-[3px] border-2 border-[#0369a1] rounded-lg ml-5 w-60"
          />
        </div>

        <button
          onClick={handleUpdate}
          className=" w-1/6 bg-[#0369a1] p-3 rounded-lg text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
