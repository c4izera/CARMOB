import React from "react";

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <h3>{photo.title}</h3>
      <p>ID #{photo.id}</p>
    </div>
  );
};

export default Photo;
