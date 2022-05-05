import React from 'react';
import useStock from '../../../../hooks/useStock';

const InventoryDetail = () => {
   const [stock] = useStock();

   
   return (
      <div>
         <h2>Inventory Detail{stock.length} </h2>
      </div>
   );
};

export default InventoryDetail;