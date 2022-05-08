import React from "react";
import useServices from "../../../hooks/useServices";
import DetailInventory from "../DeatailInventory/DetailInventory";

const ManageInventory = () => {
   const [services] = useServices();
   
  return (
    <div className="container  my-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
      {services.map((service) => (
        <DetailInventory key={service._id} service={service}></DetailInventory>
      ))}
    </div>
  );
};

export default ManageInventory;
