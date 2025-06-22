import { useProduct } from "@/api/hooks/useProduct";
import Features from "@/components/features/Features";
import Heroo from "@/components/hero/Heroo";
import { Pagination } from "antd";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 16;

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    if (pageS !== pageSize) {
      params.set("pageSize", pageS);
      params.set("page", "1");
    } else {
      params.set("page", page);
    }
    setParams(params);
  };

  return (
    <>
    <Heroo/>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">Shop</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.data?.products?.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white transition p-4 shadow-sm rounded-md"
            >
              <div className="cursor-pointer">
                <img
                  onClick={() => navigate(`/product/${product.id}`)}
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-md w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold mt-4 text-nowrap">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{product.category}</p>
                <p className="text-black font-bold mt-2">Rp {product.discountPercentage}</p>
                <p className="text-sm line-through text-gray-400">Rp {product.price}</p>
              </div>
              <span className="absolute top-12 right-12 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center">
          <Pagination
            current={page}
            onChange={handleChangePage}
            total={data?.data?.total}
            pageSize={pageSize}
          />
        </div>
      </div>

      <Features />
    </>
  );
};

export default Shop;
