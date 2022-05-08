import React from "react";
import { useForm } from "react-hook-form";

const AddInventory = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="uppercase text-center font-bold text-2xl mb-2 mt-4 text-slate-700">Add Inventory Item</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 rounded-md border-2" placeholder="Name" type="text" {...register("name")} />
        <textarea className="mb-2 rounded-md border-2" placeholder="Description" {...register("description")} />
        <input className="mb-2 rounded-md border-2" placeholder="Price" type="number" {...register("price")} />
        <input className="mb-2 rounded-md border-2" placeholder="Quantity" type="number" {...register("quantity")} />
        <input className="mb-2 rounded-md border-2" placeholder="Photo URL" type="text" {...register("image")} />
        <input className="mb-2 bg-slate-300 rounded py-2 text-xl" type="submit" value="Add To Inventory" />
      </form>
    </div>
  );
};

export default AddInventory;
