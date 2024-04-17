import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="medal"
          style={{ width: '100%', height: 'auto' }}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
