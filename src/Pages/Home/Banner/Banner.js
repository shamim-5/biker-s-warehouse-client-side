import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="container grid grid-cols-2"
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/dskmjlma4/image/upload/v1651393903/warehouse-management/images/banner_akquum.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <div className="text-cyan-900 font-semibold md:text-3xl text-2xl flex justify-center md:justify-start py-5">
          <h2>WELCOME TO THE MOTORBIKE WAREHOUSE</h2>
        </div>
        <div className="w-80">
          <p>
            The Motorbike Warehouse is one of the top bike brand suppliers. Our brands are carefully selected
            to offer the widest product range to cater for the needs of any road, dual-sport or off-road enthusiast.
            Added to our emphasis on rigorous parts support, our service department is fully equipped to ensure that all
            servicing, repair and modification requirements are taken care of quickly and professionally.
          </p>
        </div>
      </div>
      <div style={{ height: "400px" }}></div>
    </div>
  );
};

export default Banner;
