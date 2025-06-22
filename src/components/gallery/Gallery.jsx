import React from 'react';
import book from "@/assets/book.svg";
import chair from "@/assets/chair.svg";
import desctop from "@/assets/desctop.svg";
import vase from "@/assets/vase.svg";
import dining from "@/assets/dining.svg";
import bed from "@/assets/bed.svg";
import vasee from "@/assets/vasee.svg";
import kitchen from "@/assets/kitchen.svg";
import wall from "@/assets/wall.svg";

const Gallery = () => {
  return (
    <div
      className="
        w-full 
        grid 
        gap-4 
        p-4 sm:p-6 
        grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 
        auto-rows-[140px]
      "
    >
       
      <img src={book} alt="Book" 
      className="col-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-3 object-cover w-full h-full" />

      <img src={chair} alt="Chair"
       className="col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-4 lg:row-span-3 object-cover w-full h-full" />

      <img src={desctop} alt="Desktop"
      
      className="col-span-4 md:col-span-3 lg:col-start-2 lg:col-span-4 lg:row-start-1 lg:row-span-3 object-cover w-full h-full" />

      <img src={vase} alt="Vase"
       className="col-span-2 md:col-span-3 lg:col-start-3 lg:col-span-3 lg:row-start-4 lg:row-span-2 object-cover w-full h-full" />

      <img src={dining} alt="Dining"
       className="col-span-2 md:col-span-3 lg:col-start-6 lg:col-span-3 lg:row-start-2 lg:row-span-3 object-cover w-full h-full" />

      <img src={bed} alt="Bed"
       className="col-span-2 md:col-span-3 lg:col-start-9 lg:col-span-3 lg:row-start-1 lg:row-span-3 object-cover w-full h-full" />

      <img src={vasee} alt="Vasee"
       className="col-span-2 md:col-span-2 lg:col-start-9 lg:col-span-2 lg:row-start-4 lg:row-span-3 object-cover w-full h-full" />

      <img src={wall} alt="Wall"
       className="col-span-2 md:col-span-3 lg:col-start-11 lg:col-span-2 lg:row-start-4 lg:row-span-2 object-cover w-full h-full" />

      <img src={kitchen} alt="Kitchen"
       className="col-span-4 md:col-span-3 lg:col-start-12 lg:col-span-2 lg:row-start-1 lg:row-span-3 object-cover w-full h-full" />
    </div>
  );
};

export default Gallery;
