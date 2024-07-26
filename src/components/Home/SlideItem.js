import React from 'react';

const SlideItem = ({ src, caption }) => {
  return (
    <div className="relative h-[30rem]">
      <img 
        src={src} 
        alt={caption} 
        className="w-full h-full object-cover"
        style={{ height: '30rem' }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
        <p className="text-lg font-semibold">{caption}</p>
      </div>
    </div>
  );
};

export default SlideItem;
