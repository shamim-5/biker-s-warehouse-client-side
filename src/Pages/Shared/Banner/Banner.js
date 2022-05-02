import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="fixed">
      <img
        className="w-full"
        src={
          "https://res.cloudinary.com/dskmjlma4/image/upload/v1651393903/warehouse-management/images/banner_akquum.jpg"
        }
        alt=""
      />
      <div className="container absolute top-0 left-0">
        <h3>Banner banner banner banner</h3>
        <h3>Banner banner banner banner</h3>
        <h3>Banner banner banner banner</h3>
        <h3>Banner banner banner banner</h3>
        <h3>Banner banner banner banner</h3>
      </div>
    </div>
  );
};

export default Banner;
