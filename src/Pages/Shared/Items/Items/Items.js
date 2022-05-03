import React from "react";
import useStocks from "../../../Hooks/useStocks";
import Item from "../Item/Item";

const Items = () => {
   const [photos] = useStocks();
  return (
    <div className="container  my-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
      {photos.slice(0, 6).map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
