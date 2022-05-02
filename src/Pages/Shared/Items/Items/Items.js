import React from "react";
import { Link } from "react-router-dom";
import useStocks from "../../../Hooks/useStocks";
import Item from "../Item/Item";

const Items = () => {
   const [photos] = useStocks();
  return (
    <div className="container py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
      {
        photos.slice(0,6).map(item=> <Item key={item.id} item={item}></Item>)
    }
    </div>
  );
};

export default Items;
