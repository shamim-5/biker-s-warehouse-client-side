import React from "react";
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
    <div className="container  my-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
      {services.map((service) => (
        <DetailInventory key={service._id} service={service} handleDeleteButtton={handleDeleteButtton}></DetailInventory>
      ))}
    </div>
  );
};

export default ManageInventory;
