import React from "react";

const Contact = () => {
  return (
    <div className="py-6  container grid md:grid-cols-3 grid-cols-1 bg-red-100">
      <div className="mx-auto mb-3">
        <h2 className="text-upercase text-cyan-900 text-2xl font-bold uppercase">contact information</h2>
        <div className="flex my-2">
          <div>
            <h3 className="text-slate-900 mr-2 ">Address:</h3>
          </div>
          <div className="text-slate-700">
            <p>The Motorbike Warehouse</p>
            <p>149-151 Motizheel, The, Bangladesh</p>
          </div>
        </div>
        <div className="flex my-2">
          <div>
            <h3 className="text-slate-900 mr-2 ">Email:</h3>
          </div>
          <div className="text-cyan-700">
            <p>info@Themotorbikewarehouse.com</p>
          </div>
        </div>
        <div className="flex my-2">
          <div>
            <h3 className="text-slate-900 mr-2 ">Web:</h3>
          </div>
          <div className="text-cyan-700">
            <p>https://warehouse-management-1a464.web.app</p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h3 className="text-xl text-slate-900 mb-3">Sales Department</h3>
        <div className="text-slate-700">
          <p>Mon: 8:30am - 5:00pm</p>
          <p>Tue: 8:30am - 5:00pm</p>
          <p>Wed: 8:30am - 5:00pm</p>
          <p>Thu: 8:30am - 5:00pm</p>
          <p>Fri: 8:30am - 5:00pm</p>
          <p>Sat: 9:00am - 5:00pm</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div className="mx-auto pt-2">
        <img
          width={300}
          src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1652029731/warehouse-management/images/inventory/5124556_1_vqeurt.jpg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
