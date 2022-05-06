import React from "react";
import { useParams } from "react-router-dom";
import useStock from "../../../../hooks/useStock";
import InventoryDetail from "../InventoryDetail/InventoryDetail";

const Inventory = () => {
  const { inventoryId } = useParams();

  

  return (
    <div>
      <h2>this is inventory : {inventoryId}</h2>
      <InventoryDetail></InventoryDetail>
    </div>
  );
};

export default Inventory;
