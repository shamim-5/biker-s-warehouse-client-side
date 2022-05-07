import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://thawing-harbor-76948.herokuapp.com/service/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  return (
    <div>
      <h2 className="text-cyan-900 font-semibold md:text-3xl text-2xl flex justify-center py-4 uppercase">
        Inventory services
      </h2>
      <div className="container  my-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {services.slice(0, 6).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
