import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
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

      <div className="text-right container mb-4">
        <Link
          to="/inventory:/id"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Services;
