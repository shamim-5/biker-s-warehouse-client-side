import React, { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h2 className="text-sky-900 font-semibold md:text-3xl text-2xl flex justify-center py-6 uppercase">
        Welcome to gallery
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
