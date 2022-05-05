import React from "react";
import useStock from "../../../../hooks/useStock";
import Item from "../Item/Item";

const Items = () => {
  const [stock] = useStock();
  return (
    <div>
      <h2 className="text-cyan-900 font-semibold md:text-3xl text-2xl flex justify-center py-4 uppercase">
        Inventory items
      </h2>
      <div className="container  my-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {stock.slice(0, 6).map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
