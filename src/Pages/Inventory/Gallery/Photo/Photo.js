import React from "react";
import { Link } from "react-router-dom";

const Photo = ({ photo }) => {
   const { image } = photo;
  return (
    <div className="">
      <div className="p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
       <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Photo;
