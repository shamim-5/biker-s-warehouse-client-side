import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [service] = useServiceDetail(id);
  const { name, image, description, supplier, price, company } = service;

  const [quantity, setQuantity] = useState(25);
  const restQuantity = 25 - quantity;

  const handleQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  let newQuantity;
  const onSubmit = (data) => {
    newQuantity = parseInt(data.quantity) + quantity;
    setQuantity(newQuantity);
  };

  // post quantity into db
  //   const onSubmit = (data) => {
  //     console.log(data);

  //     const url = `http://localhost:5000/inventory`;
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => console.log(result));
  //   };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col services-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto my-6">
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
          <div className="flex font-medium">
            <h3 className="mr-1">Quantity:</h3>
            <span>{quantity}</span>
          </div>
          <h3 className="pb-3 font-medium ">
            Sold:<span className="ml-1">{restQuantity}</span>
          </h3>
          <div className="flex justify-between services-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
            <button
              onClick={() => handleQuantity()}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span>Delivered</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid-cols-1 my-auto mx-auto text-slate-700 shadow-lg py-4 px-4">
        <h2 className="text-center font-bold text-2xl mb-3">Restock The Item</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="number" placeholder="restock" {...register("quantity")} />
          <input className="pl-4 font-semibold rounded-lg " type="submit" value="Update Stock" />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;
