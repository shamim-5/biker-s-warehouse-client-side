import { useEffect, useState } from "react";

const useStock = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);
  return [stock];
};

export default useStock;
