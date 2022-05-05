import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { id, name, image, description, supplier, price, company } = item;
  const navigate = useNavigate();

  const navigateStockUpdate = (inventoryId) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <p>Supplier Name: {supplier} </p>
          <p>Company: {company}</p>
          <h3 className="pb-3">Quantity:</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => navigateStockUpdate(id)}
            >
              <span>Stock Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
