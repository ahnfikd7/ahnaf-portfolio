import React from 'react';
import './Background.css';

const Background = ({ images }) => {
  return (
    <div className="background">
      {images.map((image, index) => (
        <div
          key={index}
          className="background-card"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Background;