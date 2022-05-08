import React from 'react';

const About = () => {
   return (
     <div className="bg-slate-300 grid md:grid-cols-3 grid-cols-1 container ">
       <div className="md:col-span-2 text-center py-6 my-auto mx-auto">
         <h2 className="font-semibold text-2xl text-slate-900 py-3">About Us</h2>
         <h3 className="text-cyan-700 text-xl pb-1">Learn about Dhaka Motorbike Warehouse</h3>
         <div className="text-slate-700 text-center ">
           <p>
             Dhaka Motorbike Warehouse is the South's leading Premier Yamaha Dealer. A privately owned business based in
             Hampshire, offering the highest levels of service and expertise, whether you are looking to
             <span className="text-red-700 font-semibold"> purchase a new Yamaha</span>, a used motorcycle, or to
             service and maintain your current motorcycle.
           </p>
           <p>
             Dhaka Motorbike Warehouse showcase a large selection of the latest new Yamaha models, plus an extensive
             choice of top quality used motorcycles. We also keep a great range of Yamaha demonstrator models and if you
             bring your bike in with you, we can value it for part exchange and work out a deal that suits you.
           </p>
           <p>
             We also offer competitive finance from a variety of providers, including regular Yamaha backed promotions
             through Santander Finance.
           </p>
         </div>
       </div>
       <div className="my-auto mx-auto">
         <img
           src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1651384081/warehouse-management/images/inventory/bike_22_1_1_1_lc3soy.png`}
           alt=""
         />
       </div>
     </div>
   );
};

export default About;