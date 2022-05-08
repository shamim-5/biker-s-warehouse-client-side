import React from "react";
import Banner from "../Banner/Banner";
import Services from "../../Inventory/Services/Services/Services";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Login/Loading/Loading";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
