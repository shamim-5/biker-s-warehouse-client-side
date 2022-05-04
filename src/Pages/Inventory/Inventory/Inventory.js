import React from "react";
import { useParams } from "react-router-dom";
import useStock from "../../../hooks/useStock";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [stock] = useStock();
  console.log(stock);

  return (
    <div>
      <h2>this is inventory : {inventoryId}</h2>
    </div>
  );
};

export default Inventory;
