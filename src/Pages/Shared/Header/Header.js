import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navigation-menu uppercase">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 py-6 ">
        <div className="text-violet-900 font-semibold md:text-3xl text-2xl flex justify-center md:justify-start">
          <img
            src={
              "https://res.cloudinary.com/dskmjlma4/image/upload/v1651463272/warehouse-management/images/motorcycle_1_gytsbi.png"
            }
            alt=""
          />
          <h2>The Motorbike WareHouse </h2>
        </div>
        <div className="flex md:justify-end justify-center text-blue-900 font-semibold md:text-2xl text-xl nav-link">
          <Link to="home">Home</Link>
          <Link to="inventory">Inventory</Link>
          <Link to="gallery">Gallery</Link>
          <Link to="about">About</Link>
          <Link to="blogs">Blogs</Link>
          <Link to="login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
