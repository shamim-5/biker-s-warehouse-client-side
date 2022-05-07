import React, { useEffect, useState } from 'react';

const ManageQuantity = ({ quantity }) => {
   const [newQuantity, setNewQuantity] = useState();

   useEffect(() => {
      setNewQuantity(quantity)
   },[quantity])
   return (
     <div>
       <span>{newQuantity}</span>
     </div>
   );
};

export default ManageQuantity;