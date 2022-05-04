import React, { useEffect, useState } from "react";
import useStock from "../../../../hooks/useStock";
import Photo from "../Photo/Photo";

const Gallery = () => {
  const [stock] = useStock();
  return (
    <div className="container">
      <h2 className="text-sky-900 font-semibold md:text-3xl text-2xl flex justify-center py-6 uppercase">
        Welcome to gallery
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {stock.slice(6).map((photo) => (
          <Photo key={photo.id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
