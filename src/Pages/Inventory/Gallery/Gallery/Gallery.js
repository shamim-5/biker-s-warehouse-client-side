import React, { useEffect, useState } from "react";
import useStocks from "../../../Hooks/useStocks";
import Photo from "../Photo/Photo";

const Gallery = () => {
   const [photos] = useStocks();
  return (
    <div className="container">
      <h2 className="text-sky-900 font-semibold md:text-3xl text-2xl flex justify-center py-6 uppercase">
        Welcome to gallery
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {photos.slice(6).map((photo) => (
          <Photo key={photo.id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
