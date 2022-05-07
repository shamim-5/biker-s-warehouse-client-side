import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../../hooks/useServiceDetail';

const ServiceDetail = () => {
   const { serviceId } = useParams();
   const [service] = useServiceDetail(serviceId);
   console.log(service);
   return (
      <div>
         <h2>Service Detail: {service.name}</h2>
      </div>
   );
};

export default ServiceDetail;