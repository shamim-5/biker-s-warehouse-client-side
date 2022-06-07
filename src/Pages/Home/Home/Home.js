import React from "react";
import Banner from "../Banner/Banner";
import Services from "../../Inventory/Services/Services/Services";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Login/Loading/Loading";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  const [loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
