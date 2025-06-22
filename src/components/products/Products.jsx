import { useProduct } from '@/api/hooks/useProduct';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const { getProduct } = useProduct();
    const { data } = getProduct({ limit: 16 });
    const navigate = useNavigate();
    // console.log(data);

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#3A3A3A] font-bold mb-8 text-center">
                Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data?.data?.products?.map((product) => (
                    <div key={product.id} className="relative group bg-white  transition p-4">
                        <div

                            className="cursor-pointer"
                        >
                            <img
                                onClick={() => navigate(`/product/${product.id}`)}
                                src={product.thumbnail}
                                alt={product.title}
                                className="rounded-md w-full h-48 object-cover"
                            />
                            <h3 className="text-lg font-semibold mt-4 ">{product.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{product.category}</p>
                            <p className="text-black font-bold mt-2">Rp {product.discountPercentage}</p>
                            <p className="text-sm line-through text-gray-400">
                                Rp {product.price}
                            </p>
                        </div>
                        <span className="absolute top-12 right-12 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            New
                        </span>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <button
                    onClick={() => navigate("/shop")}
                    className="px-[74px] py-[12px] bg-white text-black border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition duration-150 font-semibold cursor-pointer"
                >
                    Show More
                </button>

            </div>
        </div>
    );
};

export default Products;