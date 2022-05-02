import { useEffect, useState } from "react";

const useStocks = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return [photos];
};
 
export default useStocks;
