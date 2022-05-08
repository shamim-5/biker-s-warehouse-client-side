import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import DetailInventory from "../DeatailInventory/DetailInventory";

const ManageInventory = () => {
   const [services, setServices] = useServices();

   const handleDeleteButtton = (id) => {
      console.log(id);
      const proceed = window.confirm('Are you sure?');
      if (proceed) {
         const url = `http://localhost:5000/inventory/${id}`;
         fetch(url, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               const remainging = services.filter(service => service._id !== id);
               setServices(remainging);
         })
      }
      
    };
   
  return (
    <div>
      <div className="container  my-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {services.map((service) => (
          <DetailInventory
            key={service._id}
            service={service}
            handleDeleteButtton={handleDeleteButtton}
          ></DetailInventory>
        ))}
      </div>
      <div className="text-right container mb-4">
        <Link
          to="/addinventory"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;
