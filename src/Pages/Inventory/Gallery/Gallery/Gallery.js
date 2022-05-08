import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  },[])
  return (
    <div className="container">
      <h2 className="text-sky-900 font-semibold md:text-3xl text-2xl flex justify-center py-6 uppercase">
        Welcome to gallery
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {images.map((photo) => (
          <Photo key={photo._id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
