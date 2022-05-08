import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navigation-menu uppercase sticky top-0">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 py-6 ">
        <div className="text-violet-700 font-semibold md:text-2xl text-xl flex justify-center md:justify-start">
          <img
            src={
              "https://res.cloudinary.com/dskmjlma4/image/upload/v1651463272/warehouse-management/images/motorcycle_1_gytsbi.png"
            }
            alt=""
          />
          <h2 className="ml-1">Dhaka Motorbike WareHouse </h2>
        </div>
        <div className="flex md:justify-end justify-center text-blue-900 font-semibold md:text-xl nav-link">
          <Link to="home">Home</Link>
          <Link to="gallery">Gallery</Link>
          <Link to="about">About</Link>
          <Link to="blogs">Blogs</Link>
          {user && (
            <>
              <Link to="inventory:/id">Manage</Link>
              <Link to="addinventory">Add</Link>
            </>
          )}
          {user ? <button onClick={handleSignOut}>SignOut</button> : <Link to="login">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
